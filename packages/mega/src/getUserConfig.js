/**
 * Created Date: Thursday, May 30th 2019, 3:32:32 pm
 * Author: hanjingbo@ysstech.com | jingboup@gmail.com
 * -----
 * Last Modified: Sunday, June 2nd 2019, 7:31:59 pm
 * Modified By: hanjingbo <hanjingbo@ysstech.com | jingboup@gmail.com>
 * -----
 * Copyright (c) 2019-present, #Lugia#.
 * ------------------------------------
 * JavaScript will save your soul!
 */

import { join } from 'path';
import excapeRegExp from 'lodash.escaperegexp';
import getUserConfig from '@lugia/mega-config';
import registerBabel from '@lugia/mega-utils/lib/registerBabel';

process.env.NODE_ENV = 'test';

const CONFIG_FILE_NAME = 'lugia.config.js';

export default function(cwd) {
  registerBabel({
    only: [new RegExp(excapeRegExp(join(cwd, CONFIG_FILE_NAME)))],
    babelPreset: [
      require.resolve('@lugia/babel-preset-mega'),
      {
        corejs: false,
        helpers: false,
      },
    ],
    disablePreventTest: true,
  });

  return getUserConfig({
    cwd,
    configFileName: CONFIG_FILE_NAME,
  });
}
