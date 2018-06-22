module.exports = {
  njk: {
    // Add custom variables to be inserted into the HTML templates
    customVars: {
      testing: "This is a test variable. Testing..."
    },
  },
  sass: {
    // Determines the output of the final CSS files
    // Values: ['nested', 'expanded', 'compact', 'compressed']
    outputStyle: 'nested',
  },
};
