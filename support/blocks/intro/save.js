const { InnerBlocks, useBlockProps, RichText } = wp.blockEditor;

const SaveIntro = ( { attributes } ) => {

	const { settings, id } = attributes;

	const blockProps = useBlockProps.save({
		className: "intro-block"
	});

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

	return (
		<section { ...blockProps } 
			data-curtain={ settings.curtain } 
			id={ id }>
			<div 
				className="block-wrapper" 
				style={ styleBlock }	
				>
				<div className="intro-wrap">
					{ settings.image != '' && (
						<div className="image-wrap">
							<img
								className="block-image"
								src={ settings.image }
							/>
						</div>
					)}
					<RichText.Content
						tagName="h3"
						className="block-heading"
						value={ settings.title }
					/>
					<RichText.Content
						tagName="div"
						className="block-body"
						value={ settings.body }
						multiline="p"
					/>
				</div>
			</div>
		</section>
	);
}

export default SaveIntro;