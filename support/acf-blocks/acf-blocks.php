<?php

add_action('acf/init', 'concero_register_blocks');

function concero_register_blocks() {

     $map_key_api = 'AIzaSyBhHUzArHisbmF1ad0O5lW8nz3Ec_uiS2g';

     if( function_exists('acf_register_block_type') ) {

        acf_register_block_type(array(
            'name'              => 'contact-map',
            'title'             => __('Contact & Map block'),
            'category'          => 'layout',
            'render_template'   => get_template_directory() . '/support/acf-blocks/templates/contact-map/contact-map.php',
            'icon'              => 'location-alt',
            'keywords'          => array('Contact', 'Map', 'Form', 'Columns'),
            'mode'              => 'preview',
            'supports'     => [
               'align'        => false,
               'anchor'    => true,
               'customClassName' => true,
               'jsx'          => true,
            ],
            'enqueue_assets'  => function() use ($map_key_api){
               $map_script = 'https://maps.googleapis.com/maps/api/js?key=' . $map_key_api;

               wp_enqueue_script( 'google-map-script', $map_script, array(), '', true );
               wp_enqueue_script( 'block-contact-map', get_template_directory_uri() . '/support/assets/js/maps/maps.js', array('jquery', 'google-map-script'), '', true );

            }
        ));

    }

    acf_update_setting('google_api_key', $map_key_api);

}
