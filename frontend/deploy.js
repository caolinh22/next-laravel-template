const fs = require('fs-extra')

fs.emptyDirSync('../server/resources/views')
fs.emptyDirSync('../server/public/_next/')
fs.copySync('.next/server/', '../server/public/_next/server/')
fs.copySync('.next/static/', '../server/public/_next/static/')
fs.copySync('public/images/', '../server/public/images')

fs.readdir('../server/public/_next/server/pages/', function (err, files) {
  files.forEach((file) => {
    if (file.substr(-5) === '.html') {
      filename = file.slice(0, -5)
      const htmlBuild = `.next/server/pages/${filename}.html`
      const bladeCopyToResource = `../server/resources/views/${filename}.blade.php`
      fs.rename(htmlBuild, bladeCopyToResource)
    }
  })
})
console.log('deploy successfully')
