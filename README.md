## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy using pm2

To deploy using pm2, you can use the following commands:

```bash
npm run build
pm2 start npm --name "web-design" -- start
```
