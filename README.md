# @entr/html-beautify-webpack-plugin

Beautifier for output of [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) for Webpack 4 and html-webpack-plugin 4

## Installation

Install the plugin with npm:

```shell
npm i -D @entr/html-beautify-webpack-plugin
```

yarn

```shell
yarn add -D @entr/html-beautify-webpack-plugin
```

## Usage

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('@entr/html-beautify-webpack-plugin@alpha');

...
    plugins: [
        new HtmlWebpackPlugin()
        new HtmlBeautifyPlugin()
    ]
...
```

```javascript
...
    plugins: [
        new HtmlWebpackPlugin()
        new HtmlBeautifyPlugin({
                beautifyOptions: {
                    html: {
                        end_with_newline: true,
                        indent_size: 2,
                        indent_with_tabs: true,
                        indent_inner_html: true,
                        preserve_newlines: true,
                        unformatted: ['p', 'i', 'b', 'span']
                    }
                }
            })
    ]
...
```

Order is important

## Configuration

You can pass a configuration options.
Allowed values are as follows:

- `beautifyOptions`: `{...}` [js-beautify](https://github.com/beautify-web/js-beautify)'s options as object to beatify the output.
