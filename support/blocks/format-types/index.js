const { addFilter } = wp.hooks;
const coreName = 'core/button';
const enableFontControlOnBlocks = [
    coreName,
];

wp.domReady(() => {
    wp.blocks.unregisterBlockStyle( coreName, ['default', 'outline']);
});

wp.blocks.registerBlockStyle( coreName, [
    { 
        name: 'button-download',
        label: 'Button Download',
        isDefault: false
    }
]);