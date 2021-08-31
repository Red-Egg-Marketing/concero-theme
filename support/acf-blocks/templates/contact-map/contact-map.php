<?php

$map = get_field('map');
$allowed_blocks =  ['concero-custom/row', 'gravityforms/form'];
$head = $block['data']['map_header'];

$classes = ['contact-map', 'contact-map-block'];
if( !empty( $block['className'] ) )
    $classes = array_merge( $classes, explode( ' ', $block['className'] ) );

$anchor = '';
if( !empty( $block['anchor'] ) )
	$anchor = ' id="' . sanitize_title( $block['anchor'] ) . '"';
	$anchor_map = ' id="' . sanitize_title( $block['anchor'] ) . '-map"';
	$anchor_content = ' id="' . sanitize_title( $block['anchor'] ) . '-content"';

$template = [
	['concero-custom/row'],
	['gravityforms/form'],
];

?>

 <div class="<?= join( ' ', $classes )  ?>" <?= $anchor; ?>>
	 <div class="contact-map__inner">
		 <div class="contact-map__content">
		 	<div class="column column-map" <?= $anchor_map; ?>>
		 		<?php if ($head != '') : ?>
		 			<h3 class="mobile-header">
		 				<?= $head; ?>
		 			</h3>
		 		<?php endif; ?>
		 		<?php 
		 			if ($map){
		 				?>
		 				<div class="acf-map" data-zoom="16">
        					<div class="marker" 
        						data-lat="<?php echo esc_attr($map['lat']); ?>" 
        						data-lng="<?php echo esc_attr($map['lng']); ?>">		
        					</div>
    					</div>
		 				<?php
		 			}
		 		?>
			</div>
			<div class="column" <?= $anchor_content; ?>>
				<InnerBlocks 
					template="<?= esc_attr( wp_json_encode( $template ) ) ?>"
					allowedBlocks="<?= esc_attr( wp_json_encode( $allowed_blocks ) ) ?>"
				/>
			</div>
		 </div>
	 </div>
 </div>