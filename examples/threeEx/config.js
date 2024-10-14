/* by jiawanlong*/
var identification = {
    name: "Leaflet"
};
var exampleConfig = {
    
    "plot": {
        name: "0、开源导航",
        name_en: "0、开源导航",
        content: {
            "map": {
                name: "友情推荐",
                name_en: "友情推荐",
                content: [
                    {
                        name: "1、优雅永不过时",
                        name_en: "1、优雅永不过时",
                        thumbnail: "1、优雅永不过时.jpg",
                        fileName: "1、优雅永不过时"
                    },
                ]
            },
        }
    },
    
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
                        thumbnail: "1.1.1、入门.jpg",
                        fileName: "1.1.1、入门"
                    },
                    {
                        name: "1.1.2、辅助线",
                        name_en: "1.1.2、辅助线",
                        thumbnail: "1.1.2、辅助线.jpg",
                        fileName: "1.1.2、辅助线"
                    },
                    {
                        name: "1.1.3、光线",
                        name_en: "1.1.3、光线",
                        thumbnail: "1.1.3、光线.jpg",
                        fileName: "1.1.3、光线"
                    },
                    {
                        name: "1.1.4、相机控件",
                        name_en: "1.1.4、相机控件",
                        thumbnail: "1.1.4、相机控件.jpg",
                        fileName: "1.1.4、相机控件"
                    },
                    {
                        name: "1.1.5、动画",
                        name_en: "1.1.5、动画",
                        thumbnail: "1.1.5、动画.jpg",
                        fileName: "1.1.5、动画"
                    },
                    {
                        name: "1.1.6、全屏",
                        name_en: "1.1.6、全屏",
                        thumbnail: "1.1.6、全屏.jpg",
                        fileName: "1.1.6、全屏"
                    },
                    {
                        name: "1.1.7、帧率",
                        name_en: "1.1.7、帧率",
                        thumbnail: "1.1.7、帧率.jpg",
                        fileName: "1.1.7、帧率"
                    },
                    {
                        name: "1.1.8、阵列模型",
                        name_en: "1.1.8、阵列模型",
                        thumbnail: "1.1.8、阵列模型.jpg",
                        fileName: "1.1.8、阵列模型"
                    },
                    {
                        name: "1.1.9、几何体",
                        name_en: "1.1.9、几何体",
                        thumbnail: "1.1.9、几何体.jpg",
                        fileName: "1.1.9、几何体"
                    },
                    {
                        name: "1.1.10、隐藏、删除",
                        name_en: "1.1.10、隐藏、删除",
                        thumbnail: "1.1.10、隐藏、删除.jpg",
                        fileName: "1.1.10、隐藏、删除"
                    },
                    {
                        name: "1.1.11、纹理贴图",
                        name_en: "1.1.11、纹理贴图",
                        thumbnail: "1.1.11、纹理贴图.jpg",
                        fileName: "1.1.11、纹理贴图"
                    },
                    {
                        name: "1.1.12、砖墙贴图",
                        name_en: "1.1.12、砖墙贴图",
                        thumbnail: "1.1.12、砖墙贴图.jpg",
                        fileName: "1.1.12、砖墙贴图"
                    },
                    {
                        name: "1.1.13、UV动画",
                        name_en: "1.1.13、UV动画",
                        thumbnail: "1.1.13、UV动画.jpg",
                        fileName: "1.1.13、UV动画"
                    },
                ]
            },
        }
    },

    "iPortal": {
        name: "2、几何体BufferGeometry",
        name_en: "2、几何体BufferGeometry",
        content: {
            "map": {
                name: "2.1、几何体BufferGeometry",
                name_en: "2.1、几何体BufferGeometry",
                content: [
                    {
                        name: "2.1.1、点、线",
                        name_en: "2.1.1、点、线",
                        thumbnail: "2.1.1、点、线.jpg",
                        fileName: "2.1.1、点、线"
                    },
                    {
                        name: "2.1.2、网格",
                        name_en: "2.1.2、网格",
                        thumbnail: "2.1.2、网格.jpg",
                        fileName: "2.1.2、网格"
                    },
                    {
                        name: "2.1.3、索引",
                        name_en: "2.1.3、索引",
                        thumbnail: "2.1.3、索引.jpg",
                        fileName: "2.1.3、索引"
                    },
                    {
                        name: "2.1.4、旋转、缩放、平移几何体",
                        name_en: "2.1.4、旋转、缩放、平移几何体",
                        thumbnail: "2.1.4、旋转、缩放、平移几何体.jpg",
                        fileName: "2.1.4、旋转、缩放、平移几何体"
                    },
                    {
                        name: "2.1.5、自带几何体顶点",
                        name_en: "2.1.5、自带几何体顶点",
                        thumbnail: "2.1.5、自带几何体顶点.jpg",
                        fileName: "2.1.5、自带几何体顶点"
                    },
                    {
                        name: "2.1.6、顶点颜色",
                        name_en: "2.1.6、顶点颜色",
                        thumbnail: "2.1.6、顶点颜色.jpg",
                        fileName: "2.1.6、顶点颜色"
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
