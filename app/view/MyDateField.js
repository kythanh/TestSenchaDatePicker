Ext.define('MyApp.view.MyDateField', {
    extend: 'Ext.field.DatePicker',
    xtype: 'mydatefield',
    name: 'mydatefield',
    config: {
        label: 'Date',
        labelWrap: true,
        placeHolder: 'dd/mm/YYYY',
        dateFormat: 'dd/mm/YYYY',
 
        picker: {
            value:  null,
            slotOrder: [
                'day',
                'month',
                'year'
            ],
            yearFrom: 1950,
            yearTo: 2016
        }
    }
});