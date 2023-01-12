APPNAME=test-application
APP_TAG=latest
APP_PORT=9001
(cd application && docker build --build-arg APP_PORT=$APP_PORT --platform arm64 -t $APPNAME:$APP_TAG . && docker push $APPNAME:$APP_TAG)
helm install $APPNAME manifests/app --set app.image.repository=$APPNAME,app.image.tag=v1.1,app.port=$APP_PORT