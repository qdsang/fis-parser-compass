fis-parser-compass
==================

A parser plugin for fis to compile sass file.

https://github.com/fouber/fis-parser-sass/blob/master/README.md

https://github.com/chriseppstein/compass

http://compass-style.org/

## usage

    $ npm install -g fis-parser-compass
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    roadmap : {
        ext : {
            //compile *.scss or *.sass into *.css
            scss : 'css',
            sass : 'css'
        }
    },
    modules : {
        parser : {
            scss : 'compass',
            sass : 'compass'
        }
    }
});
```