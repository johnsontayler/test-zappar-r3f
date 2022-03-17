const WebpackQRCodePlugin = require("webpack-dev-server-qr-code");

module.exports = {
  webpack: function (config, env) {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf instanceof Array) {
        rule.oneOf[rule.oneOf.length - 1].exclude = [
          /\.(js|mjs|zbin|jsx|ts|tsx)$/,
          /\.html$/,
          /\.json$/,
        ];
        return {
          ...rule,
          oneOf: [
            {
              test: /zcv\.wasm$/,
              type: "javascript/auto",
              loader: "file-loader",
              options: {
                outputPath: "static/js",
                publicPath: ".",
                name: "[name].[ext]",
              },
            },
            ...rule.oneOf,
          ],
        };
      }
      return rule;
    });

    config.resolve.extensions.push(".wasm");
    return config;
  },
  jest: function (config) {
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.https = true;
      config.port = 3000;
      config.host = "0.0.0.0";
      return config;
    };
  },
  paths: function (paths, env) {
    return paths;
  },
  plugins: [new WebpackQRCodePlugin()],
};
