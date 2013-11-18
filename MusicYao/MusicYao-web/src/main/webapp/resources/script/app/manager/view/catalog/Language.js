Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'resources/script/extjs/src/ux/');
Ext.require([
    'Ext.ux.form.SearchField',
    'Ext.window.MessageBox',
    'Ext.data.*',
    'Ext.grid.column.RowNumberer'
]);
Ext.define('BM.view.catalog.Language',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.languagegrid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
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
    initComponent: function() {
        this.editing = Ext.create('Ext.grid.plugin.CellEditing',{
//            clicksToEdit: 1
        });
//        Ext.override(Ext.grid.column.RowNumberer, {
//
//            renderer: function(value, metaData, record, rowIdx, colIdx, store) {
//                var rowspan = this.rowspan;
//                if (rowspan){
//                    metaData.tdAttr = 'rowspan="' + rowspan + '"';
//                }
//
//                metaData.tdCls = Ext.baseCSSPrefix + 'grid-cell-special';
//
//                console.log(store.indexOfTotal(record));
//                console.log(store.getTotalCount());
//                console.log(store.data.items.length);
//                console.log(record);
//                console.log('**');
//
//                return store.indexOfTotal(record) + 1;
//            }
//        });
        Ext.apply(this,{
            iconCls: 'icon-grid',
            frame: true,
            plugins: [this.editing],
            store: 'catalog.Languages',
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: '添加',
                    scope: this,
                    handler: this.onAddClick
                },{
                    iconCls: 'icon-delete',
                    text: '删除',
                    disabled: true,
                    itemId: 'delete',
                    scope: this,
                    handler: this.onDeleteClick
                }]
            },{
                weight: 1,
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: ['->', {
                    iconCls: 'icon-save',
                    text: '同步',
                    scope: this,
                    handler: this.onSync
                }]
            }],
            columns: [{
                xtype: 'rownumberer',
                width: 50,
                align: 'center',
                header: '序号',
                resizable: false,
                menuDisabled: true
            },{
                tdCls: 'x-grid-cell-topic',
                header: "语言种类",
                dataIndex: 'name',
                flex: 1,
                renderer: "<a>asdasdasasd</a>",
                field: {
                    type: 'textfield'
                },
                sortable: true
            },{
                text: "创建者",
                dataIndex: 'createUser',
                align: 'center',
                width: 100,
                sortable: false
            },{
                text: "创建时间",
                dataIndex: 'createTime',
                align: 'center',
                width: 230,
                renderer: Ext.util.Format.dateRenderer('Y-m-d H:i'),
                sortable: false
            },{
                id: 'last',
                text: "最后修改时间",
                dataIndex: 'modifyTime',
                align: 'center',
                width: 230,
                renderer: Ext.util.Format.dateRenderer('Y-m-d H:i'),
                sortable: false
            }]
        });
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    onSync: function(){
        this.store.sync();
    },
    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
    },
    onDeleteClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
            this.view.refresh();
        }
    },
    onAddClick: function(){
        var rec = new BM.model.Language({
            name: '',
            createUser: UserContext.username,
            createTime: new Date(),
            modifyTime: new Date()
        }), edit = this.editing;

        edit.cancelEdit();
        this.store.insert(0, rec);
        this.getView().refresh(false);
        edit.startEditByPosition({
            row: 0,
            column: 1
        });
    }
});