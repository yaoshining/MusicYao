Ext.define('BM.view.layout.Center',{
    extend: 'Ext.ux.GroupTabPanel',
    alias: 'widget.center',
    region: 'center',
    activeGroup: 0,
    items: [{
        mainItem: 1,
        items: [{
            title: '语言分类',
            xtype: 'languagegrid'
        },{
            title: '歌曲类别管理'
        },{
            title: '456'
        }]
    }]
});


