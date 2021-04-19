const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
            lessOptions: {
                modifyVars: { '@primary-color': '#9c7957' },
                javascriptEnabled: true,
            },
            },
        },
        },
    ],
};