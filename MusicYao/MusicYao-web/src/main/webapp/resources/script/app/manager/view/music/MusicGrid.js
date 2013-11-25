Ext.define('BM.view.music.MusicGrid',{
    extend: 'Ext.grid.Panel',
    header: false,
    alias: 'widget.musicgrid',
    id: "musicGrid",
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
        text: "专辑图片",
        tdCls: 'tdValign',
        align: "center",
        xtype: 'templatecolumn',
        tpl: '<img src="music/poster/{id}.jpg" width="100" />',
        width: 200
    },{
        tdCls: 'x-grid-cell-topic tdValign',
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
        tdCls: 'tdValign',
        dataIndex: 'filePath',
        align: 'center',
        width: 500,
        sortable: false
    },{
        text: "时长",
        tdCls: 'tdValign',
        dataIndex: 'trackLengthAsString',
        align: 'center',
        width: 230,
        sortable: false
    }],
    initComponent: function(){
        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        var contextMenu = Ext.create("Ext.menu.Menu",{
            items: [{
                id: 'updatePosterWindow',
                text: '更新专辑图片'
            }],
            listeners: {
                click: function(menu,item) {
                    var gridSelected = Ext.getCmp("musicGrid").getSelectionModel().getSelection()[0];
                    switch(item.id){
                        case "updatePosterWindow":
                            Ext.create('Ext.window.Window', {
                                title: '更新专辑图片',
                                height: 440,
                                layout:"fit",
                                width: 410,
                                modal: true,
                                items: [{
                                    xtype: 'form',
                                    url: 'manager/musics/poster/'+gridSelected.get("id"),
                                    border: false,
                                    items: [{
                                        xtype: 'filefield',
                                        buttonOnly: true,
                                        name: 'posterFile',
                                        buttonText: '',
                                        border: false,
                                        buttonConfig: {
                                            id: 'submitButton',
                                            style: {
                                                width: "400px",
                                                height: "400px",
                                                display: "block",
                                                background: Ext.String.format("url(music/poster/{0}.jpg)",gridSelected.get("id")),
                                                backgroundSize: "cover"
                                            }
                                        },
                                        listeners: {
                                            afterrender:function(cmp){
                                                cmp.fileInputEl.set({
                                                    accept:'image/*'
                                                });
                                            },
                                            change: function(cmp,value,eOpts) {
                                                if(value && value!="") {
                                                    var form = cmp.up('form').getForm();
                                                    form.submit({
                                                        waitMsg: '正在上传专辑图片...',
                                                        success: function(fp, o) {
                                                            Ext.Msg.show({
                                                                title: '上传成功',
                                                                msg: o.result,
                                                                minWidth: 200,
                                                                modal: true,
                                                                icon: Ext.Msg.INFO,
                                                                buttons: Ext.Msg.OK
                                                            });
                                                            form.reset();
                                                            Ext.getCmp("submitButton").show();
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    }]
                                }]
                            }).show();
                            break;
                    }
                }
            }
        });
        Ext.apply(this,{
            plugins: [this.editing],
            viewConfig: {
                listeners: {
                    itemcontextmenu: function(cmp,record,item,index,e,eOpts){
                        e.stopEvent();
                        contextMenu.showAt(e.xy);
                    }
                }
            }
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


