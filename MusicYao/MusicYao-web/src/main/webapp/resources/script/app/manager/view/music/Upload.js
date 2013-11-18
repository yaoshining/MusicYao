Ext.define('BM.view.music.Upload',{
    extend: 'Ext.form.Panel',
    alias: 'widget.uploadform',
    title: '音乐上传',
    bodyPadding: '10 10 0',
    bodyStyle: 'padding:15px',
    labelWidth: 75,
    labelPad: 20,
    border: false,
    
    url: 'manager/musics/upload',
    defaultType: 'textfield',
    defaults: {
        width: 330,
        labelSeparator: '',
        msgTarget: 'side'
    },
    items: [{
            fieldLabel: '标题',
            name: 'title',
            allowBlank: false,
            emptyText: '请输入音乐的标题'
    },{
        xtype: 'combobox',
        fieldLabel: '语言',
        name: 'languageId',
        emptyText: '请选择语言',
        store: 'catalog.Languages',
        displayField: 'name',
        valueField: 'id'
    },{
        xtype: 'filefield',
        fieldLabel: '音乐文件',
        name: 'musicfile',
        allowBlank: false,
        emptyText: '请选择要上传的文件',
        listeners:{
            afterrender:function(cmp){
              cmp.fileInputEl.set({
                accept:'audio/*'
              });
            }
        },
        buttonText: '',
        buttonConfig: {
            iconCls: 'upload-icon'
        }
    },{
        xtype: 'filefield',
        fieldLabel: '专辑图片',
        name: 'posterfile',
        allowBlank: false,
        emptyText: '请选择要上传的图片',
        buttonText: '',
        listeners:{
            afterrender:function(cmp){
              cmp.fileInputEl.set({
                accept:'image/*'
              });
            }
        },
        buttonConfig: {
            iconCls: 'upload-icon'
        }
    }],
    buttons: [{
        text: '保存',
        handler: function(){
            var form = this.up('form').getForm();
            if(form.isValid()){
                form.submit({
//                    url: 'file-upload.php',
                    waitMsg: '正在上传音乐文件...',
                    success: function(fp, o) {
                        Ext.Msg.show({
                            title: '上传成功',
                            msg: tpl.apply(o.result),
                            minWidth: 200,
                            modal: true,
                            icon: Ext.Msg.INFO,
                            buttons: Ext.Msg.OK
                        });
                        form.reset();
                    }
                });
            }
        }
    }, {
        text: '重置',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }]
});


