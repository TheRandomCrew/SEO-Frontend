{
    title: 
        {
            type: String,
            default: 'Analisis SEO'
        },    
    article:
        {
            type: Object,
            description: 'JSON with vital Info to be analyzed.',
            content: 
                {
                    title: Array,
                    meta: Array,
                    text: String,
                    textHtml: String
                }
            default: 
                {
                    title: [],
                    meta: [],
                    text: '',
                    textHtml: ''
                }
        },
    getItem:
        {
            type: fn,
            variables: 
                [
                    {
                        name:  'article',
                        type: Object,
                        description: 'JSON with vital Info to be analyzed.',
                        content: 
                            {
                                title: Array,
                                meta: Array,
                                text: String,
                                textHtml: String
                            }
                        default: 
                            {
                                title: [],
                                meta: [],
                                text: '',
                                textHtml: ''
                            }
                    }
                    {
                        name: 'type',
                        type: String,
                        description: 'Each Item tell something about Article. Each aspect is identified by a unique id string.'
                    }
                ],
            items:
                {
                    type:Array,
                    content: [{status:String, text: String, id: Number}],
                    default: [{status: 'green', text: 'Todo OK', id: 0}]
                    ContainerStyle: Object,
                    ResumenStyle: Object,
                    BadgeStyle: Object,
                    ItemStyle: Object
                },
            return: 
                {
                    type: Object,
                    description: 'The Item desired. As: {status:String, text: String, id: Number}'
                }
        },
    styles:
        {
            type: Object,
            content:
                [
                    container: Object,
                    title: Object,
                    resumen: Object,
                    item: Object,
                    item: Object,
                    badge: Object,
                    text: Object
                ]
        }
}