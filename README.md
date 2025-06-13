# Explore React TanStack Demo



> A live-coded, full-stack Rick & Morty character directory showcasing **five powerful TanStack libraries**: Start, Router, Query, Table, and Store.

## 🎤 About the Presentation

This repository supports Marcus' live demo for a local React meetup titled:

> *"Supercharge Your React Apps with TanStack"*

In this 45-minute session, we dive into how TanStack's ecosystem solves real-world React problems with clean APIs, type safety, and excellent developer ergonomics. *No slides, just code.*

## 🌌 The Demo Project

This Rick & Morty directory app highlights how each TanStack library fits into a real use case:

- **TanStack Start** – Full-stack app framework with SSR & server functions
- **TanStack Router** – Type-safe, data-driven routing
- **TanStack Query** – Powerful async state and caching
- **TanStack Table** – Feature-rich, accessible data grids
- **TanStack Store** – Framework-agnostic reactive state management

### 🔍 App Features

- Browse and filter characters from [rickandmortyapi.com](https://rickandmortyapi.com/)
- Client-side routing and preloading
- Server-side rendering via TanStack Start
- Interactive table with sorting and filtering
- Shared reactive search input using TanStack Store

---

## 🚀 Getting Started

```bash
# Clone the repository
$ git clone https://github.com/marcus/explore-react-tanstack.git

# Navigate to the project folder
$ cd explore-react-tanstack

# Install dependencies
$ npm install

# Start the development server
$ npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🌐 Deployment (GitHub Pages)

This project is deployed to GitHub Pages via GitHub Actions. Deployment occurs automatically when pushing to the `main` branch.

- The output folder is `.start/dist`
- Pages branch is `gh-pages`
- Hosted at: `https://marcus.github.io/explore-react-tanstack/`

---

## 🤖 GitHub Actions CI/CD

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install deps
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./.start/dist
```

---

## 🧠 Copilot Instructions

### `.github/copilot-instructions.md`

```md
# Copilot Instructions for explore-react-tanstack

This project uses the following stack:
- TanStack Start
- TanStack Router
- TanStack Query
- TanStack Table
- TanStack Store

Do not use legacy React patterns like `useEffect` for data fetching. Prefer TanStack primitives.

Follow file-based routing conventions from TanStack Start.
Prefer `useQuery` for async data.
Prefer `Store` and `Derived` for state management.
Build clean, composable utilities (e.g. `src/utils/api.ts`).
Use Tailwind CSS if UI styling is needed.
Generate type-safe utilities and hooks where applicable.
```

---

## Development

From your terminal:

```sh
pnpm install
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Editing and previewing the docs of TanStack projects locally

The documentations for all TanStack projects except for `React Charts` are hosted on [https://tanstack.com](https://tanstack.com), powered by this TanStack Router app.
In production, the markdown doc pages are fetched from the GitHub repos of the projects, but in development they are read from the local file system.

Follow these steps if you want to edit the doc pages of a project (in these steps we'll assume it's [`TanStack/form`](https://github.com/tanstack/form)) and preview them locally :

1. Create a new directory called `tanstack`.

```sh
mkdir tanstack
```

2. Enter the directory and clone this repo and the repo of the project there.

```sh
cd tanstack
git clone git@github.com:TanStack/tanstack.com.git
git clone git@github.com:TanStack/form.git
```

> [!NOTE]
> Your `tanstack` directory should look like this:
>
> ```
> tanstack/
>    |
>    +-- form/
>    |
>    +-- tanstack.com/
> ```

> [!WARNING]
> Make sure the name of the directory in your local file system matches the name of the project's repo. For example, `tanstack/form` must be cloned into `form` (this is the default) instead of `some-other-name`, because that way, the doc pages won't be found.

3. Enter the `tanstack/tanstack.com` directory, install the dependencies and run the app in dev mode:

```sh
cd tanstack.com
pnpm i
# The app will run on https://localhost:3000 by default
pnpm dev
```

4. Now you can visit http://localhost:3000/form/latest/docs/overview in the browser and see the changes you make in `tanstack/form/docs`.

> [!NOTE]
> The updated pages need to be manually reloaded in the browser.

> [!WARNING]
> You will need to update the `docs/config.json` file (in the project's repo) if you add a new doc page!


---

## 📎 External APIs

This project uses the [Rick & Morty API](https://rickandmortyapi.com/) for character data.

Please review their [terms of use](https://rickandmortyapi.com/about) before production usage.

---

## 🪪 License

MIT License. See [LICENSE](./LICENSE).

---

## 🙌 Acknowledgements

- [TanStack](https://tanstack.com/) for their incredible work
- [Rick and Morty API](https://rickandmortyapi.com/) for open data
- React Meetup organizers and attendees 💙

---

## 🧪 Branching Strategy

Use topic branches for development:

- `main` – production, deployable branch
- `feat/table-search` – e.g. table filtering demo
- `exp/router-layouts` – e.g. router nesting experiments

PRs welcome. Code cleanly and comment clearly.

---

## 📣 Feedback & Improvements

Issues and suggestions are encouraged! Please [open an issue](https://github.com/marcus/explore-react-tanstack/issues) or reach out at the next meetup.

Happy coding! 🚀
