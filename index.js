

'use strict';

var sass = require('fis-sass');
var root = fis.project.getProjectPath();
var compass_root = __dirname + '/compass/frameworks';
var frameworks_root = [compass_root + '/compass/stylesheets/', compass_root + '/blueprint/stylesheets/'];

module.exports = function(content, file, conf){
    var opts = fis.util.clone(conf);
    opts.data = content;
    
    opts.include_paths = conf.include_paths || [];
    opts.include_paths = opts.include_paths.concat([ file.dirname, root ]);
    opts.include_paths = opts.include_paths.concat(frameworks_root);

    return sass.renderSync(opts);
};