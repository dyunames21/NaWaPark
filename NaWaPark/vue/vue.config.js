const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: "../src/main/resources/static",

    devServer: {
        port: 8081,
        proxy:{
            '/':{
                target: 'http://localhost:8080',
                changeOrigin:true, 
                ws: false
            }
        }
    },

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    }
})
