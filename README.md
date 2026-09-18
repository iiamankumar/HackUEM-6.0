# HackUEM 6.0

The official website for **HackUEM 6.0** — a 12-hour flagship hackathon organized by the **UEM Jaipur ACM Student Chapter** at UEM Jaipur.

**Live site:** https://hackuem.lovable.app

## Event

- **HackUEM 6.0** — 12-hour flagship hackathon
- **Organized by:** UEM Jaipur ACM Student Chapter · UEM Jaipur · IIC
- **Categories:** Open to all · Junior Category (1st year only)
- **Team size:** 1–4 members
- **Entry:** Free

## Tech Stack

- [TanStack Start v1](https://tanstack.com/start) (React 19, SSR)
- [TanStack Router](https://tanstack.com/router)
- Tailwind CSS v4
- Vite 7

## Getting Started

```bash
# install dependencies
bun install   # or: npm install

# start the dev server
bun run dev   # or: npm run dev
```

The main page lives at `src/routes/hackuem.tsx`; the root route redirects `/` to the HackUEM page.

## Structure

```
src/
  routes/        # Route files (hackuem page, root)
  assets/        # Logos and partner images
public/
  hackuem-favicon.png
  acm/           # Chapter reference assets
```

---

Website by the UEM Jaipur ACM Student Chapter. Original design reference: ACM VIT Student Chapter (used with permission).
