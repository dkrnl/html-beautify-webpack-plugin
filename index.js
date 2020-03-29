import HtmlWebpackPlugin from 'html-webpack-plugin'
import { html as beautify } from 'js-beautify'
import { merge } from 'lodash'

function processHtml(htmlPluginData, beautifyConfig) {
  htmlPluginData.html = beautify(htmlPluginData.html, beautifyConfig)
}

class HtmlBeautifyPlugin {
  constructor(userOptions = {}) {
    this.pluginName = 'HtmlBeautifyPlugin'

    const defaultOptions = {
      beautifyOptions: {
        indent_size: 4,
        indent_with_tabs: false,
        html: {
          end_with_newline: true,
          indent_inner_html: true,
          preserve_newlines: true,
        },
      },
    }

    this.options = merge({}, defaultOptions, userOptions)
  }

  apply(compiler) {
    const { beautifyOptions } = this.options
    const pluginName = this.pluginName

    compiler.hooks.compilation.tap(pluginName, compilation =>
      HtmlWebpackPlugin.getHooks(
        compilation
      ).afterTemplateExecution.tapPromise(pluginName, async htmlPluginData =>
        processHtml(htmlPluginData, beautifyOptions)
      )
    )
  }
}

export default HtmlBeautifyPlugin
