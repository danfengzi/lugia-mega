/**
 * Created Date: Wednesday, January 23rd 2019, 5:40:43 pm
 * Author: hanjingbo@ysstech.com | jingboup@gmail.com
 * -----
 * Last Modified: Monday, January 28th 2019, 4:43:46 pm
 * Modified By: hanjingbo <hanjingbo@ysstech.com | jingboup@gmail.com>
 * -----
 * Copyright (c) 2019-present, #Lugia#.
 * ------------------------------------
 * Javascript will save your soul!
 */

import { join } from 'path';
import clipboardy from 'clipboardy';
import dev from '@lugia/mega-scripts/lib/utils/dev';
import getDefaultEntry from './getDefaultEntry';

const cwd = process.cwd();

export default function singleBuild(
  entry = getDefaultEntry(cwd),
  { open = false, sync = false, copy },
) {
  const applyConfig = config => {
    if (config.html._fromMegaScriptsDefault) {
      config.html = {};
    }
    return {
      ...config,
      html: {
        template: join(__dirname, '../templates/html.ejs'),
        title: 'Lugia Mega App',
        ...config.html,
      },
    };
  };

  const applyWebpack = (webpackConfig, { merge }) => {
    return merge(webpackConfig, {
      resolve: {
        alias: {
          react: require.resolve('react', [cwd, join(__dirname)]),
          'react-dom': require.resolve('react-dom', [cwd, join(__dirname)]),
        },
      },
    });
  };

  dev({
    cwd,
    entry,
    applyConfig,
    applyWebpack,
    _cliEnv: {
      BROWSER: open,
      BROWSER_SYNC: sync,
    },
    onOpenPort({ urls }) {
      if (copy) {
        clipboardy.writeSync(urls.localUrlForBrowser);
      }
    },
  });
}
