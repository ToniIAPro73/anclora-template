#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const candidates = [
  process.env.ANCLORA_TEXT_QUALITY_SCRIPT,
  resolve(
    root,
    '.anclora-agent-skills/skills/anclora-text-quality-guardian/scripts/anclora_text_quality_audit.py',
  ),
  resolve(
    root,
    '../anclora-agent-skills/skills/anclora-text-quality-guardian/scripts/anclora_text_quality_audit.py',
  ),
  '/home/toni/projects/anclora-agent-skills/skills/anclora-text-quality-guardian/scripts/anclora_text_quality_audit.py',
].filter(Boolean);

const script = candidates.find((candidate) => existsSync(candidate));

if (!script) {
  console.error('Anclora text quality gate not found.');
  console.error('Set ANCLORA_TEXT_QUALITY_SCRIPT or clone anclora-agent-skills next to this repo.');
  process.exit(1);
}

const python =
  spawnSync('python3', ['--version'], { stdio: 'ignore' }).status === 0 ? 'python3' : 'python';
const result = spawnSync(python, [script, '--repo', root, ...process.argv.slice(2)], {
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
