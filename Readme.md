# How to:
### Install
- run `npm i -g sharkserve`

### Use
- Serve dir /home/ from port 8081:
- `sharkserve --port=8081 --dir=/home`
- Standard settings: dir . port 8080
- `sharkserve`
- Localhost Only Mode: add the option `--lhost=1`
- Disable autoreload: add the option `--autoreload=0`

## Changelog

- `version: 1.2.1` Add Lhost Only Mode
- `version": "1.2.0"` ADD BIN READ

## For Advanced users:
You can permanently change the settings, 404 site and more by changing the settings.json in the downloaded folder `node_modules/sharkserve/settings.json`