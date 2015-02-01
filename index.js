"use strict";
var finalhandler = require('finalhandler'),
    http = require('http'),
    router = require('router')(),
    url = require('url');

router.post('/download', function (req, res) {
    var query = url.parse(req.url, true).query,
        validateQuery = function () {
            return query
                && query.get && query.get.match(/^http[s]?:\/\/.+$/)
                && query.dest && query.dest.match(/^.+$/);
        };

    if (!validateQuery()) {
        res.writeHead(400);
    }
    else {
        console.log(query);
    }
    res.end();
});

http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
}).listen(3000);