//promisify可以将旧的回调语法转换成新的asyn和Promise语法
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.green(content));
const { clone } = require('./download.js');
// 打开浏览器

const open = require('open');

const spawn = async (...args) => {
    const { spawn } = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve();
        });
    });
}
module.exports = async name => {
    // Welcome Page
    clear();
    const data = await figlet('Welcome JXZ');
    log(data);
    log('🚀 Creating Project named as ' + name);
    await clone('github:su37josephxia/vue-template', name);
    // 子进程自动 执行 npm， 为项目添加依赖
    await spawn('npm', ['install'], { cwd: `./${name}` });
    log(`
✅ Installation Complete
To Get Start
========================
    cd ${name}
    npm run serve
========================
    `);
    // 端口占用问题
    open('http://localhost:8081');
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` });
}