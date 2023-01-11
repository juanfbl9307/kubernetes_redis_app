APPNAME=test-application
APP_PORT=3000
(cd application && docker build --build-arg APP_PORT=$APP_PORT -t $APPNAME:latest .)
docker-compose up