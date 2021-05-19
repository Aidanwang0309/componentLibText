const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
  ],

  webpackFinal: async (config, {configType}) => {
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== "/\\.css$/"
    );

    const assetRule = config.module.rules.find(({test}) =>
      test.toString().includes("svg")
    );

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.stories.tsx$/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: {
              parser: "typescript",
            },
          },
        ],
        enforce: "pre",
      },

      {
        test: /\.(ts|tsx)$/,
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../.storybook"),
        ],
        use: [
          require.resolve("cache-loader"),
          {
            loader: require.resolve("ts-loader"),
            options: {
              reportFiles: ["../src", "../.storybook"],
            },
          },
          require.resolve("react-docgen-typescript-loader"),
        ],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: require.resolve("file-loader"),
            query: {
              name: "[name].[ext]",
            },
          },
        ],
        include: path.resolve(__dirname, "../src/media"),
      },

      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // Enable modules to help you using className
            },
          },
        ],
        include: path.resolve(__dirname, "../src"),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src"),
      },
      {
        test: sassModuleRegex,
        sideEffects: true,
        include: path.resolve(__dirname, "../src"),
        use: [
          // require.resolve('postcss-loader'),
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              // sourceMap: true,
              modules: {
                compileType: "module",
                localIdentName: "lbc_[hash:base64:3]",
              },
            },
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              sourceMap: false,
              sassOptions: {
                includePaths: [path.resolve(__dirname, "../src")],
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ];

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader],
    });

    config.resolve.extensions.push(".ts", ".tsx", ".scss", ".css");

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];

    return config;
  },

  // babel: async (options) => {
  //   return {
  //     ...options,
  //     presets: [...options.presets, require.resolve("@babel/preset-react")],
  //     // any extra options you want to set
  //   };
  // },
};
