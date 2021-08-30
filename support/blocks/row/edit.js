const { RichText, InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { PanelBody, __experimentalInputControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

const template = [
    	['concero-custom-blocks/wrap', {'allowBlocks' : ['core/paragraph', 'core/heading', 'core/buttons']},
    		[
				['core/heading', 
					{'level' : 3, 'placeholder' : 'Header goes here...'}
				],
				['core/paragraph',
					{'placeholder' : 'Content goes here...'}
				]
			]
    	],
    	['concero-custom-blocks/wrap', {'allowBlocks' : ['core/paragraph', 'core/heading', 'core/buttons']},
    		[
				['core/heading', 
					{'level' : 3, 'placeholder' : 'Header goes here...'}
				],
				['core/paragraph',
					{'placeholder' : 'Content goes here...'}
				]
			]
    	]
];

const EditRow = ( { attributes, setAttributes } ) => {

	const { columnWidths } = attributes;

	const leftCol = 'left-col-' + columnWidths.left + ' ';
	const rightCol = 'right-col-' + columnWidths.right + ' ';
	const margin = columnWidths.marginBottom == false ? ' no-margin' : '';

    const blockProps = useBlockProps({
    	className: "row " + leftCol + rightCol + margin,
    });

    const InputControl = __experimentalInputControl;

    const adjustColumnLeftWidth = (value) => {
    	let columns = JSON.parse(JSON.stringify(columnWidths));
    	columns.left = value;
    	columns.right = (100 - value);

    	setAttributes({
    		columnWidths: columns
    	});
    }

     const adjustColumnRightWidth = (value) => {
    	let columns = JSON.parse(JSON.stringify(columnWidths));
    	columns.right = value;
    	columns.left = (100 - value);

    	setAttributes({
    		columnWidths: columns
    	});
    }

    const toggleBottomMargin = (value) => {
    	let settings = JSON.parse(JSON.stringify(columnWidths));
    	settings.marginBottom = value;

    	setAttributes({
    		columnWidths: settings
    	});
    }

    const toggleRows = (value) => {
    	let settings = JSON.parse(JSON.stringify(columnWidths));
    	settings.toggleMobile = value;

    	setAttributes({
    		columnWidths: settings
    	})
    }

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Column Widths')}
					initialOpen={true}
				>
					<InputControl
						label={__('Left Column % Width')}
						value={ columnWidths.left }
						onChange={ adjustColumnLeftWidth }
						type="number"
					/>
					<InputControl
						label={__('Right Column % Width')}
						value={ columnWidths.right }
						onChange={ adjustColumnRightWidth }
						type="number"
					/>
				</PanelBody>
				<PanelBody
					title={__('Row Margin')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Margin Bottom')}
						checked={ columnWidths.marginBottom }
						onChange={ toggleBottomMargin }
					/>
				</PanelBody>
				<PanelBody
					title={__('Toggle Mobile Rows (Switches Order)')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Mobile Rows')}
						checked={ columnWidths.toggleMobile }
						onChange={ toggleRows }
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>					
				<InnerBlocks
					allowedBlocks={['']}
					template={ template }
				/>
			</div>
		</Fragment>
	);
}

export default EditRow;