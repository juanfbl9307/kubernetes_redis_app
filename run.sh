APPNAME=test-application
APP_PORT=9001
export REDIS_PORT=6379
export APP_PORT=$APP_PORT
(cd application && docker build --build-arg APP_PORT=$APP_PORT -t $APPNAME:latest .)
docker-compose up