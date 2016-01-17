import * as Lint from 'tslint/lib/lint'

export class Formatter extends Lint.Formatters.AbstractFormatter {
  public format(failures: Lint.RuleFailure[]): string {
    return failures.map(failure => {
      let {line, character } = failure.getStartPosition().getLineAndCharacter()
      return `${failure.getFileName()}:${line + 1}:${character + 1}: ${failure.getFailure()}`
    }).join('\n')
  }
}