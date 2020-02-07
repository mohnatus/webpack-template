# Конфигурация webpack

## Запуск

```
// development mode
npm run dev
// watch mode
npm run dev:w
// server
npm start

// production mode
npm run build

// analyze bundle
npm run analyze
```

## Devtool

- В development mode - `inline-source-map`
- В production mode - `source-map`

## DevServer

Запускается на 9000 порте

Обслуживает папку `dist`

## Конфигурация

- `./webpack`
  - `/loaders` - лоадеры
  - `/presets` - пресеты лоадеров
  - `/plugins` - плагины
  - `/babel` - конфигурация babel
  - `/config`
    - `/entries.js` - поле `entry`
    - `/output.js` - поле `output`
    - `/rules.js` - общие настройки конфига
    - `/plugins.js` - конфигурация плагинов
    - `/options.js` - опции лоадеров
    - `/src.js` - конфигурация пресетов

## Пакеты

```
npm i -D clean-webpack-plugin copy-webpack-plugin cross-env webpack webpack-bundle-analyzer webpack-cli webpack-dev-server file-loader url-loader raw-loader
```

## Стили

development: SCSS -> вставка в тег style
production: SCSS -> PostCSS -> извлечение

### Лоадеры

- `sass-loader` - Компиляция SCSS в CSS
- `pcss-loader` - PostCSS обработка в production mode
- `css-loader` - разрешение импортов
- `style-loader` - внедрение css в документ в development mode
- `MiniCSSExtractPlugin.loader` - извлечение css в файл в development mode

### Пресеты

- `scss.preset.development.js`
- `scss.preset.production.js`

### Плагины

- `css.extract.plugin` в production mode
- `stylelint.plugin` в production mode

### Пакеты

```
npm i -D autoprefixer css-loader css-mqpacker cssnano mini-css-extract-plugin node-sass postcss-loader postcss-preset-env postcss-scss sass-loader style-loader stylelint-config-prettier stylelint stylelint-order stylelint-webpack-plugin
```

### Конфигурация

- `.stylelintrc.js` - StyleLint
- `postcss.config.js` - PostCSS


## HTML

pug -> html

### Лоадеры

- `pug-loader` - компиляция Pug в HTML

### Пресеты

- `pug.preset.js`

### Плагины

- `html.plugin` - создание HTML-файла с подключенными ассетами

### Пакеты

```
npm i -D html-webpack-plugin pug pug-loader
```


## JavaScript

es6/jsx -> js

### Лоадеры

- `babel-loader` - компиляция ES6 в ES5
- `eslint-loader` - ESLint

### Пресеты

- `es6.preset.js`

### Пакеты

```
npm i -D @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-export-namespace-from @babel/plugin-proposal-function-bind @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-optional-chaining @babel/plugin-syntax-export-default-from @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime  @babel/preset-env @babel/preset-react babel-loader babel-eslint eslint eslint-loader

npm i @babel/runtime
```

### Конфигурация

- `.eslintrc` - ESLint
- `babel.config.js` - Babel

## React

### Включение

- Настройка `jsx` в `./webpack/config/rules.js`

### Пресеты

- `jsx.preset.js`

### Пакеты

```
npm i  react react-dom
```


## Текстовые файлы (.txt)

### Лоадеры

- `raw-loader` - импорт файлов в виде строки

### Пресеты

- `txt.preset.js`

## Изображения

### Лоадеры

- `url-loader` - импорт изображений в виде Base64 или копирование файла в dist
- `svg-inline-loader` - импорт svg в виде строки

### Пресеты

- `svg.preset.js`
- `img.preset.js`

### Плагины

- `img.min.plugin.js`

### Пакеты

```
npm i -D imagemin-webpack-plugin svg-inline-loader
```
