Ext.define('BM.view.music.MusicGrid',{
    extend: 'Ext.grid.Panel',
    header: false,
    alias: 'widget.musicgrid',
    iconCls: 'icon-grid',
    store: 'music.Musics',
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            iconCls: 'icon-add',
            text: '更新',
            itemId: 'update',
            disabled: true,
            scope: this
        },{
            iconCls: 'icon-delete',
            text: '删除',
            disabled: true,
            itemId: 'delete',
            scope: this,
            handler: this.onDeleteClick
        }]
    }],
    columns: [{
        tdCls: 'x-grid-cell-topic',
        header: "标题",
        dataIndex: 'title',
        flex: 1,
        renderer: "<a>asdasdasasd</a>",
        field: {
            type: 'textfield'
        },
        sortable: true
    },{
        text: "文件路径",
        dataIndex: 'filePath',
        align: 'center',
        width: 500,
        sortable: false
    },{
        text: "时长",
        dataIndex: 'trackLengthAsString',
        align: 'center',
        width: 230,
        sortable: false
    }],
    initComponent: function(){
        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        Ext.apply(this,{
            plugins: [this.editing]
        });
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    onSelectChange: function(selModel, selections){
        this.down('#update').setDisabled(selections.length === 0);
        this.down('#delete').setDisabled(selections.length === 0);
    },
    onDeleteClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
            this.view.refresh();
        }
    }
});


