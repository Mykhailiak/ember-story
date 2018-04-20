/*jshint node:true*/
const fs = require('fs');
const path = require('path');

const isExist = path => fs.existsSync(path);

module.exports = {
  description: 'Create component story for combook',
  fileMapTokens() {
    return {
      __componentName__(options) {
        return options.dasherizedModuleName;
      },
      __name__() {
        return 'story';
      },
    };
  },
  beforeInstall(options) {
    const { entity: { name } } = options;
    const pilotPath = path.join(__dirname, `../../app/components/${name}`);

    if (!isExist(pilotPath)) {
      throw new Error('Component doesn\'t exist yet.');
    }
  },
  locals: function(options) {
    return {
      componentName: options.entity.name,
    };
  },
};
