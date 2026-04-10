# Security

## Malware (e.g. xmrig) – not from this repo

This project has been audited. **The xmrig miner and similar malware do not come from this codebase.**

- **Dependencies:** Only standard packages (Next.js, React, React DOM, react-icons). No suspicious or unknown packages.
- **Scripts:** No `postinstall` / `preinstall` or other lifecycle scripts that download or run external code.
- **Code:** No `eval()`, `exec()`, `spawn()`, or shell execution. No API routes that run system commands.
- **Build:** Plain Next.js config; no custom hooks that fetch or execute remote scripts.

If malware appears on the server (e.g. under `/opt/sugarcare-frontend/`), it was placed there by something else (e.g. SSH compromise, another app, or cron/systemd added by an attacker). Remove it on the server and fix the server’s access and hardening.

## Keeping the project safe

1. **Install from lockfile on the server:** Use `npm ci` (not `npm install`) so only versions in `package-lock.json` are used.
2. **Run audits:** Use `npm run audit` (or `npm audit`) regularly and fix reported issues.
3. **Node version:** Use Node.js 20+ (see `engines` in `package.json`).
4. **Deploy:** Deploy only from this repo; do not copy binaries or unknown scripts from the server into the project.
