const { useBlockProps } = wp.blockEditor;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { Button } = wp.components;
const { __ } = wp.i18n;

const SaveRow = ( { attributes } ) => {

		const { columnWidths } = attributes;

		const leftCol = 'left-col-' + columnWidths.left + ' ';
		const rightCol = 'right-col-' + columnWidths.right + ' ';
		const togMob = columnWidths.toggleMobile == true ? ' toggle-row' : '';
		const margin = columnWidths.marginBottom == false ? ' no-margin' : '';

		const blockProps = useBlockProps.save({
			className: "row " + leftCol + rightCol + margin + togMob,
		});

		return (
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		);
}

export default SaveRow;