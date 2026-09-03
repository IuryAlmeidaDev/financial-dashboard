# Fluxo em Ordem - Dashboard Financeiro

Dashboard de planejamento de fluxo de caixa pessoal com persistência em nuvem e sincronização em tempo real via **Vercel Serverless & Vercel Blob**.

## Funcionalidades
- 📊 **Visão Consolidada**: Saldo projetado, receitas, despesas e contagem de movimentações.
- 📅 **Evolução Mensal & Gráficos**: Gráfico dinâmico SVG de receitas vs. despesas mês a mês e barras por categoria.
- 🔍 **Filtros e Busca**: Filtragem instantânea por mês, categoria, situação e busca textual.
- ➕ **Novos Lançamentos**: Modal para cadastrar despesas e receitas com data, categoria e valor.
- 💾 **Persistência em Nuvem**:
  - Salva em tempo real status de pagamento (**Pago** / **Não pago**), novos lançamentos e exclusões.
  - Armazenamento nativo via **Vercel Blob Storage** (`@vercel/blob`).
  - Cache local (`localStorage`) para carregamento instantâneo com zero latência.
- 🖨️ **Impressão / PDF**: Layout otimizado para impressão de relatórios.

## Tecnologias
- HTML5 / CSS3 (CSS Variables, Flexbox, CSS Grid)
- Vanilla JavaScript
- Node.js Serverless Functions (Vercel)
- Vercel Blob Storage
