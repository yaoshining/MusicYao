Ext.define('BM.store.music.Musics',{
    extend: 'Ext.data.Store',
    model: 'BM.model.Music',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        url: 'manager/musics',
        batchActions: true,
        reader: {
            type: 'json',
            successProperty: 'success',
            root: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            root: '',
            encode: false,
            allowSingle: false
        },
        headers: {
          accept:  "application/json;charset=utf-8"
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
            Ext.MessageBox.show({
                title: operation.action,
                msg: operation.resultSet.message,
                icon: Ext.MessageBox.INFO,
                buttons: Ext.MessageBox.OK
            });
        }
    }
});

