# SalvTec - Website Oficial

Website institucional da SalvTec, empresa especializada em soluções de climatização para residências, comércios e indústrias.

## 🚀 Sobre o Projeto

Site desenvolvido com Next.js 16, apresentando os serviços, valores e diferenciais da SalvTec. O projeto utiliza as tecnologias mais modernas para garantir performance, SEO e experiência de usuário otimizadas.

## ✨ Funcionalidades

- **Hero Section** - Apresentação principal com call-to-action para WhatsApp
- **Serviços** - Cards detalhando projetos, manutenção/higienização e instalação
- **Sobre Nós** - História e valores da empresa
- **Marcas Credenciadas** - Parceiros Hitachi e Gree
- **Avaliações** - Depoimentos de clientes
- **Contato** - Links diretos para WhatsApp e Instagram
- **Trabalhe Conosco** - Página de carreiras
- **Responsivo** - Layout adaptado para mobile, tablet e desktop

## 🛠️ Tecnologias

- **Next.js 16.0.6** - Framework React com App Router
- **React 19.2.0** - Biblioteca JavaScript
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **Headless UI 2.2.9** - Componentes acessíveis
- **Heroicons 2.2.0** - Ícones SVG

## 📦 Estrutura do Projeto

```
salvtec/
├── app/
│   ├── components/
│   │   ├── about.tsx        # Seção sobre a empresa
│   │   ├── cards.tsx        # Cards de serviços
│   │   ├── credenciada.tsx  # Marcas parceiras
│   │   ├── footer.tsx       # Rodapé com contatos
│   │   ├── header.tsx       # Navegação principal
│   │   ├── hero.tsx         # Banner principal
│   │   ├── reviews.tsx      # Avaliações de clientes
│   │   └── schema.tsx       # Schema.org para SEO
│   ├── carreiras/
│   │   └── page.tsx         # Página trabalhe conosco
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout raiz
│   └── page.tsx             # Página inicial
├── public/
│   └── images/              # Imagens otimizadas (WebP)
├── next.config.ts           # Configuração Next.js
├── tsconfig.json            # Configuração TypeScript
└── tailwind.config.ts       # Configuração Tailwind
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/TBertazoli/salvtec.git
cd salvtec

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 🎨 Otimizações Implementadas

### Performance
- ✅ Next.js Image component com otimização automática
- ✅ Imagens convertidas para WebP (87% de redução)
- ✅ Lazy loading para imagens abaixo da dobra
- ✅ Priority loading para conteúdo above-the-fold
- ✅ Compressão de imagens (hero: 1.7 MB → 26 KB)

### SEO
- ✅ Metadata completa com Open Graph
- ✅ Schema.org (LocalBusiness)
- ✅ Sitemap.xml e robots.txt
- ✅ Alt text descritivo em todas as imagens
- ✅ Heading hierarchy otimizada
- ✅ Canonical URLs
- ✅ Idioma PT-BR configurado

### Acessibilidade
- ✅ Componentes Headless UI acessíveis
- ✅ ARIA labels
- ✅ Navegação por teclado
- ✅ Contraste adequado de cores

## 📱 Responsividade

O site é totalmente responsivo com breakpoints Tailwind:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📞 Contatos

- **WhatsApp**: (19) 99836-2654
- **Instagram**: [@salvteccampinas](https://www.instagram.com/salvteccampinas/)

## 📄 Licença

Este projeto é privado e pertence à SalvTec.

## 👨‍💻 Desenvolvimento

Desenvolvido por **Tati Bertazoli** - [@TBertazoli](https://github.com/TBertazoli)

---

**Branch atual**: `develop`  
**Última atualização**: Dezembro 2025
