'use strict';
module.exports = function(app) {
    app.dataSources.mysql.autoupdate('fin', err => {
        if (err) throw err;
        console.log('Model Added');
    });
};