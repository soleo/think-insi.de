#!/bin/bash -ex
APP_NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

ENVIRONMENT_FILE=.env
# Read the .env.development file and construct the build arguments
BUILDARGS_STRING=""
while IFS='=' read -r key value; do
  if [[ $key =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
    escaped_value=$(printf "%q" "$value")
    BUILDARGS_STRING+="--build-arg $key=$escaped_value "
  fi
done < "$ENVIRONMENT_FILE"


IMAGE_TAG="${APP_NAME}:$1"

echo "$APP_NAME"
echo "$BUILDARGS_STRING"
echo "$IMAGE_TAG"

docker build . $BUILDARGS_STRING --tag $IMAGE_TAG

if [[ -n $(docker images -q $IMAGE_TAG) ]]; then
  docker run --rm -v ~/.config/gcloud:/root/.config/gcloud --env-file $ENVIRONMENT_FILE --publish 8080:8080 --name $APP_NAME $IMAGE_TAG
else
  echo 'Docker image build failed'
fi
