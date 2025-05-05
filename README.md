# Healthcare App - Frontend

Uma aplicação moderna de saúde construída com Next.js, TypeScript e Tailwind CSS. Este projeto é **exclusivamente frontend** e foi desenvolvido para fins educacionais como parte da formação de Next.js/React da TreinaWeb.

## Sobre o Projeto

Desenvolvi este aplicativo como instrutor da TreinaWeb para demonstrar conceitos modernos de desenvolvimento frontend utilizando o Next.js 15 e React 19. O projeto serve como material didático para os alunos da formação, ilustrando:

- Estrutura de projetos em Next.js
- Roteamento e navegação
- Componentização em React
- Estilização com Tailwind CSS
- Estados e gerenciamento de formulários
- Layouts responsivos para diferentes dispositivos

Os dados utilizados são simulados (mock data), não havendo integração real com um backend.

## Funcionalidades

- **Perfis de Médicos**: Visualize perfis detalhados de médicos, incluindo suas especialidades, avaliações e informações de contato.
- **Agendamento de Consultas**: Agende consultas com médicos e visualize suas próximas consultas.
- **Design Responsivo**: Otimizado para dispositivos desktop e móveis.
- **Estados de Carregamento**: Experiência de usuário suave com indicadores de carregamento durante as transições de página.

## Stack Tecnológica

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: Componentes personalizados com padrões de design reutilizáveis

## Ambiente de desenvolvimento

- Node.js (v22.11.0)
- npm (v10.9.0)

## Como Iniciar

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositório>
   cd healthcare-app
   ```

2. **Instale as dependências**:
   Com npm (recomendado):
   ```bash
   npm install
   ```
   
   Ou com pnpm:
   ```bash
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**:
   Com npm:
   ```bash
   npm run dev
   ```
   
   Ou com pnpm:
   ```bash
   pnpm dev
   ```

Obs: Dependendo das versões pode ser necessário aplicar a flag --legacy-peer-deps.

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura do Projeto

- `app/`: Contém as páginas e layouts do Next.js.
  - `appointments/`: Página para gerenciar consultas do usuário.
  - `doctors/`: Páginas para visualizar perfis de médicos e agendar consultas.
- `components/`: Componentes de UI reutilizáveis.
- `lib/`: Funções utilitárias.
- `public/`: Arquivos estáticos como imagens.
- `styles/`: CSS global e configuração do Tailwind.

## Uso Educacional

Criei este projeto para ser utilizado como:

- Material de referência para estudantes da minha formação de Next.js/React disponibilizada na TreinaWeb;
- Exemplo prático de implementação de interfaces modernas;
- Base para exercícios e projetos práticos;
- Demonstração das boas práticas que ensino no desenvolvimento frontend.

## Scripts

- `npm run dev` ou `pnpm dev`: Inicia o servidor de desenvolvimento.
- `npm run build` ou `pnpm build`: Constrói a aplicação para produção.
- `npm start` ou `pnpm start`: Inicia o servidor de produção.
- `npm run lint` ou `pnpm lint`: Executa verificações de linting.