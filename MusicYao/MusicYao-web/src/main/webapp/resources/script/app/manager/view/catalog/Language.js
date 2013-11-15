Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'resources/script/extjs/src/ux/');
Ext.require([
    'Ext.ux.form.SearchField',
    'Ext.window.MessageBox',
    'Ext.data.*'
]);
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
var store = Ext.create('Ext.data.Store', {
    model: 'Writer.Language',
    data:[
        {
            id: 1,
            name: 'name',
            createuser: 'createuser',
            createtime: '1987-05-06',
            modifytime: '1988-09-09'
        }
    ],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        url: 'manager/languages',
        reader: {
            type: 'json',
            successProperty: 'success',
            root: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.MessageBox.OK
                });
            }
        }
    },
    listeners: {
        write: function(proxy, operation){
            Ext.example.msg(operation.action, operation.resultSet.message);
        }
    }
});
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
            clicksToEdit: 1
        });
        
        Ext.apply(this,{
            iconCls: 'icon-grid',
            frame: true,
            plugins: [this.editing],
            store: store,
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
                dataIndex: 'createuser',
                align: 'center',
                width: 100,
                sortable: false
            },{
                text: "创建时间",
                dataIndex: 'createtime',
                align: 'center',
                width: 230,
                renderer: Ext.util.Format.dateRenderer('Y-m-d H:i'),
                sortable: false
            },{
                id: 'last',
                text: "最后修改时间",
                dataIndex: 'modifytime',
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
        var rec = new Writer.Language({
            name: '',
            createuser: UserContext.username,
            createtime: new Date(),
            modifytime: new Date()
        }), edit = this.editing;

        edit.cancelEdit();
        this.store.insert(0, rec);
        this.view.refresh();
        edit.startEditByPosition({
            row: 0,
            column: 1
        });
    }
});