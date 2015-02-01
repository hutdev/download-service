"use strict";
var Download = require('download'),
    finalhandler = require('finalhandler'),
    http = require('http'),
    router = require('router')(),
    url = require('url');

router.post('/download', function (req, res) {
    var download,
        query = url.parse(req.url, true).query,
        validateQuery = function () {
            return query
                && query.get && query.get.match(/^http[s]?:\/\/.+$/)
                && query.dest && query.dest.match(/^.+$/);
        };

    if (!validateQuery())
        res.writeHead(400);
    else {
        download = new Download()
            .get(query.get)
            .dest(query.dest);

        if (query.rename && query.rename.match(/^.+$/))
            download.rename(query.rename);

        download.run(function (err, files) {
            if (err)
                console.error(err);
            else
                console.log('Download successful.');
        });
    }
    res.end();
});

http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
}).listen(3000);