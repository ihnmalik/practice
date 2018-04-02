const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');










module.exports = {
  entry: './src/index.jsx',
  // entry: './src/bootstrap/form.jsx',
  // entry: './src/playground/destructing.jsx',
  // entry: './src/playground/redux.jsx',
  // entry: './src/playground/redux-code/redux-expensify-code.jsx',
  // entry: './src/playground/redux-expensify.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        // test: /.jpg$/,
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },

    ],
  },
  devtool: 'cheap-module-eval-source-map'
}; 










// module.exports = (env) => {

//   const isProduction = env === 'production';
//   const CSSExtract = new ExtractTextPlugin('styles.css');

//   return {
//     entry: './src/index.jsx',
//     // entry: './src/store/bankStore.jsx',
//     // entry: './src/bootstrap/form.jsx',
//     output: {
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist')
//     },
//     devServer: {
//       historyApiFallback: true
//     },
//     module: {
//       loaders: [
//         {
//           // test: /.jpg$/,
//           test: /\.(jpe?g|png|gif|svg)$/i,
//           loader: ['url-loader', 'img-loader']
//         },
//         {
//           test: /.s?css$/,
//           use: CSSExtract.extract({
//             use: [
//               {
//               loader: 'css-loader',
//               options: {
//                 sourceMap: true
//               }
//             },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           })
//         },
//         {
//           test: /.jsx$/,
//           loader: 'babel-loader',
//           query: {
//             presets: ['es2015', 'react']
//           }
//         },

//       ],
//     },
//     plugins: [
//       CSSExtract
//     ],    
//     devtool: isProduction ? 'source-map' :'cheap-module-eval-source-map'
//   };
// };









































// module.exports = {
//   entry: './src/index.jsx',
//   // entry: './src/bootstrap/form.jsx',
//   // entry: './src/playground/destructing.jsx',
//   // entry: './src/playground/redux.jsx',
//   // entry: './src/playground/redux-code/redux-expensify-code.jsx',
//   // entry: './src/playground/redux-expensify.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devServer: {
//     historyApiFallback: true
//   },
//   module: {
//     loaders: [
//       {
//         // test: /.jpg$/,
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loader: ['url-loader', 'img-loader']
//       },
//       {
//         test: /.s?css$/,
//         loader: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /.jsx$/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       },

//     ],
//   },
//   devtool: 'cheap-module-eval-source-map'
// }; 






























// {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }