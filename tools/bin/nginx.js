let shell = require('shelljs')
let path = require('path')

let starts = ''
let stops = ''
if (process.platform === 'win32') {
  shell.cd('tools/nginx-1.12.2')
  starts = 'start nginx'
  stops = 'nginx -s stop'
}else if(process.platform === 'darwin'){
  shell.cd('tools/nginx_darwin')
  starts = 'sudo nginx -c ' + path.join(__dirname, '..', 'nginx_darwin', 'nginx.conf')
  stops = 'sudo nginx -s stop'
}
//osx自行安装配合nginx
if (process.argv[2] && process.argv[2] === 'stop') {
  shell.exec(stops)
} else {
  shell.exec(starts)
}
