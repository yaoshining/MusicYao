Ext.define('BM.controller.Music',{
    extend: 'Ext.app.Controller',
    models: [
        'Music'
    ],
    views: [
        'music.Upload',
        'music.MusicGrid'
    ],
    stores: [
        'catalog.Languages',
        'music.Musics'
    ]
});


