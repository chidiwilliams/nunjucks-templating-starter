# nunjucks-templating-starter

## About

NTS generates static HTML files from templates and compiles CSS and JS asset files. Supported by [Gulp](https://github.com/gulpjs/gulp) and [Nunjucks](https://github.com/mozilla/nunjucks).

## Table of Contents

1. [Quick Start](#quick-start)

2. [Available commands](#commands)

3. [Dependencies](#dependencies)

<a name="quick-start"></a>

## Quick Start

To begin:

1. Create new app directory

2. Clone this repository

```bat
git clone https://www.github.com/chidiwilliams/nunjucks-templating-starter
```

3. Install dependencies

```bat
npm install
```

4. Build

```bat
npm run build
```

<a name="commands"></a>

## Available commands

### `npm run build`

Compiles the HTML and assets files into the public directory. This action can also be done by running `node index.js`.

### `npm run watch`

Same as above but watches for file changes in the resources directory and recompiles the assets accordingly.

<a name="dependencies"></a>

## Dependencies

This tool is powered by:

1. Gulp [GitHub](https://github.com/gulpjs/gulp) [NPM](https://www.npmjs.com/package/gulp) [Website](https://gulpjs.com/)

2. Nunjucks [GitHub](https://github.com/mozilla/nunjucks) [Website](https://mozilla.github.io/nunjucks/)

3. Nodemon [GitHub](https://github.com/remy/nodemon) [NPM](https://www.npmjs.com/package/nodemon) [Website](https://nodemon.io/)
