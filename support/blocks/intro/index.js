const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

registerBlockType( 'concero-custom/intro', {
	apiVersion: 2,
	title: __( 'Intro Block', 'concero-custom' ),
	attributes: {
		id : {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: '.intro-block'
		},
		settings: {
			type: 'object',
			default: {
				arrow: false,
				curtain: false,
				title: '',
				body: '',
				image: '',
				backgroundColor: '#000000',
				backgroundImage: '',
				backgroundWidth: '',
				backgroundHeight: '',
				backgroundRepeat: '',
				backgroundSize: 100,
				imageId: ''
			}
		}
	},
	icon: 'text-page',
	category: 'theme',
	edit: edit,
	save: save,
} );