/**
 * Plugins configs
 */

const path = require('path');

const PATHS = require('./paths');

module.exports = root => {
	return {
		clean: {
			options: {}
		},
		styleLint: {
			options: {}
		},
		cssExtract: {
			options: {
				filename: '[name].css',
				chunkFileName: '[name].css',
			}
		},
		imgMin: {
			options: {}
		},

		copy: {
			patterns: [

			],
			options: {}
		},

		html: PATHS.entries.map(entry => {
			return {
				options: {
					template: path.resolve(
						root,
						PATHS.src.root,
						PATHS.src.pages,
						`${entry}.pug`
					),
					chunks: [entry],
					filename: `${entry}.html`,
					inject: true
				}
			};
		}),

		chunks: {
			options: {
				outputPath: path.resolve(root, `./chunks`),
				fileExtension: '.html',
				templateScript: `<script src="{{chunk}}"></script>`,
				templateStyle: `<link rel="stylesheet" href="{{chunk}}" />`,
				generateChunksManifest: true
			}
		}
	};
};
