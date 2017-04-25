exports.config = {   
    seleniumAddress: 'http://localhost:9515',

    specs: ['T01-gdp-LoadResources.js','T02-gdp-AddResources.js','T01-education-LoadData.js','T02-education-AddData.js'],

    capabilities: {
        'browserName': 'phantomjs'
      }
};