# react_cv_v2

Personal CV / portfolio single-page app. React 18 + TypeScript + Vite, deployed to
GitHub Pages at https://dima-mcarrow.github.io/react_cv_v2 (`base: "/react_cv_v2/"`
in `vite.config.ts` — never drop it, or every asset 404s in production).

## Commands

```bash
npm run dev       # vite dev server
npm run build     # tsc -b && vite build
npm run lint      # eslint .
npm run deploy    # predeploy runs build, then gh-pages -d dist
```

`npm run lint` currently reports 5 pre-existing errors in `types/three-examples.d.ts`
(unused `Object3D`, four `any`). Not introduced by new work — don't let them mask
new lint errors you actually caused.

## Structure

- `src/App.tsx` — flat list of sections, no router. Order = page order.
- `src/components/<Name>.tsx` + `<Name>.css` — one CSS file per component,
  imported at the top of the component. No CSS modules, no Tailwind here; class
  names are plain global strings (`snake_case` / `kebab-case`, mixed).
- `src/assets/projects/*.webp` — project card screenshots (top-of-page crop,
  900px wide). Originals live in `src/assets/projectsScreenshots/`.
- `src/content/*.json` — text content extracted out of JSX (in progress).
- `src/*.png|jpg` — imported as ES modules by components (`import x from "../x.png"`),
  so Vite hashes and rewrites them.
- `public/` — served as-is, referenced by runtime string paths: `public/svg/*.svg`
  (skill-cloud textures), `DM.svg`, `Dimitri_Makarov_Resume.pdf`.
- `types/three-examples.d.ts` — hand-written ambient types for `three/examples`.

Assets rule of thumb: if a path is built at **runtime** (string in an array,
`innerHTML`, a texture loader) it must live in `public/`. If it's a static
`import`, it lives in `src/`.

## Theming

All colours are design tokens declared once on `:root` in `src/index.css`.
**No component stylesheet may contain a raw colour literal** — always
`var(--token)`. The dark theme is the default and holds the original palette;
the light theme ("Paper & Ink") is a single
`@media (prefers-color-scheme: light)` block at the bottom of `index.css` that
redefines the same tokens and nothing else. Changing or replacing a theme means
editing that one block.

Tokens: `--bg`, `--surface`, `--surface-border`, `--text`, `--text-muted`,
`--text-dim`, `--text-bright`, `--accent`, `--accent-strong`, `--heading`,
`--tag`, `--backdrop`, `--glow-logo`, and `--code-*` for the typewriter.

`--surface-border` is `transparent` in dark mode: tiles that sit directly on the
page background (`.card`, `.educ-card`, `.skill`) need an outline in light mode
only. Those rules also set `box-sizing: border-box`, because the project has no
global box-sizing reset and the border would otherwise grow the tile by 2px.

## Conventions in this codebase

- Components are named arrow-function exports: `export const Foo = () => {...}`.
  Exception: `ToTop.tsx` default-exports.
- `AOS.init({ duration: 1000 })` is called in a `useEffect` in almost every
  section component. It's idempotent-ish and harmless; keep the pattern rather
  than inventing a second one, unless refactoring it out everywhere at once.
- Prettier-style formatting: 2 spaces, double quotes, semicolons, trailing commas.
- Code comments in English.

## Known rough edges (don't "fix" silently, mention them first)

- `MobileNav.tsx` still builds its menu with `document.createElement` +
  `innerHTML` inside a `useEffect` instead of using React state. Works, but
  it's imperative DOM manipulation living inside React. `Educ.tsx` used to do
  the same and has been converted; `MobileNav` is the last one.
- The education modal uses `role="dialog"` rather than a native `<dialog>`,
  and does not trap focus. Escape and the Close button are the keyboard paths
  out.
- `public/svg/` holds 19 icons that the skill cloud no longer lists (aws,
  blender, debian, gitlab, heroku, jquery, material-ui, mongodb, mysql,
  namecheap, php, powershell, python, sass, sqlite, trello, vim, windows, wp).
  `public/` is copied to `dist/` wholesale, so they still ship.
- skillicons.dev has no icon for Stripe, Playwright, socket.io, Zod, JWT, MJML,
  Mantine or DaisyUI — it answers with an SVG containing the literal text
  `undefined`. Those skills are listed as text chips under the tile grid
  instead. Check a new icon name before adding it.
- `public/Dimitri_Makarov_CV.html` is the August CV; the button serves
  `Dimitri_Makarov_CV_CDI.pdf`. The HTML one is not linked from anywhere.
- Anything in `public/` referenced by a runtime string must be prefixed with
  `import.meta.env.BASE_URL`, or it breaks on a URL without a trailing slash.
- Security history: commit 47b8844 removed a malicious JS loader from
  `eslint.config.js`. If anything odd reappears in build/config files, stop and
  flag it.

## Working agreement

- Explain the reasoning in chat before/while changing code; the user is here to
  learn, not to receive diffs.
- One change at a time.
- Respond in Russian; commit messages and code comments in English.
