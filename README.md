# download-service

> A web service frontend for [download](https://github.com/kevva/download).

## Usage

When run, this program offers a web service endpoint at http://localhost:3000/download. Send a POST request to this
endpoint to start a download. The web service accepts the following URL query parameters.

* **get** : Mandatory. The URL for the download.
* **dest** : Mandatory. The local destination folder where the loaded file will be stored.
* **rename** : Optional. A new name for the downloaded file.
