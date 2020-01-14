/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security : {
      csrf : {
        enable: false,// 自定义请求头
      }
    }
  };

  config.cluster = {
    listen: {
      path: '',
      port: 80,
      hostname: '127.0.0.1',
    }
  };

 
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573888919592_1884';

  // add your middleware config here
  config.middleware = [];


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  return config;
};
