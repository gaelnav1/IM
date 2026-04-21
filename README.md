# InfluenceMarkt

Marketplace que conecta marcas con influencers — con analíticas verificadas, contratos seguros y pagos en escrow.

## Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Deploy**: AWS Amplify + CloudFront

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Estructura

```
src/
  app/
    page.tsx                  # Landing page
    dashboard-marca/          # Dashboard para marcas
    dashboard-influencer/     # Dashboard para influencers
  components/                 # Componentes compartidos
  lib/                        # Utilidades
```

## Páginas

- `/` — Landing page
- `/dashboard-marca` — Dashboard de marca (beta)
- `/dashboard-influencer` — Dashboard de influencer (beta)
