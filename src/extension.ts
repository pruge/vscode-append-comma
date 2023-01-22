import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.appendComma', () => {
      appendComma()
    }),
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.appendSemiColon', () => {
      appendSemiColon()
    }),
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.appendColon', () => {
      appendColon()
    }),
  )
}

export function deactivate() {}

function appendComma() {
  const textEditor = vscode.window.activeTextEditor

  if (!textEditor) {
    return
  }

  const cursorPosition = textEditor.selection.active
  const line = textEditor.document.lineAt(cursorPosition)

  if (line.text[line.text.length - 1] === ',') {
    textEditor.edit((builder) => {
      builder.delete(
        new vscode.Range(line.range.end.translate(0, -1), line.range.end),
      )
    })
  } else {
    textEditor.edit((builder) => {
      builder.insert(line.range.end, ',')
    })
    vscode.commands.executeCommand('editor.action.insertLineAfter')
  }
}

function appendSemiColon() {
  const textEditor = vscode.window.activeTextEditor

  if (!textEditor) {
    return
  }

  const cursorPosition = textEditor.selection.active
  const line = textEditor.document.lineAt(cursorPosition)

  if (line.text[line.text.length - 1] === ';') {
    textEditor.edit((builder) => {
      builder.delete(
        new vscode.Range(line.range.end.translate(0, -1), line.range.end),
      )
    })
  } else {
    textEditor.edit((builder) => {
      builder.insert(line.range.end, ';')
    })
    vscode.commands.executeCommand('editor.action.insertLineAfter')
  }
}

function appendColon() {
  const textEditor = vscode.window.activeTextEditor

  if (!textEditor) {
    return
  }

  const cursorPosition = textEditor.selection.active
  const line = textEditor.document.lineAt(cursorPosition)

  if (line.text[line.text.length - 1] === ':') {
    textEditor.edit((builder) => {
      builder.delete(
        new vscode.Range(line.range.end.translate(0, -1), line.range.end),
      )
    })
  } else {
    textEditor.edit((builder) => {
      builder.insert(line.range.end, ' : ')
    })
    vscode.commands.executeCommand('cursorEnd')
  }
}
