module.exports = {
	lintOnSave:false,
    devServer: {
        port: 8888, // 端口号
        host: '172.18.3.4',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/toutiao': {
                target: 'http://v.juhe.cn/',
                ws: true,
                changeOrigin: true
            },
			'/sms': {
			    target: 'http://172.25.0.43:8088/',
			    ws: true,
			    changeOrigin: true
			}
        },  // 配置多个代理
    }
}