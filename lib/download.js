const { promisify } = require('util');
module.exports.clone = async (repo, desc) => {
    const download = promisify(require('download-git-repo'));
    // 下载需要时间，所以需要显示进度条
    const ora = require('ora');
    const process = ora(`Downloading...${repo}`);
    // 显示进度条
    process.start();
    await download(repo, desc);
    // 显示任务结束的对号
    process.succeed();
}