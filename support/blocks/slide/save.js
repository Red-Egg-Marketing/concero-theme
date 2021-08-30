const { InnerBlocks, useBlockProps, RichText } = wp.blockEditor;

const SaveSlide = ( { attributes } ) => {

	const { id, title, appURL, appID, imgSet } = attributes;

	const blockProps = useBlockProps.save({
		className: "slide swiper-slide"
	});

	return (
		<div { ...blockProps} id={id}>
			<div className="slide-cont">
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
							{ title != '' && (
								<RichText.Content
									tagName="h2"
									className="slide-title"							
									value={ title }
								/>
							)}
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SaveSlide;