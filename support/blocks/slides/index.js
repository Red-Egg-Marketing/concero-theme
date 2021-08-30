const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import edit from './edit';
import save from './save';

registerBlockType( 'concero-custom/slides', {
	apiVersion: 2,
	title: __( 'Slides', 'concero-custom' ),
	attributes: {
		id : {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: '.slides'
		},
		settings: {
			type: 'object',
			default: {
				autoplay: false,
				loop: false,
				dots: true,
				arrows: true,
			} 			
		}
	},
	icon: 'format-gallery',
	category: 'design',
	edit: edit,
	save: save
} );