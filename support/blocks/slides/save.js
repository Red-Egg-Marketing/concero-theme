const { InnerBlocks, useBlockProps, RichText } = wp.blockEditor;

const SaveSlides = ( { attributes } ) => {

	const { settings, id } = attributes;

	const blockProps = useBlockProps.save({
		className: "slides",
	});

	return (
		<div { ...blockProps} id={ id }>
			<div className="block-wrapper" id={ `block-${ id }` }>
				<div className="slides-wrap"
					data-autoplay={ settings.autoplay }
					data-loop={ settings.loop }
					data-arrows={ settings.arrows }
					data-dots={ settings.dots }
					id={ `slides-${ id }`}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}

export default SaveSlides;