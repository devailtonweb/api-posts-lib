### `Configurando Eslint e Prettier`

Rode o comando para criar o arquivo de configuração .eslintrc:
npx eslint --init

Remova eslint do devDependencies no arquivo package.json para evitar conflitos de versões.
Remova o node_modules e package-lock.json

reinstale as libs:
npm install

Instale as libs:
npm install -D prettier eslint-config-prettier eslint-plugin-prettier

Instale o ESLint nas extensões do VSCode

Verificar os arquivos que estão com problemas depois do ESLint instalado:
npx eslint src/\*_/_.jsx --fix

Para corrigir problemas com os tipos de variáveis, instalar prop-types:
npm install prop-types
