<?php
/**
 * Set the content width based on the theme's design and stylesheet.
 */
/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

function sharis_website_scripts() {
	wp_enqueue_style( 'sharis-website-editor-style', get_template_directory_uri()."/style.css" );
	wp_enqueue_script( 'sharis-website-jquery-javascript', get_template_directory_uri()."/js/vendor/jquery.js" );
	wp_enqueue_script( 'sharis-website-main-javascript', get_template_directory_uri()."/js/custom/main.js" );
}
add_action( 'wp_enqueue_scripts', 'sharis_website_scripts' );
?>