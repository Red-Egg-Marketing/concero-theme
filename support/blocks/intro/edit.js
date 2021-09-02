const { RichText, InnerBlocks, useBlockProps, MediaUpload, InspectorControls } = wp.blockEditor;
const { Fragment, useState } = wp.element;
const { Button, PanelBody, ToggleControl, RangeControl, SelectControl, ColorPicker, FormFileUpload, ResponsiveWrapper } = wp.components;
const { __ } = wp.i18n;

const EditIntro = ( { attributes, setAttributes, isSelected, clientId } ) => {

	const { settings, id } = attributes;

	if ( !id ) {
		setAttributes({
			id: clientId
		});
	}

	const [ color, setColorState ] = useState( '#f00' );

    const blockProps = useBlockProps({
    	className: "intro-block"
    });
   

    const setArrow = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.arrow = value;

    	setAttributes({
    		settings: newBody
    	});

    }


    const setCurtain = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.curtain = value;

    	setAttributes({
    		settings: newBody
    	});

    }


    const setBackgroundSize = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.backgroundSize = value;

    	setAttributes({
    		settings: newBody
    	});

    }

    const setHeading = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.title = value;

    	setAttributes({
    		settings: newBody
    	});

    }

    const setBody = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.body = value;

    	setAttributes({
    		settings: newBody
    	});

    }


    const setColor = (value) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.backgroundColor = value.hex;

    	setColorState(value.hex);
    	setAttributes({
    		settings: newBody
    	});

    }

     const onSelectImage = (media) => {

     	let newBody = JSON.parse(JSON.stringify(settings));
    	let mediaSrc;
        if (media.subtype == 'svg+xml') {
        	mediaSrc = media.url;
        } else {
           mediaSrc = media.url;
        }
        newBody.imageId = media.id;
        newBody.image = media.url;

        setAttributes({
         	settings: newBody
        });

    }

    const onSelectLogo = (media) => {

     	let newBody = JSON.parse(JSON.stringify(settings));
    	let mediaSrc;
        if (media.subtype == 'svg+xml') {
        	mediaSrc = media.url;
        } else {
           mediaSrc = media.url;
        }
        newBody.logoId = media.id;
        newBody.logoImage = media.url;

        setAttributes({
         	settings: newBody
        });

    }

    const removeImage = () => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.image = '';
    	newBody.imageId = '';

    	setAttributes({
    		settings: newBody
    	});

    }


    const removeLogo = () => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.logoImage = '';
    	newBody.logoId = '';

    	setAttributes({
    		settings: newBody
    	});

    }

    const setBackgroundImage = (media) => {

    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.backgroundImage = media.url;
    	newBody.backgroundWidth = media.width;
    	newBody.backgroundHeight = media.height;
    	newBody.backgroundRepeat = 'no-repeat';

    	setAttributes({
    		settings: newBody
    	});

    }


    const removeBackgroundImage = () => {
    	
    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.backgroundImage = '';
    	newBody.backgroundWidth = '';
    	newBody.backgroundHeight = '';
    	newBody.backgroundRepeat = '';

    	setAttributes({
    		settings: newBody
    	});

    }


    const updateBackgroundRepeat = (value) => {
    	let newBody = JSON.parse(JSON.stringify(settings));
    	newBody.backgroundRepeat = value;

    	setAttributes({
    		settings: newBody
    	});
    
    }

    const labelStyle = {
    	'margin-bottom' : '5px',
    	'margin-top' : '5px',
    	'display' : 'block',
    	'width' : '100%'
    }

    let styleBlock = '';

    if (settings.backgroundColor != '' || settings.backgroundImage != '') {
    	styleBlock = {
    		'background-color' : settings.backgroundColor != '' ? settings.backgroundColor : '',
    		'background-image' : settings.backgroundImage != '' ? 'url(' + settings.backgroundImage + ')' : '',
    		'background-repeat' : settings.backgroundRepeat,
    		'background-size' : settings.backgroundSize + '%',
    	}

    } else {
    	styleBlock = '';
    }
    
    // const styleBlock = settings.backgroundColor != '' ? {
    // 	'background-color' : settings.backgroundColor
    // } : '';

   	const butText = settings.imageId != '' ? 'Change' : 'Upload';


   	const butStyle = {
   		'margin-left' : '10px',
   		'margin-right' : '10px',
   		'margin-bottom' : '10px',
   		'margin-top' : '10px'
   	}

   	const selectBgStyle = [
   		{ value: 'no-repeat', label: 'No Repeat'},
   		{ value: 'repeat', label: 'Repeat'},
   		{ value: 'repeat-y', label: 'Repeat Y'},
   		{ value: 'repeat-x', label: 'Repeat X'}
   	]


	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Block Backgrounds')}
					initialOpen={true}
				>	
					<label style={ labelStyle }>{__('Background Color')}</label>
					<ColorPicker
						onChangeComplete={ setColor }
						color={ settings.backgroundColor }
						disableAlpha
					/>	
					<label style={ labelStyle }>{__('Background Image')}</label>
					<MediaUpload
						allowedTypes={ ['image'] }
						onSelect={ setBackgroundImage }
						value={ settings.backgroundImage }
						render={ ( {open} ) =>(
							<Fragment>
								<Button
									isSecondary
									onClick={ open }
									style={
										{
											'margin-bottom' : '15px',
											'height' : 'auto',
											'display' : 'block',
											'width' : '100%'
										}
									}
								> 
									{ settings.backgroundImage == '' && ( __('Add Background Image') )}
									{ settings.backgroundImage != '' && (
										<ResponsiveWrapper
											naturalWidth={ settings.backgroundWidth }
											naturalHeight={ settings.backgroundHeight }
										>
											<img 
												src={ settings.backgroundImage }
												style={
													{
														'max-height' : 'auto',
														'width' : 'auto',
													}
												}
											/>
										</ResponsiveWrapper>
									)}
								</Button>
								
								{ settings.backgroundImage != '' && (
									<Fragment>
										<Button
											isDestructive
											isSmall
											onClick={
												removeBackgroundImage
											}
											style={
												butStyle
											}
										>
											Remove Image
										</Button>
										<SelectControl
											label={__('Background Repeat')}
											value={ settings.backgroundRepeat }
											options={ selectBgStyle }
											onChange={ updateBackgroundRepeat }
										/>
										<RangeControl
											label={__('Background Size')}
											value={ settings.backgroundSize }
											onChange={ setBackgroundSize }
											min={1}
											max={100}
										/>
									</Fragment>
								)}
							</Fragment>
						)}
					/>
				</PanelBody>
				<PanelBody
					title={__('Block Functionality')}
					initialOpen={false}
				>
					<ToggleControl
						checked={ settings.arrow }
						label="Show Scroll Arrow"
						onChange={ setArrow }
					/>
					<ToggleControl
						checked={ settings.curtain }
						label="Activate Curtain Effect"
						onChange={ setCurtain }
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}
				id={ id }
				>
				<div className="block-wrapper" style={ styleBlock }>
					<div className="intro-wrap">
						<MediaUpload
							allowedTypes={ ['image'] }
							onSelect={ onSelectImage }
							value={ settings.imageId }
							render={ ( {open} ) =>(
								<div 
									className="image-controls"
									style={
                        	    		{
                        	    			'background' : 'rgba(255, 255, 255, 0.7)',
                        	    			'display' : 'inline-block',
                        	    			'padding' : '5px',
                        	    			'margin-top' : '10px'
                        	    		}
                        	    	}
								>
									<Button
										isSecondary
										onClick={ open }
										style={ butStyle }
									>
										{ butText } Image
									</Button>
									{ settings.image != '' && (
										<Button
											isDestructive
											onClick={ removeImage }
											style={ butStyle }
										>
											Remove Image
										</Button>
									)}
								</div>	
							)}
						/>
						{ (settings.image != '' || settings.logoImage != '') && (
							<div className="image-wrap">
								{ settings.image != '' && (
									<img
										className="block-image"
										src={ settings.image }
									/>
								)}

								{ settings.logoImage != '' && (
									<img
										className="block-logo-image"
										src={ settings.logoImage }
									/>
								)}
							</div>
						)}
						
						<MediaUpload
							allowedTypes={ ['image'] }
							onSelect={ onSelectLogo }
							value={ settings.logoId }
							render={ ( {open} ) =>(
								<div 
									className="image-controls"
									style={
                        	    		{
                        	    			'background' : 'rgba(255, 255, 255, 0.7)',
                        	    			'display' : 'inline-block',
                        	    			'padding' : '5px',
                        	    			'margin-top' : '10px'
                        	    		}
                        	    	}
								>
									<Button
										isSecondary
										onClick={ open }
										style={ butStyle }
									>
										{ butText } Logo Image
									</Button>
									{ settings.logoImage != '' && (
										<Button
											isDestructive
											onClick={ removeLogo }
											style={ butStyle }
										>
											Remove Logo Image
										</Button>
									)}
								</div>	
							)}
						/>
						<RichText
							tagName="h3"
							className="block-heading"
							onChange={ setHeading }
							placeholder={__(
								'Intro title...',
								'concero-custom'
							)}
							value={ settings.title }
						/>
						<RichText
							tagName="div"
							className="block-body"
							onChange={ setBody }
							placeholder={__(
								'Intro copy...',
								'concero-custom'
							)}
							value={ settings.body }
							multiline="p"
						/>
					</div>
				</div>						
			</section>
		</Fragment>
	);
}

export default EditIntro;