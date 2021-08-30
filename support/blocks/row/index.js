const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

registerBlockType( 'concero-custom/row', {
	apiVersion: 2,
	title: __( 'Content Row', 'concero-custom' ),
	icon: 'menu-alt3',
	category: 'design',
	parent: ['acf/contact-map'],
	attributes: {
		columnWidths: {
			type: 'object',
			default: {
				left: 50,
				right: 50,
				marginBottom: true,
				toggleMobile: false
			} 
		}
	},
	edit: edit,
	save: save,
} );