#!/bin/bash
# InfluenceMarkt — setup inicial para subir a GitHub
# Uso: bash setup-github.sh

set -e

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  InfluenceMarkt · Setup GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. Verificar que git está instalado
if ! command -v git &> /dev/null; then
  echo "❌ git no está instalado. Instálalo primero."
  exit 1
fi

# 2. Verificar que gh CLI está instalado (opcional pero recomendado)
if command -v gh &> /dev/null; then
  HAS_GH=true
  echo "✓ GitHub CLI detectado"
else
  HAS_GH=false
  echo "ℹ  GitHub CLI no instalado — crearás el repo manualmente"
fi

echo ""

# 3. Inicializar git
git init
git add .
git commit -m "feat: initial commit — landing page + dashboards beta

- Landing page con hero, features, how-it-works, dual CTA, influencer showcase
- Dashboard de marca: métricas, campañas activas, búsqueda de influencers
- Dashboard de influencer: colaboraciones activas, campañas disponibles, métricas de plataformas
- Stack: Next.js 14 + TypeScript + CSS Modules
- Listo para deploy en AWS Amplify"

echo "✓ Commit inicial creado"
echo ""

# 4. Crear repo en GitHub (con gh CLI)
if [ "$HAS_GH" = true ]; then
  echo "Creando repositorio en GitHub..."
  gh repo create influencemarkt \
    --private \
    --description "Marketplace de influencer marketing — analíticas verificadas, contratos y pagos en escrow" \
    --source=. \
    --remote=origin \
    --push

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  ✅ Repositorio creado y código subido"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "  Repo: https://github.com/$(gh api user -q .login)/influencemarkt"
  echo ""
else
  # Sin gh CLI: instrucciones manuales
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  Pasos para subir a GitHub manualmente:"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "  1. Ve a https://github.com/new"
  echo "  2. Nombre: influencemarkt"
  echo "  3. Visibilidad: Private"
  echo "  4. NO inicialices con README (ya tenemos uno)"
  echo "  5. Copia la URL del repo y corre:"
  echo ""
  echo "     git remote add origin https://github.com/TU_USUARIO/influencemarkt.git"
  echo "     git branch -M main"
  echo "     git push -u origin main"
  echo ""
fi

echo "  Próximo paso — correr localmente:"
echo ""
echo "     npm install"
echo "     npm run dev"
echo ""
echo "  Abre: http://localhost:3000"
echo ""
