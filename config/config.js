module.exports = {
  gulp: {
    public_dir: 'public',
    assets_dir: 'resources/assets',
    views_dir: 'resources/views',
    vendor_dir: 'vendor',
  },
  njk: {
    // Add custom variables to be inserted into the HTML templates
    templateVars: {
      testing: 'This is a test variable. Testing...',
    },
  },
  sass: {
    // Determines the style of the final CSS files
    // Values: ['nested', 'expanded', 'compact', 'compressed']
    outputStyle: 'nested',
  },
  js: {
    // Determines if the final JS files would be compressed
    // Values: [true, false]
    doCompress: false,
    // Determines if the .js source file would be included after compression
    // doCompress must be true
    // Values: [true, false]
    doKeepSource: false,
  },
};
