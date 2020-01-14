require('egg').startCluster({
    baseDir: __dirname,
    workers: process.env.WORKERS,
    port: 80
})