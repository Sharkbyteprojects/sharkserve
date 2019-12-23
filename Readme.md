# How to:
### Install
- Make an file and name it `sharkserve.js` and write in it `require("sharkserve");`
- run `npm init -y`
- run `npm i sharkserve`

### Use
- Serve dir /home/ from port 8081:
- `node sharkserve --port=8081 --dir=/home`
- Standard settings: dir . port 8080
- `node sharkserve`
- Localhost Only Mode: add the option `--lhost=1`

## Changelog

- `version: 1.2.1` Add Lhost Only Mode
- `version": "1.2.0"` ADD BIN READ

## For Advanced users:
You can permanently change the settings, 404 site and more by changing the settings.json in the downloaded folder `node_modules/sharkserve/settings.json`