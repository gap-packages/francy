const path = require('path');
const version = require('./package.json').version;

const loaders = [
    {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
	    loader: 'babel-loader',
	    options: {
		presets: ['@babel/preset-env'],
		plugins: [
		    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
		    ['@babel/plugin-transform-classes', { 'globals': ['Error'] }]
		]
	    }
	}
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
];

// Packages that shouldn't be bundled but loaded at runtime
const externals = [
        'base/js/namespace',
        'nbextensions/jupyter_francy/Vendors',
        'nbextensions/jupyter_francy/FrancyJS',
        'nbextensions/jupyter_francy/D3Renderer',
        'nbextensions/jupyter_francy/GraphvizRenderer',
        'nbextensions/jupyter_francy/VisRenderer',
        'nbextensions/jupyter_francy/index'
];

module.exports = [

    {// Notebook extension
	entry: './src/nb_extension.js',
	output: {
            filename: 'extension.js',
            path: path.resolve(__dirname, 'jupyter_francy', 'nbextension'),
            libraryTarget: 'amd'
	},
	externals: externals
    },
    {// jupyter_francy bundle for the notebook
	entry: './src/index.js',
	output: {
            filename: 'nb_index.js',
            path: path.resolve(__dirname, 'jupyter_francy', 'nbextension'),
            libraryTarget: 'amd'
	},
	devtool: 'source-map',
	module: {
            rules: loaders
	}
    },
    {// Francy dependencies
	entry: {
	    Vendors: './src/vendor.js',
            FrancyJS: ['babel-polyfill', 'francy'],
            D3Renderer: ['babel-polyfill','francy-renderer-d3'],
            GraphvizRenderer: ['babel-polyfill','francy-renderer-graphviz'],
            VisRenderer: ['babel-polyfill','francy-renderer-vis']
	},
	output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'jupyter_francy', 'nbextension'),
            libraryTarget: 'amd'
	},
	devtool: 'source-map',
	module: {
            rules: loaders
	}
    },
    {// embeddable jupyter_francy bundle (?)
	entry: './src/embed.js',
	output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'amd',
            publicPath: 'https://unpkg.com/francy-extension-jupyter@' + version + '/dist/'
	},
	devtool: 'source-map',
	module: {
            rules: loaders
	}
    }
];
