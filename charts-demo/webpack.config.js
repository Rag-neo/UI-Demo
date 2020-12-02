module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            syntax: 'postcss',
            plugins: () => [
              require('postcss'),
              require('tailwindcss'),
              require('autoprefixer'),
            ]
          }
        }
      ]
    }
  };