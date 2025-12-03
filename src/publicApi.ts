import * as vscode from 'vscode';

export interface PromptOptions {
  column?: vscode.ViewColumn;
  timeoutMs?: number;
  allowMultiple?: boolean;
  insertIntoEditor?: boolean; // default false
}

export interface PromptArgs {
  cmdName?: string; // e.g., 'LIB/CMD' or 'CMD'
  label?: string; // optional label prefix
  xml?: string; // optional pre-fetched CMD XML
  initialCommand?: string; // full CL command to pre-populate
  options?: PromptOptions;
}

export interface CLPrompterAPI {
  // Opens the prompter UI and resolves to the formatted command on Save.
  // Resolves undefined on Cancel/timeout.
  prompt: (args?: PromptArgs) => Promise<string | undefined>;
  // Convenience helpers retained for internal use/back-compat
  showPrompt: (extensionUri?: vscode.Uri) => Promise<void>;
  createOrShow: (extensionUri: vscode.Uri) => Promise<void>;
  // API version for semver negotiation
  version: string;
  isAvailable: () => boolean;
}
