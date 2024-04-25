/* by jiawanlong*/
var identification = {
    name: "Leaflet"
};
var exampleConfig = {
    "base": {
        name: "1、基础",
        name_en: "base",
        content: {
            "map": {
                name: "基础",
                name_en: "base",
                content: [{
                    name: "1.1、默认设置",
                    name_en: "1.1、默认设置",
                    thumbnail: "1.1、默认设置.png",
                    fileName: "1.1、默认设置"
                },
                {
                    name: "1.2、颜色",
                    name_en: "1.2、颜色",
                    thumbnail: "1.2、颜色.png",
                    fileName: "1.2、颜色"
                },
                {
                    name: "1.3、坐标、坐标转换",
                    name_en: "1.3、坐标、坐标转换",
                    thumbnail: "1.3、坐标、坐标转换.png",
                    fileName: "1.3、坐标、坐标转换"
                },
                {
                    name: "1.4、屏幕、场景、地表坐标",
                    name_en: "1.4、屏幕、场景、地表坐标",
                    thumbnail: "1.4、屏幕、场景、地表坐标.png",
                    fileName: "1.4、屏幕、场景、地表坐标"
                },
                {
                    name: "1.5、相机",
                    name_en: "1.5、相机",
                    thumbnail: "1.5、相机.png",
                    fileName: "1.5、相机"
                },
                {
                    name: "1.15、罗盘、导航条",
                    name_en: "1.15、罗盘、导航条",
                    thumbnail: "1.15、罗盘、导航条.png",
                    fileName: "1.15、罗盘、导航条"
                },
                // {
                //     name: "相机",
                //     name_en: "相机",
                //     thumbnail: "1.5、相机.png",
                //     fileName: "1.5、相机"
                // },
                // {
                //     name: "事件",
                //     name_en: "事件",
                //     thumbnail: "1.6、事件",
                //     fileName: "1.6、事件"
                // }
                
                
            ]
            },
        }
    },
    "iPortal": {
        name: "2、图层",
        name_en: "layer",
        content: {
            "map1": {
                name: "影像",
                name_en: "tiles",
                content: [{
                    name: "单张图片",
                    name_en: "单张图片",
                    thumbnail: "2.1.1、img.png",
                    fileName: "2.1.1、img"
                },
                {
                    name: "xyz服务",
                    name_en: "xyz服务",
                    thumbnail: "2.1.2、xyz.png",
                    fileName: "2.1.2、xyz"
                },
                ]
            },
            // "map2": {
            //     name: "矢量",
            //     name_en: "shp",
            //     content: [{
            //         name: "test",
            //         name_en: "test",
            //         thumbnail: "test.png",
            //         fileName: "test"
            //     },
            //     {
            //         name: "test2",
            //         name_en: "test2",
            //         thumbnail: "test2.png",
            //         fileName: "test2"
            //     }]
            // },
        }
    },
};


/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "base": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "dynamicPlot": "fa-pencil",
    "control": "fa-sliders",
    "components": "fa-window-restore",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "base": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "dynamicPlot": "fa-pencil",
    "control": "fa-sliders",
    "components": "fa-window-restore",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};
window.leafletExampleConfig = exampleConfig;
