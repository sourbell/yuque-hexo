module.exports = {
  write: {
    platform: 'yuque-pwd',
    // Token 模式（需要语雀超级会员）
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    // 账号密码模式
    "yuque-pwd": {
      username: secrets.YUQUE_USERNAME,
      password: secrets.YUQUE_PASSWORD,
      login: secrets.YUQUE_LOGIN,
      repo: secrets.YUQUE_REPO,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './source/_posts',
      filename: 'title',
      format: 'markdown',
      catalog: false,
      frontMatter: {
        enable: true,
        include: ['categories', 'tags', 'title', 'date', 'updated'],
      },
      formatExt: './format.js',
    }
  },
  image: {
    enable: true,
    platform: 'qiniu',
    qiniu: {
      secretId: secrets.QINIU_SECRET_ID,
      secretKey: secrets.QINIU_SECRET_KEY,
      bucket: secrets.QINIU_BUCKET,
      host: secrets.QINIU_HOST,
      prefixKey: '',
    }
  },
}
