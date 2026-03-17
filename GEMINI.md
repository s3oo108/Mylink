# GEMINI.md - Project Context

## Project Overview
**My Link** is a link manager project. The primary application is located in the `my-profile/` subdirectory, which is a Next.js 16 application bootstrapped with `create-next-app`.

- **Main Technologies:**
  - **Framework:** Next.js 16 (App Router)
  - **Language:** TypeScript
  - **Styling:** Tailwind CSS v4
  - **Runtime:** Node.js

## Project Structure
- `my-profile/`: The main Next.js application.
  - `app/`: Contains the application routes, layouts, and global styles.
  - `public/`: Static assets (images, icons, etc.).
  - `next.config.ts`: Next.js configuration.
  - `package.json`: Project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.

## Building and Running
All commands should be executed within the `my-profile/` directory.

- **Development Server:**
  ```bash
  cd my-profile
  npm run dev
  ```
- **Build for Production:**
  ```bash
  cd my-profile
  npm run build
  ```
- **Start Production Server:**
  ```bash
  cd my-profile
  npm run start
  ```
- **Linting:**
  ```bash
  cd my-profile
  npm run lint
  ```

## Development Conventions
- **App Router:** Follow the Next.js App Router conventions (e.g., `layout.tsx`, `page.tsx`).
- **Styling:** Use Tailwind CSS v4 utility classes. Global styles and Tailwind imports are managed in `my-profile/app/globals.css`.
- **TypeScript:** Ensure all new code is type-safe. Configuration is in `my-profile/tsconfig.json`.
- **Paths Alias:** The project is configured with a path alias `@/*` pointing to `./*` (within the `my-profile/` directory).
- **Formatting:** ESLint is used for linting (config in `my-profile/eslint.config.mjs`).

## Current Implementation Details
- The home page (`my-profile/app/page.tsx`) currently displays a default Next.js starter page.
- The layout (`my-profile/app/layout.tsx`) uses Geist and Geist Mono fonts.
- The project is configured with a dark mode preference using CSS variables and `@media (prefers-color-scheme: dark)` in `globals.css`.
