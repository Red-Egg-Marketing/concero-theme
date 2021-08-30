const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

registerBlockType( 'concero-custom/slide', {
	apiVersion: 2,
	title: __( 'Slide', 'concero-custom' ),
	icon: 'format-gallery',
	category: 'design',
	parent: ['concero-custom/slides'],
	attributes: {
		appID: {
			type: 'number',
			default: 10
		},
		appURL: {
			type: 'string',
			source: 'attribute',
			selector: '.app-media',
			attribute: 'src',
			default: concero.template_directory + '/support/blocks/slide/preview.jpg'
		},
		imgSet: {
			type: 'string',
			source: 'attribute',
			selector: '.app-media',
			attribute: 'srcset',
			default: ''
		},
		id: {
			type: 'string',
			default: '10'
		},
		title : {
			type: 'string',
			source: 'text',
			selector: '.slide-title',
			default: ''
		}
	},
	example: {
		attributes: {
			appID: 10,
			appURL: concero.template_directory + '/support/blocks/slide/preview.jpg',
			imgSet: '',
			id: '108',
			title: 'Your Slide Title'
		}
	},
	edit: edit,
	save: save,
} );