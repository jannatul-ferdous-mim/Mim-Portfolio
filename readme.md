# Mim's 3D Portfolio (outer scene)

The 3D room for **Jannatul Ferdous Mim**'s portfolio. The camera zooms into a computer whose screen loads **MimOS** (the `mim-os` project) in an iframe.

Live (after deploying): <https://jannatul-ferdous-mim.vercel.app/>, with MimOS at <https://mim-os.vercel.app/>.

## Credits

The 3D scene is based on [portfolio-website](https://github.com/henryjeff/portfolio-website) by Henry Heffernan, used under the MIT License. See [LICENSE.md](LICENSE.md), which must stay in this repository.

## Development

```bash
npm install
npm run dev          # http://localhost:8080 (also printed on your LAN IP)
```

Add `?dev` to the URL to load MimOS from its local dev server (`http://localhost:3000/`) instead of the deployed one. Run `npm run dev` in `../mim-os` first.

Other URL flags: `?debug` skips the BIOS screen, `?desktop` stops phones from being redirected to the MimOS simple view.

The deployed MimOS address is the `OS_URL` constant at the top of `src/Application/World/MonitorScreen.ts`.

## Production

```bash
npm run build        # outputs to ./public
npm start            # optional: serve ./public with express on port 8080
```

On Vercel this deploys as a static site (see `vercel.json`): build command `npm run build`, output directory `public`. Name the Vercel project `jannatul-ferdous-mim` so it gets the URL used in `src/index.html` (`mim-portfolio.vercel.app` is already taken by someone else).

To push to your own GitHub repository:

```bash
git remote add origin https://github.com/<your-user>/<repo-name>.git
git push -u origin main
```

## Node version

Tested and working on **Node 24.11.1 / npm 11.6.2** (Windows 11). No nvm downgrade needed.

One fix was required for newer Node: `npm install` now pulls a recent `@types/node` that TypeScript 4.6 cannot parse, so `src/tsconfig.json` sets `"types": []`, `"skipLibCheck": true` and `"lib": ["ES2017", "DOM", "DOM.Iterable"]`.
