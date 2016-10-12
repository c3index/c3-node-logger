// log4js-node
// https://github.com/nomiddlename/log4js-node

const log4js = require('log4js');
const fs = require('fs-extra');
const path = require('path');

var logger = log4js.getLogger('log');

// ディレクトリの存在を確認し、ない場合作成する
fs.mkdirsSync('log');

// 設定
log4js.configure({
  appenders: [
    {
      type: 'dateFile',
      category: 'log',
      filename: path.join('log/log'),
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    {
      // ログファイル出力と同時にコンソール出力を行う
      type: 'console'
    }
  ],
  levels: {
    app: 'DEBUG'
  }
});

// アプリケーション情報レベルのログを出力する
exports.info = function (logStr) {
  logger.info(logStr);
};

// エラーレベルのログを出力する
exports.error = function (logStr) {
  logger.error(logStr);
};

// デバッグレベルのログを出力する
exports.debug = function (logStr) {
  logger.debug(logStr);
};
