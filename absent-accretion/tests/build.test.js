import { describe, it, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

describe('astro build', () => {
  it('builds the site', () => {
    execSync('npm run build', { cwd: join(__dirname, '..'), stdio: 'ignore' });
    const distIndex = join(__dirname, '..', 'dist', 'index.html');
    expect(existsSync(distIndex)).toBe(true);
  });
});
