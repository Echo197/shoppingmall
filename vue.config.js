module.exports = {
    configureWebpack: {
        resolve: {
            // 配置别名
            alias: {
                'views': '@/views',
                'components': '@/components',
                'assets': "@/assets",
                'network': "@/network",
                'common': '@/common',
            }
        }
    }
}