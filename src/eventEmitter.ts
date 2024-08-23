import { EventEmitter } from 'events';
import { sysMon } from './sysMon';
import { command } from './command';

class ExtensionEmitter extends EventEmitter {}

export const extensionEmitter = new ExtensionEmitter();

extensionEmitter.on('setting-update', () => {
  sysMon.onSettingUpdate();
  command.changeContext();
});
