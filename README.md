# nunjucks-templating-starter

## About

NTS generates static HTML files from templates and compiles CSS and JS asset files. Supported by [Gulp](https://github.com/gulpjs/gulp) and [Nunjucks](https://github.com/mozilla/nunjucks).

## Table of Contents

1. [Quick Start](#quick-start)

2. [Usage](#usage)

3. [Available commands](#commands)

4. [Configuration](#configuration)

5. [Dependencies](#dependencies)

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

<a name="usage"></a>

## Usage

### HTML

This tool uses the Nunjucks templating engine. To learn more about Nunjucks, visit the [website](https://mozilla.github.io/nunjucks/).

The Nunjucks templates are kept in the `resources/views` directory. Both .njk and .html file extensions are supported for the templates.

Example:

```null
|--views/
  |--layouts/
  | |--master.njk
  |--home.njk
```

views/layouts/master.njk

```jinja
<html>
...
<body>
...
{% block content %}{% endblock %}
...
</body>
</html>
```

views/home.njk

```jinja
{% extends 'layouts/master.njk' %}

{% block content %}
  Giraffes were invented when Chuck Norris laid an uppercut to a horse.
{% endblock %}
```

The rendered HTML files would be sent to the `dist` directory.

home.html
```html
<html>
...
<body>
...
Giraffes were invented when Chuck Norris laid an uppercut to a horse.
...
</body>
</html>
```

### CSS
Place precompiled SCSS files in the `resources/assets/scss` directory. To minify the output CSS, set:

config/config.js

```js
config.sass.outputStyle = 'compressed'
```

After building, the compiled CSS files are sent to the `dist/css` directory.

To import the CSS into a Nunjucks template, link to `dist/css/[FILE_NAME]`. Example:

master.njk

```jinja
<html>
<head>
  ...
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
...
<script src="js/main.js"></script>
</body>
...
</html>
```

### JS

Place precompiled JS files in the `resources/assets/js` directory. To minify the output JS, set:

config/config.js

```js
config.sass.outputStyle = 'compressed'
```

After building, the compiled CSS files are sent to the `dist/css` directory.

### Vendor

Put vendor CSS and JS assets in the `resources/vendor/css` and `resources/vendor/js` respectively. During compilation, these assets are directly copied into the `dist` directory without processing.

<a name="commands"></a>

## Available commands

### `npm run build`

Compiles the HTML and assets files into the dist directory. This action can also be done by running `node index.js`.

### `npm run watch`

Same as above but watches for file changes in the resources directory and recompiles the assets accordingly.

Also, it starts a server at http://localhost:3000/ and syncs your browser with your output files. Great for development.

<a name="configuration"></a>

## Configuration

The configuration object is exported by the  `'config/config.js'` file.

### `config.njk`

Configuration for the Nunjucks renderer

`config.njk.templateVars`: Pass in variables here to add them as global variables in your Nunjucks templates.

Example:

config.js

```js
module.exports = {
  ...
  njk: {
    ...
    templateVars: {
      quote1: "Chuck Norris can light a fire by rubbing two ice-cubes together.",
      quote2: "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.",
    }
    ...
  }
  ...
}
```

home.njk

```jinja
<html>
  ...
  <body>
    {{ quote1 }}
    {{ quote2 }}
  </body>
</html>
```

### `config.sass`

Configuration for the SASS renderer

`config.sass.outputStyle`: Style of the output CSS files ('nested' | 'expanded' | 'compact' | 'compressed'). Default is 'nested'.

### `config.js`

Configuration for the JS renderer

`config.js.doCompress`: Determines if the final JS files would be compressed (true | false). Default is false.

`config.js.doKeepSource`: Determines if the .js source file would be included after compression (true | false).  Default is false. `config.js.doCompress` must be set to true.

<a name="dependencies"></a>

## Dependencies

1. Gulp [GitHub](https://github.com/gulpjs/gulp) [NPM](https://www.npmjs.com/package/gulp) [Website](https://gulpjs.com/)

2. Nunjucks [GitHub](https://github.com/mozilla/nunjucks) [Website](https://mozilla.github.io/nunjucks/)

3. Nodemon [GitHub](https://github.com/remy/nodemon) [NPM](https://www.npmjs.com/package/nodemon) [Website](https://nodemon.io/)
