import { ChildProcess } from 'child_process'

export = nodeDev

declare function nodeDev(script: string, scriptArgs: Array<string>, nodeArgs: Array<string>, options: DevOptions): ChildProcess;


interface DevOptions {
  clear?: boolean;
  dedupe?: boolean;
  deps?: number;
  graceful_ipc: any;
  ignore: Array<string>;
  notify: boolean;
  poll: boolean;
  respawn: boolean;
  timestamp: number;
}