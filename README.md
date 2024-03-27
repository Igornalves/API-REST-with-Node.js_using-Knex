# Learning Project to build a REST API with Knex

<br>

<div style="display: inline_block" align="center">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitest/vitest-original.svg">
  <img align="center" alt="knex" width="80" src="./icons/zod-logo-B57E684330-seeklogo.com.png">
  <img align="center" alt="knex" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg">
  <img align="center" alt="knex" width="80" src="./icons/dotenv.png">
</div>

<br>

I will be using libraries such as knex.js and fastify to produce an API with the aim of
build knowledge on certain things that exist in node.js and also TypeScript in the Application and understand what happens under the hood

<br>

# Application functional requirements

- [ x ] the user must create a new transaction
- [ x ] the user must be able to obtain a summary of their account
- [ x ] the user can list all transactions that have already occurred
- [ x ] the user must be able to view a single transaction

<br>

# Application business requirements

- [ x ] the transaction can be of the credit type that will add to the total amount, or debit that will subtract
- [ ] it must be possible to identify the user among requests
- [ ] the user can only view transactions that he has already created

<br>

# Commands for Basic Project Structuring in the Terminal

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-original.svg">
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg">
</div>

<br>

command that is used to bootstrap a new npm project quickly and automatically without the need to answer interactive questions:

```javascript
npm init -y
```

command that installs TypeScript as a development dependency in your project:

```javascript
npm i -D typescript
```

command using to initialize a TypeScript configuration file in a project,
it creates a file called tsconfig.json in the current directory

```javascript
npx tsc --init
```

Explicitly calling the **tsc** executable located in the **.bin** directory within the node_modules directory is a way to run the TypeScript compiler (tsc) directly from your project's node_modules directory:

```javascript
.\node_modules\.bin\tsc
```

command that is used to compile the TypeScript server.ts file located in the src directory of your project:

```javascript
npx tsc .\src\server.ts

ou

npx tsx .\src\server.ts
```

command that is used to install the Fastify framework in your Node.js project

```javascript
npm install fastify
```

The command is a plugin for the Fastify framework that makes it easier to manipulate cookies in web applications.

Cookies are small pieces of data stored in the user's browser and are often used to track information about the user or maintain session state.

```javascript
npm install @fastify/cookie
```

command that is used to install TypeScript definition types for Node.js in your project. These definition types provide information about the structure and data types used in Node.js libraries, which is useful when writing TypeScript code:

```javascript
npm install -D @types/node
```

installs the dotenv library for your project.

Dotenv is a library that allows you to load environment variables from a **_.env_** file to **_process.env_** in Node.js.

This is useful for keeping sensitive information, such as **_API_** keys or **_database credentials_**, out of the source code and managing them more securely.

```javascript
npm install dotenv
```

command that installs the Zod library, which is a schema validation library for TypeScript and JavaScript.

With Zod, you can simply and securely define data schemas and validate input data in your application.

This helps ensure that the data your application receives is in the expected format, preventing bugs related to incorrect or malformatted data.

```javascript
npm install zod
```

The command is used to install the tsx package as a development dependency in your project:

NOTE:. **tsx** is a file extension used primarily in TypeScript projects for files containing **JSX** code

**JSX** is a syntax extension for JavaScript often associated with libraries like React.js. Allows you to write **_HTML code_** within **_JavaScript_** in a more intuitive and expressive way.

NOTE:. most in production the most suitable and runs the java script even

```javascript
npm install tsx -D
```

command that is used to install the httpie tool via Python Package Index (PyPI).

This tool is useful for making HTTP requests in a simplified and easy-to-use way directly from the command line in the Vs.code integrated terminal

With httpie, you can send HTTP requests, view responses, and perform many common operations quickly and intuitively.

```javascript
pip install httpie
```

command that sets up an environment where you can run TypeScript files directly, without the need to first compile to JavaScript.

is a tool that allows you to run TypeScript files directly in Node.js, without the need to manually compile to JavaScript before running.

```javascript
npm install ts-node
```

After installing **_ts-node_**, you can run TypeScript files directly in the terminal using the command

```html
ts-node <nome-do-arquivo>.ts</nome-do-arquivo>
```

To uninstall a Node.js package using npm, you can use the command

```html
npm uninstall <nome-do-biblioteca></nome-do-biblioteca>
```

Testing random route using httpie in the terminal:

```javaScript
http localhost:3333/hello
```

This dev script must be configured in the **package.json** file

It will start the TypeScript compiler in watch mode, monitoring the **src/server.ts** file for changes and recompiling it whenever it detects a change

```json
"scripts": {
    "dev": "tsx watch src/serve.ts"
},
```

can be run in the terminal with the following command

```javascript
npm run dev
```

This **"lint"** script is used to run ESLint on the **TypeScript (\*.ts)** files inside the "src" directory.

```json
"scripts": {
    "lint": "eslint src --ext .ts --fix",
},
```

can be run in the terminal with the following command

```javascript
npm run lint
```

This command installs ESLint as a development dependency in the project.

**ESLint** is a static code analysis tool for identifying and reporting problematic patterns in JavaScript code.

```javascript
npm i eslint -D
```

This command installs ESLint and a specific configuration provided by the **@rocketseat/eslint-config** package, both as development dependencies (-D)

```javascript
npm i eslint @rocketseat/eslint-config -D
```

Create this part in your vs.code settings.json using CRTL + SHIFT + P to access (open user settings)

These settings are related to ESLint and VS Code:

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

command that is used to display a list of the dependencies installed in a Node.js project.

When you run it from the root directory of a project it will show all dependencies

including direct and indirect dependencies (also known as transitive dependencies) and their corresponding versions.

```javascript
npm list
```

is used to list all global dependencies installed by npm.

It will display all global dependencies installed on your system

regardless of the directory you are currently in.

```javascript
npm list -g
```

command that is used to run and initialize knex in a Node.js project.

The command creates a configuration file **knexfile.js** in the root of your project

containing settings for database connection, migrations and seeds.

```json
"scripts": {
    "init_knex": "knex init",
},
```

can be run in the terminal with the following command

```javascript
npm run init_knex
```

is similar to the previous one, but with one important difference: it uses the -x ts option to specify that generated migrations should have the **.ts** extension instead of the default **.js** extension

```json
"scripts": {
    "init_knex-ts": "knex init -x ts",
},
```

can be run in the terminal with the following command

```javascript
npm run init_knex-ts
```

command that is used to create a new migration file in your Knex project

Knex creates a new migration file named **create-migrations**.

This file will be added to the migrations directory of your Knex project and you can edit it to define the operations you want to perform on the database when you run the migration.

```json
"scripts": {
    "migrate_knex": "knex migrate:make create-migrations",
},
```

can be run in the terminal with the following command

```javascript
npm run migrate_knex
```

command that is used to apply all pending migrations to your database.

Knex runs all migrations that have not yet been applied to the database, ensuring that the database schema is up to date with the latest changes defined in the migration files.

```json
"scripts": {
    "r_knex": "knex migrate:latest",
},
```

can be run in the terminal with the following command

```javascript
npm run r_knex
```

is used to roll back the last migration applied to the database.

Knex undoes the last migration that was applied, reverting the changes to the database schema.

This can be useful if you made a mistake during a migration or need to undo a specific database change.

```json
"scripts": {
    "back_knex": "knex migrate:rollback"
},
```

can be run in the terminal with the following command

```javascript
npm run back_knex
```

command that is used to load environment variables from a .env file into your Node.js application.

This is useful for keeping your sensitive configurations out of the source code and for providing an easy way to configure the development, testing, and production environment separately.

```javascript
npm install dotenv
```

# Connection to the Database

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg">
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg">
</div>

<br>

connection information for a PostgreSQL database.

- **host:** The IP address or hostname of the server where the PostgreSQL database is running. In this case, it is configured as IP, which is the localhost address.

- **port:** The port on which PostgreSQL is listening for connections. By default, PostgreSQL uses port 5432.

- **user:** The username used to authenticate to the PostgreSQL database.

- **password:** The password associated with the user for authentication in the PostgreSQL database.

- **database:** The name of the database you want to connect to.

<br>

```typescript
export const knex = setupKnex({
  client: "string",
  connection: {
    host: "string",
    port: number,
    user: "string",
    password: "string",
    database: "string",
  },
});
```

Another way to make this connection with the bank is by passing a URL from the bank to the system:

```typescript
export const knex = setupKnex({
  client: "pg",
  connection:
    "postgres://<nameUser>:<passWord>@localhost:<port>/<nameDataBase>",
  searchPath: ["knex", "public"],
});
```

<br>

# HTTP Methods for API with Fastify

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg">
</div>

<br>

the main **_HTTP_** methods used in **_RESTful APIs_**, along with their descriptions:

### 1. GET:

- is used to request data from a specific resource or a collection of resources.
- It is safe and idempotent, meaning it should not change the server state and can be called multiple times without side effects.
- Query parameters can be added to the URL to filter, sort or page results.

### 2. POST:

- The POST method is used to create a new resource on the server.

- The data to be sent is included in the body of the HTTP request.

- It is not idempotent, which means that calling the same POST endpoint multiple times can result in the creation of multiple resources.

### 3. PUT:

- The PUT method is used to update an existing resource on the server or to create a new resource if it does not exist.

- Typically, the body of the PUT request contains the complete state of the resource being updated.

- It is idempotent, meaning that calling the same PUT endpoint multiple times will result in the same resource state.

### 4. PATCH:

- The PATCH method is used to apply partial changes to an existing resource on the server.

- Unlike PUT, the body of the PATCH request contains only the changes that should be applied to the resource, not the complete state.

- It is also idempotent, meaning that calling it multiple times will result in the same final state.

### 5. DELETE:

- The DELETE method is used to remove a specific resource from the server.

- It does not have a request body, as it only needs the identification of the resource to be deleted.

- It is idempotent, meaning that calling the same DELETE endpoint multiple times will have no effects beyond the first deletion.

<br>

## Configuring the knexfile.js or knexfile.ts File

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg">
</div>

<br>

making the correct settings for the file when created so that it works correctly in the project.

You can pass the following necessary parameters:

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

name in the migration table is optional for each project.

NOTE:. By default, the documentation indicates that you use the **_.js_** file, which in my case worked perfectly to make the migrations

### In short, it is a configuration file used by the Knex.js library to define and configure connections to databases, as well as specify options for migrations and data seeds. This file usually contains different configurations for different environments such as development, testing and production, each with its own specific connection settings and options

## Add config to **package.json**

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="./icons/node-js.950x1024.png">
</div>

<br>

By adding **_"type": "module"_** to your package.json file, you are telling Node.js that your project will use the ECMAScript module system (ESM) instead of the standard CommonJS module system .

i.e,

This means you can use import and export syntax to import and export modules, instead of **_require()_** and **_module.exports_**.

This follows the modern JavaScript standard and is more consistent with other platforms and development environments.

```json
{
  "name": "api-rest-com-node",
  "version": "1.0.0",
  "type": "module", //colocando aqui
  "description": "",
  "main": "index.js"
}
```

There is also another part of the file that refers to the command shortcut in the terminal to use when necessary to make the project work

```json
"scripts": {
    "dev": "tsx watch src/server.ts",
    "lint": "eslint src --ext .ts --fix",
    "test":"vitest",
    "init_knex": "knex init",
    "init_knex-ts": "knex init -x ts",
    "migrate_knex": "knex migrate:make create-migrations",
    "r_knex": "knex migrate:latest",
    "back_knex": "knex migrate:rollback --all"
  },
```

NOTE:. Above I showed how you can use it to make each part of the script work in the terminal, take a look above where it talks about **_Commands for Basic Project Structuring in the Terminal_**

In this other part, here are the versions used of both the project's local libraries and the development dependencies included so that the project runs perfectly on the machine.

```json
"devDependencies": {
    "@rocketseat/eslint-config": "^2.2.2",
    "@types/node": "^20.11.24",
    "eslint": "^8.57.0",
    "tsx": "^4.7.1",
    "typescript": "^5.3.3",
    "vitest": "^1.4.0"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "fastify": "^4.26.2",
    "knex": "^3.1.0",
    "pg": "^8.11.3",
    "ts-node": "^10.9.2",
    "zod": "^3.22.4"
  }
```

## Explaining what a Migration is in **knex.js**??

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg">
</div>

<br>

A migration in a Knex project is a concept used to manage and version the database schema, that is, modifying the database structure, in a controlled and automated way.

### Database Version Control:

- Migrations allow you to version the database schema,

- meaning you can track changes to the schema over time,

- allowing you to roll back to previous versions if necessary.

### Schema Changes:

- Migrations may contain changes to the database schema, such as creating, altering or deleting tables, adding or removing columns, defining foreign keys, creating indexes, among other operations.

### Migration Files:

- Each migration is represented by a file in your project's file system.

- This file contains the SQL statements or JavaScript methods required to make the desired changes to the database schema.

### Sequential Execution:

- Migrations are performed in sequential order, ensuring that schema changes are applied in the correct order.

- This is essential to avoid conflicts and ensure database consistency.

### Rollback:

- In addition to applying migrations to update the database schema,

- Knex also offers the ability to revert or undo migrations,

- which allows you to revert to a previous state of the database schema if necessary.

### Automatic Schema Management:

- Migrations can be applied and rolled back automatically using specific commands provided by the Knex CLI (Command Line Interface),

- facilitating the management and maintenance of the database schema throughout the project lifecycle.

### Explaining **_exports.up_** and also **_exports.down_**

In the context of Knex and database migrations, **_exports.up_** and **_exports.down_** are functions used to define the migration operations that will be performed when you apply **_(up)_* * or reverse **_(down)_** a migration.

```javascript
exports.up = function (knex) {};

exports.down = function (knex) {};
```

### Exports.up:

- This function defines the operations that will be performed when you apply the migration. It is responsible for adding or modifying the database structure according to the changes defined in the migration script.

### For example

- You can use the knex.schema.createTable method to create a new table, add columns to an existing table, or make other changes to the database schema.

```javascript
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.string("email").notNullable().unique();
    table.timestamps(true, true);
  });
};
```

### exports.down:

- This function defines the operations that will be performed when you reverse the migration. It is responsible for undoing the changes made by the up migration, restoring the database to its previous state.

### For example

- you can use the knex.schema.dropTable method to delete a table created in the up migration.

```javascript
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
```

The same configuration property can be used to enable transactional migration if the common configuration has **_disableTransactions: true_**

```javascript
exports.config = { transaction: true };
```

When **_transaction_** is set to **_true_** in migration settings, each migration is performed within a transaction.

This ensures that if an error occurs while running a migration, Knex automatically rolls back all changes made by that migration, keeping the database in a consistent state.

### In Summary, Migrations are used to ensure that changes to the database schema are applied in a controlled and reversible manner, allowing you to maintain a history of changes made over time and to share and replay those changes in different development and production environments.

## File **_knex.d.ts_** Explanation:

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="./icons/typescript-def-64.png">
</div>

<br>

The **_knex.d.ts_** file is a type definition file for **_Knex.js_**

a library for building queries and other SQL commands for Node.js.

This file typically contains TypeScript type declarations that help the compiler understand the structure and types of objects used by Knex.js.

For example:.

```typescript
import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    transacoes: {
      id: string;
      titulo: string;
      amount: number;
      created_at: string;
      session_id?: string;
    };
  }
}
```

### When using Knex.js with TypeScript, it is common to find a knex.d.ts file that provides these type definitions so that TypeScript can make type inferences correctly during development.

### This helps prevent errors and provides a more productive development environment.

## File **_.eslintrc.json_** Explanation:

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg">
</div>

<br>

The .eslintrc.json file is a configuration file for ESLint

a static code analysis tool for identifying issues in JavaScript code.

This file defines the rules and settings that ESLint will use when analyzing your project's source code.

bringing code example

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

- The "extends" key specifies that we are extending ESLint's recommended settings, which are a standard set of rules.

- The "rules" key allows you to define specific rules.

- For example, we are configuring the semi rule to require semicolons at the end of lines

- the indent rule to require 2-space indentation and the quotes rule to require the use of single quotes for strings

### In summary, It allows you to define a consistent coding standard and can help identify common errors or style issues in your JavaScript code.

## File **_.gitignore_** Explanation:

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
</div>

<br>

is a configuration file used to specify which files and directories Git should ignore when tracking changes to a Git repository.

For example:.

```.gitignore
# Arquivos de compilação
*.o
*.out
*.exe

# Diretórios de dependências
node_modules/
venv/

# Arquivos de ambiente locais
.env

# Arquivos de build
/build

# Arquivos de logs
logs/
*.log
```

### This means that files and directories listed in .gitignore will not be included in git add and git commit operations, making them essentially invisible to Git.

## Explaining the **_Zod_** Library used in the Project

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="./icons/zod-logo-B57E684330-seeklogo.com.png">
</div>

<br>

is a schema validation library in TypeScript that provides a simple and powerful way to define and validate data objects according to a predefined schema.

It is useful for ensuring that data received into an application meets certain expectations and requirements before it is processed or stored.

### Data Types:

- Zod offers a variety of built-in data types such as **_string_**, **_number_**, **_boolean_**, **_array_**, **_object_**, etc.

- Additionally, it allows you to define **_custom data_** and compound types, such as **_nested data types_**, **_unions of types_**, **_arrays of specific types_**,

Bringing a simple example to this so you can understand better:.

```typescript
import { z } from "zod";

// Definindo um esquema de validação para um objeto de usuário
const userSchema = z.object({
  id: z.string().uuid(), // ID do usuário como uma string UUID
  username: z.string().min(4).max(20), // Nome de usuário entre 4 e 20 caracteres
  email: z.string().email(), // Email válido
  age: z.number().int().positive().min(18), // Idade como número inteiro positivo maior que 18
  isAdmin: z.boolean(), // Booleano indicando se o usuário é um administrador
});

// Validando os dados de usuário em relação ao esquema
try {
  const validatedUser = userSchema.safeParse(process.env);
  console.log("Dados de usuário válidos:", validatedUser);

  // Exportando os dados validados para uso posterior
  export const env = userSchema.data;
} catch (error) {
  // mostrando messagem dee erro para os usuario no terminal
  console.error("Erro ao validar dados de usuário:", error.message);
}
```

### Overall, Zod is a valuable tool for ensuring data integrity and consistency in TypeScript applications, helping to avoid bugs related to invalid data types and simplifying data entry validation.

## Explaining the **_dotenv_** Library that will be used in the project

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="./icons/dotenv.png">
</div>

<br>

is a common tool in Node.js projects that helps load environment variables from .env files into the Node.js environment process.

### Environment variables:

- Environment variables are variables external to the source code that can influence the behavior of the program.

- They are often used to flexibly configure applications without the need to modify the source code.

- Common examples of environment variables include database settings, API keys, external service URLs, and more.

### .env file:

- The .env file is a simple text file that contains key-value pairs of environment variables.

- Each line in the .env file follows the format KEY=VALUE.

For example:

```json
DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypassword
```

### In summary, the dotenv library is a valuable tool for managing environment variables in Node.js applications, facilitating configuration and ensuring the security of your project's confidential information.

## Using the Postman Extension in Vs.code

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5"  width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg">
</div>

<br>

This extension allows you to send HTTP requests directly from your code editor and view the responses directly in VS Code, which can be useful when developing APIs and web services.

With the "REST Client" extension, you can create text files with .http or .rest extension and write HTTP requests inside them using a syntax similar to Postman. For example:

<div style="display: inline_block"align="center" >
  <img align="center" alt="HTML5" src="./icons/postmanFuncionando.png">
</div>

<br>

The response will be displayed directly in VS Code, allowing you to view and analyze the responses to your HTTP requests without having to switch between different applications.

# Using ***ViteST*** Automated Testing FrameWork

<div style="display: inline_block" align="center">
  <img align="center" alt="knex" width="120" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitest/vitest-original.svg">
</div>

<br>

is used to install test-related packages into a Node.js project.

The -D option indicates that the package will be installed as a development dependency, which means that it will only be included in the development environment and will not be needed in production.

```javascript
npm i vitest -D
```

The ***npx vitest*** command is used to run the vitest package temporarily, without the need to install it globally or locally in your project.

```javascript
npx vitest
```

What does automated testing look like when performed in the terminal ?

<div style="display: inline_block" align="center">
  <img align="center" alt="knex" src="./icons/teste automatizado com vitest.png">
</div>

<br>

adding it to the project script in the **Package.json** part to run via command in the terminal more easily

```json
"scripts": {
  "test":"vitest",
}
```

running it using the following command calling:

```javascript
npm run test

ou

npm test
```
