Ext.application({
    requires: [
        'Ext.container.Viewport'
    ],
    name: "BM",
    appFolder: 'resources/script/app/manager',
    controllers: ['Layout','Catalog','Music'],
    launch: function() {
        gauge.modify(document.getElementById("init-progress"),{values:[0.6,1]});
        document.getElementById('loading-msg').innerHTML = '初始化...';
        Ext.create("Ext.container.Viewport",{
            id: "viewport",
            layout: "border",
            items: [
                {
                    xtype: "north"
                },{
                    xtype: "center"
                }
            ]
        });
        gauge.modify(document.getElementById("init-progress"),{values:[1,1]});
        gauge.modify(document.getElementById("init-progress"),{busy:true});
        var hideMask = function () {
            Ext.get('loading').remove();
            Ext.fly('loading-mask').animate({
                opacity:0,
                remove:true,
                callback: function(){

                }
            });
        };
        Ext.defer(hideMask, 250);
    }
});


