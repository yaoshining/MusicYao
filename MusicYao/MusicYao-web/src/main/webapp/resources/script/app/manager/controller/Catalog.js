Ext.define('BM.controller.Catalog',{
        extend: 'Ext.app.Controller',
        models: [
            'Language'
        ],
        views: [
            'catalog.Language'
        ],
        stores: [
            'catalog.Languages'
        ]
});


