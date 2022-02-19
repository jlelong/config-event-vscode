import * as vscode from 'vscode';

function getWorkspaceConfiguration(): vscode.WorkspaceConfiguration {
	const editor = vscode.window.activeTextEditor;
	if (editor) {
		return vscode.workspace.getConfiguration(undefined, editor.document.uri);
	} else {
		return vscode.workspace.getConfiguration();
	}
}

function logConfiguration() {
	const configuration = getWorkspaceConfiguration();
	console.log('dummySetting: ' + configuration.get('conf.dummySetting'));

}

export function activate(context: vscode.ExtensionContext) {

	logConfiguration();
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(ev => logConfiguration()));
}