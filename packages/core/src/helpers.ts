import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import readdir from 'recursive-readdir'

const cwd: string = process.cwd()

export const existsSync = (f: string): boolean => {
  try {
    fs.accessSync(f, fs.constants.F_OK)
    return true
  } catch (_) {
    return false
  }
}

export const isProd = () => {
  let env = process.env.NODE_ENV || 'development'
  if (process.env.REACT_SSR_ENV) {
    env = process.env.REACT_SSR_ENV
  }
  return env === 'production'
}

export interface Config {
  id: string
  distDir: string
  viewsDir: string
  staticViews: string[]
  ext: 'jsx' | 'tsx'
  webpack?: (defaultConfig: webpack.Configuration, env: 'development' | 'production') => webpack.Configuration
}

const getSsrConfig = (): Config => {
  const defaultConfig: Config = {
    id: 'default',
    distDir: '.ssr',
    viewsDir: 'views',
    staticViews: [],
    ext: 'jsx'
  }
  const ssrConfigPath = path.join(cwd, 'ssr.config.js')
  if (existsSync(ssrConfigPath)) {
    return Object.assign(defaultConfig, require(ssrConfigPath))
  } else {
    return defaultConfig
  }
}

export const getEngine = (): 'jsx' | 'tsx' => ssrConfig.ext

export const ssrConfig: Config = getSsrConfig()

export const getPages = async (): Promise<string[]> => {
  const possibles = await readdir(path.join(cwd, ssrConfig.viewsDir))
  const pages = []
  for (let i = 0; i < possibles.length; i++) {
    const possible = possibles[i]
    const name = path.basename(getPageId(possible, '/'))
    if (name.toLowerCase().startsWith('_app') || name.toLowerCase().startsWith('_document')) {
      continue
    }
    if (possible.endsWith('.jsx') || possible.endsWith('.tsx')) {
      pages.push(possible)
    }
  }
  return pages
}

export const getPageId = (page: string, separator: string = '_'): string => {
  const [, ...rest] = page.replace(path.join(cwd, ssrConfig.viewsDir), '')
    .replace(path.extname(page), '')
    .split(path.sep)
  return rest.join(separator)
}

const ignores = [
  '.*',
  '*.json',
  '*.lock',
  '*.md',
  '*.txt',
  '*.yml',
  'LICENSE',
]

const ignoreDotDir = (file: string, stats: fs.Stats) => {
  return stats.isDirectory() && path.basename(file).startsWith('.')
}

const ignoreNodeModules = (file: string, stats: fs.Stats) => {
  return stats.isDirectory() && path.basename(file) == 'node_modules'
}

export const getCacheablePages = async (): Promise<string[]> => {
  return readdir(cwd, [ignoreNodeModules, ignoreDotDir, ...ignores])
}
