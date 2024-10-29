/**
 * Webpack configuration file.
 *
 * @since 0.27.0
 * @package WordPress
 * @subpackage A.N.R.GHG Publishing Toolset
 *
 * @link https://awhitepixel.com/blog/wordpress-gutenberg-complete-guide-development-environment/
 * @datetime 2021-08-28T1816+0200
 * @datetime 2022-01-16T1822+0100 Add support for Thank You message block.
 * @datetime 2022-01-27T0327+0100 Add support for References block.
 * @datetime 2023-10-07T0536+0200 Add support for Include partial block.
 *
 * *** Please do not edit this file in the plugin folder. ***
 * *** The copies in the plugin folder are informative only. ***
 * * This file may be edited in the build folder, see build.sh. *
 */

const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const path          = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'anrghg-thanks-block': '../anrghg/admin/blocks/anrghg-thanks-block.js',
		'anrghg-contents-block': '../anrghg/admin/blocks/anrghg-contents-block.js',
		'anrghg-section-block': '../anrghg/admin/blocks/anrghg-section-block.js',
		'anrghg-references-block': '../anrghg/admin/blocks/anrghg-references-block.js',
		'anrghg-include-block': '../anrghg/admin/blocks/anrghg-include-block.js',
	},
	output: {
		path: path.join( __dirname, 'build' ),
		filename: '[name].min.js'
	},
	mode: 'production',
}