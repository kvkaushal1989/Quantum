export const MENU = [{
    Id: 'GF001',
    Name: 'Settings',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/Settings',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Administrator Panel',
        Url: '/AdministratorPanel',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Alert And Notifications',
        Url: '/AlertAndNoti',
        Code: 'GF20ST002',
        Icon: 'icon-alert-notification',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Carrier',
        Url: '/Carrier',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'ClauseMaster',
        Url: '/ClauseMaster',
        Code: 'GF20ST001',
        Icon: 'icon-ClauseMaster',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Commodity',
        Url: '/Commodity',
        Code: 'GF20ST001',
        Icon: 'icon-Commodity',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Country',
        Url: '/Country',
        Code: 'GF20ST001',
        Icon: 'icon-Country',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Organisation',
        Url: '/Organisation',
        Code: 'GF20ST001',
        Icon: 'icon-Organization',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Process Management',
        Url: '/ProcessManagement',
        Code: 'GF20ST001',
        Icon: 'icon-ProcessManagement',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Rules Management',
        Url: '/RulesAndPreferences',
        Code: 'GF20ST001',
        Icon: 'icon-SequenceNumbering',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Sequence Numbering',
        Url: '/SequenceNumbering',
        Code: 'GF20ST001',
        Icon: 'icon-SequenceNumbering',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'SystemUsers',
        Url: '/SystemUsers',
        Code: 'GF20ST001',
        Icon: 'icon-SystemUsers',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Vessel Operations',
        Url: '/VesselOperations',
        Code: 'GF20ST001',
        Icon: 'icon-SystemUsers',
        ImageUrl: '../assets/images/logo.png',
        Children: [{
            Name: 'Vessel Operations',
            Url: '/VesselOperations/VesselOperations',
            Code: 'GF20ST001',
            Icon: 'icon-SystemUsers',
            ImageUrl: '../assets/images/logo.png'
        }]
    },
    {
        Name: 'Quotations',
        Url: '/Quotation',
        Code: 'GF20ST001',
        Icon: 'icon-SystemUsers',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Cargo List',
        Url: '/TerminalOperations',
        Code: 'GF20ST001',
        Icon: 'icon-SystemUsers',
        ImageUrl: '../assets/images/logo.png',
        Children: [{
            Name: 'Cargo List',
            Url: '/CargoList',
            Code: 'GF20ST001',
            Icon: 'icon-SystemUsers',
            ImageUrl: '../assets/images/logo.png'
        },
        {
            Name: 'Bunker Report',
            Url: '/BunkerReport',
            Code: 'GF20ST001',
            Icon: 'icon-SystemUsers',
            ImageUrl: '../assets/images/logo.png'
        },
        {
            Name: 'Terminal Operation Report',
            Url: '/TerminalReport',
            Code: 'GF20ST001',
            Icon: 'icon-SystemUsers',
            ImageUrl: '../assets/images/logo.png'
        }
    ]
    }, {
        Name: 'Messaging Center',
        Url: '/MessagingCenter',
        Code: 'GF20ST001',
        Icon: 'icon-SystemUsers',
        ImageUrl: '../assets/images/logo.png'
    },
    ]
}, {
    Id: 'GF002',
    Name: 'Form Controls',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/form-controls',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Common Controls',
        Url: '/formcontrols',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Auto Complete',
        Url: '/auto-complete',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Tables',
        Url: '/tables',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Text Input',
        Url: '/text-input',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Select List',
        Url: '/select-lists',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }
    ]
}, {
    Id: 'GF003',
    Name: 'Vessel Operations',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/VesselOperations',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Asset List',
        Url: '/Assets',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Barge',
        Url: '/Assets/Barge',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Containers',
        Url: '/Assets/ContainerType',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Fixed Cost',
        Url: '/FixedCost',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'New Service',
        Url: '/Assets/NewService',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Operational Schedule',
        Url: '/Scheduling/OperationalSchedule',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Route Generator',
        Url: '/Route',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Service Listing',
        Url: '/Assets/ServiceListing',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Tug',
        Url: '/Assets/Tug',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Terminal Configuration',
        Url: '/Assets/TerminalConfiguration',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Vessel',
        Url: '/Assets/Vessel',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Voyage Control',
        Url: '/Scheduling/VoyageControlSheet',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'View Schedule',
        Url: '/Scheduling/ViewSchedule',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Bunker Report',
        Url: '/TerminalOperations/BunkerReport',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Terminal Operation Report',
        Url: '/TerminalOperations/TerminalReport',
        Code: 'GF20ST003',
        Icon: 'icon-carrier',
        ImageUrl: '../assets/images/logo.png'
    }
    ]
}, {
    Id: 'GF004',
    Name: 'Scheduling',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/Scheduling',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Route Generator',
        Url: '/Route',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Operational Schedule',
        Url: '/OperationalSchedule',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'VCS Rules',
        Url: '/VoyageControlSheet',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }
    ]
},
{
    Id: 'GF005',
    Name: 'Quotations',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/Settings/Quotation',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Create Quotation',
        Url: '/Quotation',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Quotation Listing',
        Url: '/ContractManagement',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }, {
        Name: 'Quotation Settings',
        Url: '/ContractSettings',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }
    ]
},
{
    Id: 'GF006',
    Name: 'ContractManagement',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/ContractManagement',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Tariff',
        Url: '/Tariff',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Customer Profile',
        Url: '/CustomerMaster',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Charge Master',
        Url: '/ChargeMaster',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Expense Agreement',
        Url: '/ExpenseAgreement',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'View Expense Agreements',
        Url: '/ViewExpenseAgreement',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }
    ]
},
{
    Id: 'GF007',
    Name: 'AccountReceivable',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/AccountReceivable',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Exchange Rate',
        Url: '/ExchangeRate',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Days Sales Report',
        Url: '/DailySaleReport',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Revenue Report',
        Url: '/RevenueReport',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Ageing Report',
        Url: '/AgeingReport',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Statement Of Account',
        Url: '/StatementOfAccount',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Invoice Rules',
        Url: '/InvoiceRules',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Invoicing',
        Url: '/Invoicing',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Collections',
        Url: '/Collections',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    {
        Name: 'Outstanding Report',
        Url: '/OutstandingReport',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    },
    ]
},{
    Id: 'GF008',
    Name: 'OrderManagement',
    Icon: 'icon-Configuration',
    IsExpand: false,
    Url: '/OrderManagement',
    ImageUrl: '../assets/images/logo.png',
    IsDisplay: true,
    Children: [{
        Name: 'Commercial Schedule',
        Url: '/CommercialSchedule',
        Code: 'GF20ST001',
        Icon: 'icon-admin',
        ImageUrl: '../assets/images/logo.png'
    }
    ]
  }
];
