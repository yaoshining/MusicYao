Ext.define('BM.model.Music',{
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
        useNull: true
    }, 'title', 'filePath', 'trackLengthAsString','language'],
    validations: [{
        type: 'length',
        field: 'title',
        min: 1
    }]
});