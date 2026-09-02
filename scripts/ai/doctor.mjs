import { existsSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = new URL('../../', import.meta.url);
const atRoot = (path) => new URL(path, root);
const check = (name, ok, detail = '') => console.log(`${name.padEnd(24)} ${ok ? 'OK' : 'MISSING'}${detail ? ` (${detail})` : ''}`);
const commandExists = (command) => {
  try { execFileSync('sh', ['-lc', `command -v ${command}`], { stdio: 'ignore' }); return true; } catch { return false; }
};

console.log('BotPlanner AI Environment\n');
check('Graphify', commandExists('graphify'));
check('Graph indexed', existsSync(atRoot('graphify-out/graph.json')));
check('Canonical AGENTS.md', existsSync(atRoot('AGENTS.md')));
const skills = existsSync(atRoot('.agents/skills')) ? readdirSync(atRoot('.agents/skills'), { withFileTypes: true }).filter((entry) => entry.isDirectory()).length : 0;
check('Project skills', skills >= 10, `${skills} available`);
check('Codex', commandExists('codex'));
check('Copilot instructions', existsSync(atRoot('.github/copilot-instructions.md')));
check('Prompt manifest', existsSync(atRoot('prompts/manifest.json')));
check('Secrets policy', existsSync(atRoot('.env.example')) && !existsSync(atRoot('.env')));
process.exitCode = existsSync(atRoot('graphify-out/graph.json')) && skills >= 10 ? 0 : 1;
