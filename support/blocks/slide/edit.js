import classNames from "classNames";
const { RichText, InnerBlocks, MediaUpload, InspectorControls, useBlockProps, URLInputButton } = wp.blockEditor;
const { createBlock } = wp.blocks;
const { Fragment, Component, useState } = wp.element;
const { Button, ToggleControl, PanelBody } = wp.components;
const { useDispatch, useSelect, replaceInnerBlocks } = wp.data;
const { __ } = wp.i18n;

const EditSlide = ( { attributes, setAttributes, isSelected } ) => {

	const { id, title, appURL, appID, imgSet } = attributes;


	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};
	
    const onSelectImage = (media) => {
        let ID = wp.data.select('core/block-editor').getSelectedBlock().clientId;

    	let mediaSrc;
        let srcSet;
        if (media.subtype == 'svg+xml') {
        	mediaSrc = media.url;
        } else {
           mediaSrc = media.sizes['slide-image-large'] != undefined ? media.sizes['slide-image-large'].url : media.sizes['full'].url;
           srcSet = media.sizes['slide-image-reg'].url + ' 1400w';
           srcSet += ', ' + media.sizes['slide-image-small'].url + ' 960w';
           srcSet += ', ' + media.sizes['slide-image-xs'].url + ' 480w';
           srcSet += ', ' + mediaSrc + ' 1920w';
        }

        setAttributes({
            appURL : mediaSrc,
            appID : media.id,
            id: 'slide-' + ID,
            imgSet: srcSet
        });
    }

    const template = [
    	['core/paragraph', {'placeholder' : 'Slide content...'}]
    ]

    const blockProps = useBlockProps({
    	className: "slide swiper-slide"
    });

    let butText = appURL != '' ? 'Change' : 'Upload';

	return (
		<Fragment>
			<div {...blockProps} id={id}>
                <div className="slide-cont">
				    <div className="media-controls">
				    	<MediaUpload
                        	onSelect={ onSelectImage }
                        	value={ appID }
                        	render={ ( { open } ) => (
                        	    <div className="image-controls"
                        	    	style={
                        	    		{
                        	    			'background' : 'white'
                        	    		}
                        	    	}
                        	    >
                        	        <Button
                                        isPrimary
                        	            onClick={ open }
                        	        >
                        	            { butText } Slide Image
                        	        </Button>
                        	    </div>
                        	) }
                        />
				    </div>
				    <div className="slide-wrap">
				    	<div className="img-wrap">
				    		<div className="fade-wrap">
                        	{ appURL != '' && (
                        		<img
                        			src={ appURL }
                                    srcset={ imgSet }
                                    sizes="
                                        (min-width: 768px) 100vw,
                                        100vw
                                    "
                        			className="app-media"
                        		/>
                        	)}
                        	</div>
                        	<div className="animate-fill">
							</div>
				    	</div>
				    	<div className="text-wrap">
				    		<div className="inner-wrap">
				    			<RichText
				    				tagName="h2"
				    				className="slide-title"
				    				placeholder={ __(
				    					'Slide Title...',
				    					'concero-custom'
				    				) }
				    				value={ title }
				    				onChange={ onChangeTitle }
				    			/>
				    			<InnerBlocks
				    				allowedBlocks={['core/paragraph', 'core/list']}
				    				template={ template }
				    			/>
				    		</div>
				    	</div>
				    </div>
                </div>
			</div>
		</Fragment>
	);
}

export default EditSlide;