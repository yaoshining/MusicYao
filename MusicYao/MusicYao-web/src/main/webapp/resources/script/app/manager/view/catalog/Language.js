Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'resources/script/extjs/src/ux/');
Ext.require([
    'Ext.ux.form.SearchField'
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
        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        
        Ext.apply(this,{
            iconCls: 'icon-grid',
            frame: true,
            plugins: [this.editing],
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: 'Add',
                    scope: this,
                    handler: this.onAddClick
                },{
                    iconCls: 'icon-delete',
                    text: 'Delete',
                    disabled: true,
                    itemId: 'delete',
                    scope: this,
                    handler: this.onDeleteClick
                }]
            }]
        });
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
    },
    onDeleteClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
//            this.store.remove(selection);
        }
    },
    onAddClick: function(){
        var rec = new Writer.Language({
            name: '',
            createuser: '',
            createtime: '',
            modifytime:''
        }), edit = this.editing;

        edit.cancelEdit();
//        this.store.insert(0, rec);
        edit.startEditByPosition({
            row: 0,
            column: 1
        });
    },
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        sortable: false
    },{
        tdCls: 'x-grid-cell-topic',
        header: "语言种类",
        dataIndex: 'name',
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
Ext.define('Writer.Language',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
        useNull: true
    }, 'name', 'createuser', 'createtime','modifytime'],
    validations: [{
        type: 'length',
        field: 'email',
        min: 1
    }, {
        type: 'length',
        field: 'first',
        min: 1
    }, {
        type: 'length',
        field: 'last',
        min: 1
    }]
});

