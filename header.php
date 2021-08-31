<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package concero
 */
$logo_id = get_theme_mod( 'custom_logo' );
$logo = wp_get_attachment_image( $logo_id , 'full' );
$home = get_permalink(get_option('page_on_front'));
$logo_link = '<a href="' . $home . '#page">' . $logo . '</a>';

$contact = '<a href="' . $home . '#contact-block-content" class="nav-logo"><img src="' . get_template_directory_uri() . '/img/letter.svg" /></a>';
$map = '<a href="' . $home . '#contact-block-map" class="nav-logo"><img src="' . get_template_directory_uri() . '/img/map.svg" /></a>';

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'concero' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="logo-cont">

			<?php 
				echo $contact;

				if ($logo != '') {
					echo $logo_link;
				}

				echo $map;
				
			?>

		</div>
	</header><!-- #masthead -->
