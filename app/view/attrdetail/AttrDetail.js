Ext.define('AttributeUI.view.attrdetail.AttrDetail', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.attrdetail',

    controller: 'attrdetail',

    layout: 'hbox',

    title: "Detail",

    initComponent: function(){
        me = this;
        this.dockedItems = [
        ];
    	this.items = [
    		{
    			xtype: 'panel',
                title: "Detail",
                flex: 1,
                height: '100%',
                layout: 'anchor',
    			scrollable: true,
    			items: [
                    {
                        xtype: 'form',
                        reference: 'attrDetailForm',
                        anchor: '100% 100%',
                        bodyPadding: 20,
                        scrollable: true,
                        items: [
                            /*{
                                xtype: 'numberfield',
                                reference: 'pkNumberfield',
                                fieldLabel: 'Definitions_PK',
                                name: 'setFieldDefinitions_PK',
                                allowBlank: true,
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false
                            },*/
                            {
                                xtype: 'textfield',
                                reference: 'nameTextField',
                                fieldLabel: 'Name',
                                name: 'name',
                                msgTarget: 'under',
                                allowBlank: false
                            },
                            {
                                xtype: 'textfield',
                                reference: 'labelTextField',
                                fieldLabel: 'Label',
                                name: 'label',
                                allowBlank: true
                            },
                            {
                                xtype: 'combobox',
                                reference: 'xtypeField',
                                name: 'xtype',
                                fieldLabel: 'Xtype',
                                multiSelect: false,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: 'setbuttonfield',
                                            displayField: 'setbuttonfield'
                                        },
                                        {
                                            valueField: 'setcheckboxfield',
                                            displayField: 'setcheckboxfield'
                                        },
                                        {
                                            valueField: 'setcomboboxfield',
                                            displayField: 'setcomboboxfield'
                                        },
                                        {
                                            valueField: 'setnumberfield',
                                            displayField: 'setnumberfield'
                                        },
                                        {
                                            valueField: 'setradiofield',
                                            displayField: 'setradiofield'
                                        },
                                        {
                                            valueField: 'setsegmentedbuttonfield',
                                            displayField: 'setsegmentedbuttonfield'
                                        },
                                        {
                                            valueField: 'settablefield',
                                            displayField: 'settablefield'
                                        },
                                        {
                                            valueField: 'settextfield',
                                            displayField: 'settextfield'
                                        },
                                        {
                                            valueField: 'setthreestatebuttonfield',
                                            displayField: 'setthreestatebuttonfield'
                                        },
                                        {
                                            valueField: 'setlistfield',
                                            displayField: 'setlistfield'
                                        }
                                    ]
                                },
                                displayField: 'displayField',
                                valueField: 'valueField',
                                msgTarget: 'under',
                                allowBlank: false
                            },
                            {
                                xtype: 'tagfield',
                                reference: 'rolesTagField',
                                name: 'roles',
                                fieldLabel: 'Roles',
                                multiSelect: true,
                                queryMode: 'local',
                                store: {
                                    data: [
                                        {
                                            valueField: "se",
                                            displayField: 'ROLE_SE'
                                        },
                                        {
                                            valueField: "ccm",
                                            displayField: 'ROLE_CCM'
                                        },
                                        {
                                            valueField: "tde",
                                            displayField: 'ROLE_TDE'
                                        },
                                        {
                                            valueField: "vsc",
                                            displayField: 'ROLE_VSC'
                                        },
                                        {
                                            valueField: "prov",
                                            displayField: 'ROLE_PROV'
                                        },
                                        {
                                            valueField: "np&i",
                                            displayField: 'ROLE_NPI'
                                        },
                                        {
                                            valueField: "all",
                                            displayField: 'ROLE_ALL'
                                        }
                                    ]
                                },
                                displayField: 'displayField',
                                valueField: 'valueField',
                                msgTarget: 'under',
                                allowBlank: false
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'requiredField',
                                name: 'required',
                                fieldLabel: 'Required',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'hiddenField',
                                name: 'hidden',
                                fieldLabel: 'Hidden',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'isDependentField',
                                name: 'isDependent',
                                fieldLabel: 'Is Dependent',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'isQuoteAttributeField',
                                name: 'isQuoteAttribute',
                                fieldLabel: 'Is Quote Attribute',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'checkboxfield',
                                reference: 'checkroleforinitiallyhiddenField',
                                name: 'checkroleforinitiallyhidden',
                                fieldLabel: 'Check Role for Initially Hidden',
                                inputValue: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'textareafield',
                                reference: 'configTextField',
                                fieldLabel: 'Config (JSON)',
                                name: 'config',
                                grow: true,
                                allowBlank: true
                            },
                            {
                                xtype: 'textareafield',
                                reference: 'itemsTextField',
                                fieldLabel: 'Items (server response, non-editable)',
                                name: 'items',
                                grow: true,
                                allowBlank: true,
                                editable: false,
                                hidden: true,
                                listeners: {
                                    change: 'onItemsChange'
                                }
                            },
                            {
                                xtype: 'fieldcontainer',
                                reference: 'itemsEditFieldContainer',
                                id: 'itemsEditFieldContainer',
                                fieldLabel: 'Items Edit',
                                name: 'itemsedit',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Default Value',
                                        reference: 'defaultValueTextfield',
                                        allowBlank: true
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Name',
                                                labelWidth: 50,
                                                allowBlank: true
                                            },
                                            {
                                                xtype: 'splitter',
                                                width: 30
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Label',
                                                labelWidth: 50,
                                                allowBlank: true
                                            },
                                            {
                                                xtype: 'tbspacer',
                                                width: 30
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Copy Name->Label',
                                                handler: 'onNameToLabelClick'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Add Name-Label Pair',
                                        handler: 'onAddPairButtonClick'
                                    }
                                ],
                                listeners: {
                                    refresh: 'onItemsEditRefresh'
                                }
                            },
                            /*{
                                xtype: 'textfield',
                                reference: 'createdByTextField',
                                fieldLabel: 'Create By',
                                name: 'createdBy',
                                allowBlank: true
                            },
                            {
                                xtype: 'textfield',
                                reference: 'modifiedByTextField',
                                fieldLabel: 'Modified By',
                                name: 'modifiedBy',
                                allowBlank: true
                            },*/
                            {
                                xtype: 'numberfield',
                                reference: 'versionNumberfield',
                                fieldLabel: 'Version',
                                name: 'version',
                                maxValue: 10,
                                minValue: 1,
                                value: 1,
                                editable: false,
                                allowBlank: true,
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false
                            }
                        ],
                        buttons: [
                            {
                                text: 'Reset',
                                reference: 'resetButton',
                                formBind: false,
                                handler: 'onResetButtonClick'
                            },
                            {
                                text: 'Delete',
                                reference: 'deleteButton',
                                formBind: false,
                                handler: 'onDeleteButtonClick'
                            },
                            {
                                text: 'Show JSON',
                                reference: 'showJsonButton',
                                formBind: false,
                                handler: 'onshowJsonButtonClick'
                            },
                            {
                                text: 'Create',
                                reference: 'upsertButton',
                                formBind: true,
                                handler: 'onUpsertButtonClick'
                            }
                        ]
                    }
                ]
    		},
            {
                xtype: 'panel',
                title: 'JSON',
                reference: 'jsonPanel',
                flex: 1,
                height: '100%',
                layout: 'fit',
                items: [
                    {
                        xtype: 'component',
                        reference: 'jsonPanelCmpt',
                        id: 'jsonPanelCmpt',
                        scrollable: true,
                        padding: '10 10 10 15',
                        border: '0 0 0 2',
                        style: {
                            borderColor: '#66ccff',
                            borderStyle: 'solid'
                        },
                        html: '<h3>Use "Show JSON" button to display JSON of current attribute.</h3>',
                        listeners: {
                            refresh: 'onJsonPanelCmptRefresh'
                        }
                    }
                ]
            }
    	];

    	this.callParent(arguments);
    },

    listeners: {
    	afterrender: 'onAfterRender',
        resize: 'onResize',
        refresh: 'refreshFormPanel'
    }

});