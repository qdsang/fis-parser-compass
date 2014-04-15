

'use strict';

var parserSass = require('fis-parser-sass');
var root = fis.project.getProjectPath();
var compass_root = __dirname + '/compass/frameworks';
var frameworks_root = [compass_root + '/compass/stylesheets/', compass_root + '/blueprint/stylesheets/'];

module.exports = function(content, file, conf){

    var include_paths = conf.include_paths || [root];
    include_paths = include_paths.concat([ file.dirname, root ]);
    include_paths = include_paths.concat(frameworks_root);
    conf.include_paths = include_paths;
    
    return parserSass(content, file, conf);
};