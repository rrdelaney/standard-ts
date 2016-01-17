import * as Linter from 'tslint'
import { readFileSync } from 'fs'
import * as path from 'path'

export default function standard(files: string[]): string {
  return files.map(file => new Linter('standard.ts', file, {
      configuration: {
        rules: {
          'curly': true,
          'indent': [true, 'spaces'],
          'no-trailing-whitespace': true,
          'no-unused-variable': [true, 'react'],
          'quotemark': [true, 'single', 'avoid-escape'],
          'semicolon': false,
          'triple-equals': [true, 'allow-null-check'], 
          'whitespace': [true, 'check-branch', 'check-operator', 'check-decl']
        }
      },
      formatter: 'Standard',
      formattersDirectory: 'lib',
      rulesDirectory: ''
    }).lint().output
  ).join('\n')
}
