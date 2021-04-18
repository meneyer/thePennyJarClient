const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
            lessOptions: {
                modifyVars: { '@primary-color': '#ad6800' },
                javascriptEnabled: true,
            },
            },
        },
        },
    ],
};