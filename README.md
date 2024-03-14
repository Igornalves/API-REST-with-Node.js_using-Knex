# Projeto de Aprendizado para construir uma API REST com Knex 

<br>

<div style="display: inline_block" align="center">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg">
</div>

<br>

Estarei usando da biblioteca do knex.js para produzir uma API com o intuito de 
contruir conhcimento em determinadas coisas existentes no node.js e tambem do TypeScript na Aplicacao 

<br>

# Requisitos funcionais da aplicacao

- [  ] o usuario deve criar uma nova transacao
- [  ] o usuario deve poser obter um resumo da sua conta 
- [  ] o usuario podera listar todas a transacoes que ja ocorreram
- [  ] o usuario deve poder visualizar uma transacao unica

<br>

# Requisitos de negocios da aplicacao

- [  ] a transacao pode ser do tipo credito que somara ao valor total, ou debito subtraira 
- [  ] deve ser possivel ideentificamos usuario entre as requisicoes
- [  ] o usuario so pode visualizar transacoes o qual ele ja criou 

<br>

# Comandos para Estruturacao Basica do Projeto no Terminal

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-original.svg">
</div>

<br>

comando que é usado para inicializar um novo projeto npm de forma rápida e automática, sem a necessidade de responder a perguntas interativas:
```javascript
npm init -y
```

comando que instala o TypeScript como uma dependência de desenvolvimento em seu projeto:
```javascript
npm i -D typescript 
```
comando usando para inicializar um arquivo de configuração do TypeScript em um projeto,
ele cria um arquivo chamado tsconfig.json no diretório atual 
```javascript
npx tsc --init
```
chamando explicitamente o executável **tsc** localizado no diretório **.bin** dentro do diretório node_modules, é uma forma de executar o compilador TypeScript (tsc) diretamente a partir do diretório node_modules do seu projeto:
```javascript
.\node_modules\.bin\tsc 
```
comando que é usado para compilar o arquivo TypeScript server.ts localizado no diretório src do seu projeto:
```javascript
npx tsc .\src\server.ts 

ou

npx tsx .\src\server.ts 
```
comando que é utilizado para instalar o framework Fastify no seu projeto Node.js
```javascript
npm install fastify
```

comando que é utilizado para instalar os tipos de definição de TypeScript para o Node.js no seu projeto. Esses tipos de definição fornecem informações sobre a estrutura e os tipos de dados usados nas bibliotecas do Node.js, o que é útil ao escrever código TypeScript:

```javascript
npm install -D @types/node 
```
instala a biblioteca dotenv para seu projeto. 

O Dotenv é uma biblioteca que permite carregar variáveis de ambiente de um arquivo ***.env*** para ***process.env*** no Node.js. 

Isso é útil para manter informações sensíveis, como chaves de ***API*** ou ***credenciais de banco de dados***, fora do código-fonte e gerenciá-las de forma mais segura.

```javascript
npm install dotenv
```

comando que instala a biblioteca Zod, que é uma biblioteca de validação de esquema para TypeScript e JavaScript. 

Com o Zod, você pode definir esquemas de dados de forma simples e segura e validar dados de entrada em seu aplicativo.

Isso ajuda a garantir que os dados que seu aplicativo recebe estejam no formato esperado, evitando bugs relacionados a dados incorretos ou malformatados.

```javascript
npm install zod 
```

O comando serve para instalar o pacote tsx como uma dependência de desenvolvimento no seu projeto:

OBS:. **tsx** é uma extensão de arquivo usada principalmente em projetos TypeScript para arquivos que contêm código **JSX**

 **JSX** é uma extensão de sintaxe para JavaScript frequentemente associada a bibliotecas como React.js. Permite escrever ***código HTML*** dentro do ***JavaScript*** de uma forma mais intuitiva e expressiva.

 OBS:. mais em producao o mais indicado e roda o java script mesmo 

```javascript
npm install tsx -D 
```
comando que é utilizado para instalar a ferramenta httpie via Python Package Index (PyPI). 

Essa ferramenta é útil para realizar requisições HTTP de maneira simplificada e fácil de usar diretamente da linha de comando no terminal integrado Vs.code

Com o httpie, você pode enviar solicitações HTTP, visualizar as respostas e realizar várias operações comuns de forma rápida e intuitiva.

```javascript
pip install httpie
```
comando que configurando um ambiente onde pode executar arquivos TypeScript diretamente, sem a necessidade de compilar primeiro para JavaScript.

é uma ferramenta que permite executar arquivos TypeScript diretamente no Node.js, sem a necessidade de compilar manualmente para JavaScript antes da execução.

```javascript
npm install ts-node
```
Depois de instalar o ***ts-node***, você pode executar arquivos TypeScript diretamente no terminal, usando o comando

```html
ts-node <nome-do-arquivo>.ts
```
Para desinstalar um pacote do Node.js utilizando o npm, você pode usar o comandoÇ

```html
npm uninstall <nome-do-biblioteca>
```

Testando rota aleatoria usando o httpie no terminal:
```javaScript
http localhost:3333/hello 
```
Este script dev tem que está configurando no  arquivo **package.json** 

Ele iniciará o compilador TypeScript em modo de observação, monitorando o arquivo **src/server.ts** por alterações e recompilando-o sempre que detectar uma mudança
```json
"scripts": {
    "dev": "tsx watch src/serve.ts"
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run dev
```
Este script **"lint"** é usado para executar o ESLint nos arquivos **TypeScript (*.ts)** dentro do diretório "src".
```json
"scripts": {
    "lint": "eslint src --ext .ts --fix",
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run lint
```

Este comando que instala o ESLint como uma dependência de desenvolvimento no projeto.

**ESLint** é uma ferramenta de análise estática de código para identificar e relatar padrões problemáticos no código JavaScript.
```javascript
npm i eslint -D
```
Este comando instala o ESLint e uma configuração específica fornecida pelo pacote **@rocketseat/eslint-config**, ambos como dependências de desenvolvimento (-D)

```javascript
npm i eslint @rocketseat/eslint-config -D
```
Cria essa parte se no seu settings.json do vs.code usando o CRTL + SHIFT + P  para acessar (open user settings)

Essas configurações estão relacionadas ao ESLint e ao VS Code:
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "graphql"
],
```
comando que é usado para exibir uma lista das dependências instaladas em um projeto Node.js.

Quando você o executa no diretório raiz de um projeto, ele mostrará todas as dependências 

incluindo as dependências diretas e indiretas (também conhecidas como dependências transitivas)  e suas versões correspondentes.
```javascript
npm list
```
é usado para listar todas as dependências globais instaladas pelo npm.

Ele exibirá todas as dependências globais instaladas no seu sistema 

independentemente do diretório em que você esteja atualmente.
```javascript
npm list -g
```
comando que é usado para executar e inicializa o knex em um projeto Node.js. 

O comando cria um arquivo de configuração **knexfile.js** na raiz do seu projeto 

contendo configurações para conexão com o banco de dados, migrações e sementes.
```json
"scripts": {
    "init_knex": "knex init",
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run init_knex
```
é semelhante ao anterior, mas com uma diferença importante: ele usa a opção -x ts para especificar que as migrações geradas devem ter a extensão **.ts** em vez da extensão padrão **.js**

```json
"scripts": {
    "init_knex-ts": "knex init -x ts",
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run init_knex-ts
```
comando que é usado para criar um novo arquivo de migração no seu projeto Knex

o Knex cria um novo arquivo de migração com o nome **create-migrations**. 

Esse arquivo será adicionado ao diretório de migrações do seu projeto Knex e você poderá editá-lo para definir as operações que deseja realizar no banco de dados quando executar a migração.

```json
"scripts": {
    "migrate_knex": "knex migrate:make create-migrations",
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run migrate_knex
```
comando que é usado para aplicar todas as migrações pendentes ao seu banco de dados. 

o Knex executa todas as migrações que ainda não foram aplicadas ao banco de dados, garantindo que o esquema do banco de dados esteja atualizado com as últimas alterações definidas nos arquivos de migração.

```json
"scripts": {
    "r_knex": "knex migrate:latest",
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run r_knex
```
é usado para reverter a última migração aplicada ao banco de dados. 

o Knex desfaz a última migração que foi aplicada, revertendo as alterações no esquema do banco de dados. 

Isso pode ser útil se você cometeu um erro durante uma migração ou precisa desfazer uma alteração específica no banco de dados.

```json
"scripts": {
    "back_knex": "knex migrate:rollback"
},
```
pode ser executado no terminal com o seguinte comando
```javascript
npm run back_knex
```


```javascript
npm install dotenv
```

# Conexão com o Banco de Dados 

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg">
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg">
</div>

<br>

informações de conexão para um banco de dados PostgreSQL.

- **host:** O endereço IP ou nome de host do servidor onde o banco de dados PostgreSQL está sendo executado. Neste caso, está configurado como IP, que é o endereço localhost.

- **port:** A porta em que o PostgreSQL está escutando conexões. Por padrão, o PostgreSQL usa a porta 5432.

- **user:** O nome de usuário usado para autenticar no banco de dados PostgreSQL.

- **password:** A senha associada ao usuário para autenticação no banco de dados PostgreSQL.

- **database:** O nome do banco de dados ao qual você deseja se conectar.

<br>

```typescript
export const knex = setupKnex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'igorn',
        password: '08901',
        database: 'sistema_de_vendas',
    }
})
```
outra forma de fazer esta conxão com o banco passando uma URL do banco para o sistema:


```typescript
export const knex = setupKnex({
    client: 'pg',
connection: 'postgres://igorn:08901@localhost:5432/sistema_de_vendas',
    searchPath: ['knex', 'public'],
})
```
<br>

# Metodos HTTP para API com Fastify

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg">
</div>

<br>

os principais ***métodos HTTP*** usados em ***APIs RESTful***, junto com suas descrições:

### 1. GET:
- é usado para solicitar dados de um recurso específico ou uma coleção de recursos.
- É seguro e idempotente, o que significa que não deve alterar o estado do servidor e pode ser chamado várias vezes sem efeitos colaterais.
- Os parâmetros de consulta (query parameters) podem ser adicionados à URL para filtrar, classificar ou paginar os resultados.

### 2. POST:

- O método POST é usado para criar um novo recurso no servidor.

- Os dados a serem enviados são incluídos no corpo (body) da solicitação HTTP.

- Não é idempotente, o que significa que chamar o mesmo endpoint POST várias vezes pode resultar na criação de múltiplos recursos.

### 3. PUT:

- O método PUT é usado para atualizar um recurso existente no servidor ou para criar um novo recurso se ele não existir.


- Normalmente, o corpo da solicitação PUT contém o estado completo do recurso que está sendo atualizado.


- É idempotente, o que significa que chamar o mesmo endpoint PUT várias vezes resultará no mesmo estado do recurso.

### 4. PATCH:

- O método PATCH é usado para aplicar alterações parciais a um recurso existente no servidor.


- Ao contrário do PUT, o corpo da solicitação PATCH contém apenas as mudanças que devem ser aplicadas ao recurso, não o estado completo.


- Também é idempotente, o que significa que chamá-lo várias vezes resultará no mesmo estado final.

### 5. DELETE:

- O método DELETE é usado para remover um recurso específico do servidor.


- Não possui corpo de solicitação, pois só precisa da identificação do recurso a ser excluído.


- É idempotente, o que significa que chamar o mesmo endpoint DELETE várias vezes não terá efeitos além da primeira exclusão.

<br>

## Configurando o Arquivo knexfile.js ou knexfile.ts

fazendo as config corretas para o arquivo quando criado para que fucione corretamente no projeto.

vc pode passa o seguintes parametros necessarios:


```javascript
module.exports = {
  development: {
    client: String,
    connection: {
      database: String,
      user: String,
      password: String Number,
    },
    migrations: {
      extension: 'js',
      directory: './migrations',
      tableName: 'knex_migrations_users',
    },
  },

  staging: {
    client: String,
    connection: {
      database: String,
      user: String,
      password: String Number,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations_users',
    },
  },

  production: {
    client: String,
    connection: {
      database: String,
      user: String,
      password: String Number,
    },
    migrations: {
      tableName: 'knex_migrations_users',
    },
  },
}
```
<br>

nome na tabela da migration é opcional para cada projeto.

## Adcionando config no package.json

Ao adicionar ***"type": "module"*** ao seu arquivo package.json, você está informando ao Node.js que o seu projeto utilizará o sistema de módulos ECMAScript (ESM) em vez do sistema de módulos CommonJS padrão.

ou seja,

Isso significa que você pode usar a sintaxe import e export para importar e exportar módulos, em vez de ***require()*** e ***module.exports***. 

Isso segue o padrão do JavaScript moderno e é mais consistente com outras plataformas e ambientes de desenvolvimento.

```json
{
  "name": "api-rest-com-node",
  "version": "1.0.0",
  "type": "module", //colocando aqui 
  "description": "",
  "main": "index.js",
}
```

## Expliando o que é um Migration ??

Uma migração em um projeto com Knex é um conceito usado para gerenciar e versionar o esquema do banco, ou seja, a modificacao de estrutura do banco de dados, de forma controlada e automatizada.

### Controle de Versão do Banco de Dados: 

- As migrações permitem que você versione o esquema do banco de dados, 

- o que significa que você pode acompanhar as alterações no esquema ao longo do tempo, 

- permitindo que você reverta para versões anteriores se necessário.

### Alterações no Esquema: 

- As migrações podem conter alterações no esquema do banco de dados, como criar, alterar ou excluir tabelas, adicionar ou remover colunas, definir chaves estrangeiras, criar índices, entre outras operações.

### Arquivos de Migração:

- Cada migração é representada por um arquivo no sistema de arquivos do seu projeto. 

- Esse arquivo contém as instruções SQL ou métodos JavaScript necessários para realizar as alterações desejadas no esquema do banco de dados.

### Execução Sequencial: 

- As migrações são executadas em ordem sequencial, garantindo que as alterações no esquema sejam aplicadas na ordem correta. 

- Isso é fundamental para evitar conflitos e garantir a consistência do banco de dados.

### Rollback: 

- Além de aplicar migrações para atualizar o esquema do banco de dados, 

- o Knex também oferece a capacidade de reverter ou desfazer migrações, 

- o que permite reverter para um estado anterior do esquema do banco de dados se necessário.

### Gerenciamento Automático de Esquema: 

- As migrações podem ser aplicadas e revertidas de forma automática por meio de comandos específicos fornecidos pelo Knex CLI (Command Line Interface), 

- facilitando o gerenciamento e a manutenção do esquema do banco de dados ao longo do ciclo de vida do projeto.


## Arquivo ***knex.d.ts*** Explicacao:

O arquivo knex.d.ts é um arquivo de definição de tipo para o Knex.js

uma biblioteca de construção de consultas e outros comandos SQL para Node.js. 

Esse arquivo geralmente contém declarações de tipos TypeScript que ajudam o compilador a entender a estrutura e os tipos de objetos usados ​​pelo Knex.js.

Ao usar o Knex.js com TypeScript, é comum encontrar um arquivo knex.d.ts que fornece essas definições de tipo para que o TypeScript possa fazer inferências de tipo corretamente durante o desenvolvimento. 

Isso ajuda a evitar erros e oferece um ambiente de desenvolvimento mais produtivo.
 
## Arquivo ***.eslintrc.json*** Explicacao:

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg">
</div>

<br>

O arquivo .eslintrc.json é um arquivo de configuração para o ESLint 

uma ferramenta de análise estática de código para identificar problemas no código JavaScript.

Este arquivo define as regras e configurações que o ESLint usará ao analisar o código-fonte do seu projeto.

trazendo Exemplo de codigo 

```json
{
  "extends": "eslint:recommended",
  "rules": {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "quotes": ["error", "single"]
  }
}
```

- A chave "extends" especifica que estamos estendendo as configurações recomendadas do ESLint, que são um conjunto padrão de regras.


- A chave "rules" permite que você defina regras específicas. 

- Por exemplo, estamos configurando a regra semi para exigir ponto e vírgula no final das linhas

- a regra indent para exigir indentação de 2 espaços e a regra quotes para exigir o uso de aspas simples para strings


## Arquivo ***.gitignore*** Explicacao:

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
</div>

<br>

 é um arquivo de configuração usado para especificar quais arquivos e diretórios o Git deve ignorar ao rastrear as alterações em um repositório Git. 
 
 Isso significa que os arquivos e diretórios listados no .gitignore não serão incluídos nas operações de git add e git commit, tornando-os essencialmente invisíveis para o Git.
