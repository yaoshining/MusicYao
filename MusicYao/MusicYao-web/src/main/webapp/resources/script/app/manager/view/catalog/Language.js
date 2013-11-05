Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'resources/script/extjs/src/ux/');
Ext.require([
    'Ext.ux.form.SearchField'
]);
Ext.define('BM.view.catalog.Language',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.languagegrid',
//    dockedItems: [{
//        dock: 'top',
//        xtype: 'toolbar',
//        items: [{
//            width: 400,
//            fieldLabel: 'Search',
//            labelWidth: 50,
//            xtype: 'searchfield',
//            store: [{title:'1',createuser:'asdasd',createtime: '2012-12-12',modifytime: '2012-12-11'}]
//        }, '->', {
//            xtype: 'component',
//            itemId: 'status',
//            tpl: 'Matching threads: {count}',
//            style: 'margin-right:5px'
//        }]
//    }],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        sortable: false
    },{
        tdCls: 'x-grid-cell-topic',
        text: "语言种类",
        dataIndex: 'title',
        flex: 1,
        renderer: "<a>asdasdasasd</a>",
        sortable: false
    },{
        text: "创建者",
        dataIndex: 'createuser',
        width: 100,
        sortable: false
    },{
        text: "创建时间",
        dataIndex: 'createtime',
        align: 'center',
        width: 70,
        sortable: false
    },{
        id: 'last',
        text: "最后修改时间",
        dataIndex: 'modifytime',
        width: 130,
        renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
        sortable: false
    }]
});


