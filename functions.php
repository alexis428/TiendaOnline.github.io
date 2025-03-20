<?php

function tienda_online_enqueue_styles() {
    wp_enqueue_style('tienda-online-style', get_stylesheet_uri());
    wp_enqueue_style('tienda-online-custom', get_template_directory_uri() . '/assets/css/style-prefix.css');
    wp_enqueue_script('tienda-online-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'tienda_online_enqueue_styles');

function tienda_online_setup() {
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'tienda_online_setup');
