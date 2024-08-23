import { ExtensionContext } from 'vscode';
import { setting } from './setting';
import { sysMon } from './sysMon';
import { command } from './command';

export function activate(context: ExtensionContext) {
  setting.init(context);
  command.init(context);
  sysMon.init(context);
}

export function deactivate() {
  sysMon.cancelUpdate(true);
}
