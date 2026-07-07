# Agent Notes — Portfolio (sathwin/sathwin)

Guidance for AI agents and developers continuing work on this repository.

## Project Snapshot

- **Purpose**: Dual-purpose repo — the `README.md` is the GitHub profile page; the rest is a Next.js 14 portfolio site deployed on Vercel (`vercel.json`).
- **Stack**: Next.js 14 (App Router, static export of `/`), TypeScript, Tailwind CSS, Framer Motion.
- **Content model**: All portfolio content lives as typed constants in `lib/data.ts` (projects, experience, awards, certifications, stack layers, ops cards, personal info). Components under `components/` are pure presentation; edit `lib/data.ts` to change content.
- **Pages**: single page `app/page.tsx` composing `Hero`, `Projects`, `StackLayers`, `Operations`, `Experience`, `Awards`, `Certifications`, `Contact`, `Footer` with `Nav`.

## Change Log (2026-07 polish pass)

### README.md (GitHub profile)
- Featured Project headings now link to the real repositories (previously all four pointed to the bare profile `https://github.com/sathwin`):
  - FlowSight → `https://github.com/sathwin/FlowSight`
  - SmartQueue → `https://github.com/sathwin/smartqueue`
  - LegalDocs AI → `https://github.com/sathwin/legaldocs-ai`
  - DocuMind AI → **unlinked** (no public repo exists; verified via GitHub API 404). Re-link when the repo is published.

### lib/data.ts
- FlowSight `github` normalized to `https://github.com/sathwin/FlowSight` (was lowercase `flowsight`).
- Removed dead `github` links (GitHub API returned 404) from MediQuery AI, ChainSwap DEX, and BookTrack Library. `Projects.tsx` renders the GitHub icon conditionally, so these cards now simply show no source link instead of a 404. Restore the field if/when repos are published.
- Removed stray trailing `// Updated descriptions` comment.

### components/Projects.tsx
- "View Live Demo" label → "Open Live App" (per guardrails, no "demo" wording). Note: no project currently sets the optional `demo` field, so this link does not render today.

## Verification

- `npm install && npm run build` — static export succeeds. One pre-existing ESLint warning (`<img>` in `components/ui/ProfileImage.tsx`, `@next/next/no-img-element`); non-blocking.

## Known Gaps / Next Steps

- README "Resume" badge links to `https://github.com/sathwin` — point it at a real hosted resume (PDF in this repo, or a drive link).
- DocuMind AI (README) and MediQuery/ChainSwap/BookTrack (`lib/data.ts`) have no public repos; publish and restore links.
- `ProfileImage.tsx` uses `<img>`; migrate to `next/image` to clear the lint warning.
- `heroStats` and section copy contain fixed figures (e.g., "6 prod systems"); keep in sync with `projects` when adding/removing entries.

## Guardrails

- Never label any project a "demo" in UI or documentation.
- Do not add AI co-author trailers or AI attribution to commits or repo metadata.
- Never link to repositories that do not exist — verify with the GitHub API before adding a URL.
- All content edits go through `lib/data.ts`, not the components.
- Run `npm run build` before pushing.
