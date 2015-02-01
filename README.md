# download-service

> A web service frontend for [download](https://github.com/kevva/download).

## Usage

Send a POST request to a web service endpoint offered by this module to start a download. The web service accepts the
following URL query parameters.

* **get** : Mandatory. The URL for the download.
* **dest** : Mandatory. The local destination folder where the loaded file will be stored.
* **rename** : Optional. A new name for the downloaded file.

You can start the endpoint via the command line or by including download-service as a module.

### Node Module

Install the module in your project.

```
npm install --save download-service
```

Use the function **listen** to start the download service at the specified port.

```
var ds = require('download-service');
ds.listen(3000);
```

### Command line

```
node start.js
```

When run, this program offers a web service endpoint at http://localhost:3000/download.