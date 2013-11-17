Ext.define('BM.model.Language',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
        useNull: true
    }, 'name', 'createUser', 'createTime','modifyTime'],
    validations: [{
        type: 'length',
        field: 'name',
        min: 1
    }]
});


