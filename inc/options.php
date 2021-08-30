<?php
// Add options page for site

if( function_exists('acf_add_options_page') ) {
    
	// Add parent.
    acf_add_options_page(array(
        'page_title'  => __('Concero Site Settings'),
        'menu_title'  => __('Concero Settings'),
        'redirect'    => false,
     ));

}