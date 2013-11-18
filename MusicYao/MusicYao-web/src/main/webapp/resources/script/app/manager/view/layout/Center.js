Ext.define('BM.view.layout.Center',{
    extend: 'Ext.ux.GroupTabPanel',
    alias: 'widget.center',
    region: 'center',
    activeGroup: 0,
    items: [{
        mainItem: 1,
        items: [{
            title: '语言分类',
            xtype: 'languagegrid',
            iconCls: 'x-icon-configuration'
        },{
            title: '歌曲类别管理'
        },{
            title: '456'
        }]
    },{
        mainItem: 0,
        expanded: true,
        items:[{
            title: '音乐管理'
        },{
            title: '音乐上传',
            iconCls: 'x-icon-templates',
            style: 'padding: 10px;',
            border: false,
            items: [{
                xtype: 'uploadform'
            }]
        },{
            title: '属性维护',
            xtype: 'musicgrid',
            style: 'padding: 10px;',
            border: false,
            iconCls: 'x-icon-templates'
        }]
    }]
});


