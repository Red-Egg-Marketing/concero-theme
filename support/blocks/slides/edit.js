const { RichText, InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { PanelBody, ToggleControl, SelectControl } = wp.components;
const { __ } = wp.i18n;

const template = [
    ['concero-custom/slide']
];

const EditSlides = ( { attributes, setAttributes, clientId } ) => {

	const { settings, id } = attributes;

	if ( !id ) {
		setAttributes({
			id: clientId
		});
	}

    const blockProps = useBlockProps({
    	className: "slides",
    });
   
    const setAutoplay = (value) => {
    	
    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.autoplay = value;
    	
    	setAttributes({
    		settings: newBody
    	});
    }

     const setLoop = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.loop = value;

    	setAttributes({
    		settings: newBody
    	});
    }

    const setDots = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.dots = value;

    	setAttributes({
    		settings: newBody
    	});
    }

    const setArrows = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.arrows = value;

    	setAttributes({
    		settings: newBody
    	});
    }

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Slider Controls')}
					initialOpen={true}
				>
					<ToggleControl
						checked={ settings.autoplay }
						label="Autoplay"
						onChange={ setAutoplay }
					/>
					<ToggleControl
						checked={ settings.loop }
						label="Loop"
						onChange={ setLoop }
					/>
					<ToggleControl
						checked={ settings.arrows }
						label="Show Navigation Arrows"
						onChange={ setArrows }
					/>
					<ToggleControl
						checked={ settings.dots }
						label="Show Dot Indicators"
						onChange={ setDots }
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps} id={ id }>
				<div className="block-wrapper" id={ `block-${ id }` }>
					<div className="slides-wrap" 
						data-autoplay={ settings.autoplay }
						data-loop={ settings.loop }
						data-arrows={ settings.arrows }
						data-dots={ settings.dots }
						id={ `slides-${ id }`}
					>
						<InnerBlocks
							allowedBlocks={['concero-custom/slide']}
							template={ template }
						/>
					</div>
				</div>						
			</div>
		</Fragment>
	);
}

export default EditSlides;