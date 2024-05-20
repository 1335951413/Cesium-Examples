/* by jiawanlong*/
var identification = {
    name: "Leaflet"
};
var exampleConfig = {
    "base": {
        name: "1、入门",
        name_en: "base",
        content: {
            "map": {
                name: "1.1、入门",
                name_en: "base",
                content: [
                    {
                        name: "1.1.1、入门",
                        name_en: "1.1.1、入门",
                        thumbnail: "1.1.1、入门.png",
                        fileName: "1.1.1、入门"
                    },
                    {
                        name: "1.1.2、辅助线",
                        name_en: "1.1.2、辅助线",
                        thumbnail: "1.1.2、辅助线.png",
                        fileName: "1.1.2、辅助线"
                    },
                    {
                        name: "1.1.3、光线",
                        name_en: "1.1.3、光线",
                        thumbnail: "1.1.3、光线.png",
                        fileName: "1.1.3、光线"
                    },
                    {
                        name: "1.1.4、相机控件",
                        name_en: "1.1.4、相机控件",
                        thumbnail: "1.1.4、相机控件.png",
                        fileName: "1.1.4、相机控件"
                    },
                    {
                        name: "1.1.5、动画",
                        name_en: "1.1.5、动画",
                        thumbnail: "1.1.5、动画.png",
                        fileName: "1.1.5、动画"
                    },
                    {
                        name: "1.1.6、全屏",
                        name_en: "1.1.6、全屏",
                        thumbnail: "1.1.6、全屏.png",
                        fileName: "1.1.6、全屏"
                    },
                    {
                        name: "1.1.7、帧率",
                        name_en: "1.1.7、帧率",
                        thumbnail: "1.1.7、帧率.png",
                        fileName: "1.1.7、帧率"
                    },
                ]
            },
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
