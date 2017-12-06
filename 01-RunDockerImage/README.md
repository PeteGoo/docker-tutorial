# Run a docker image

In the following steps you will start a new docker container.

## Run an Alpine image

The docker cli `run` command will start a new container

```bash
docker run
```

*So that didn't work.*
We will need to supply an image. Luckily there is a really small base image called Alpine that is only 5MB!

```bash
docker run alpine:latest
```

*So what just happened?*
Well, we ran a docker image. It didn't have the image so it pulled it from Docker Hub. 
The container started and ended because it had nothing to do. Happy?

The -i flag will give us an interactive session and the -t flag will give us a pseudo-tty

```bash
docker run -it alpine:latest
```

Now browse around

```bash
# Where are we?
pwd

# What lives here?
ls

# What is running?
ps

# Install Curl
apk update 
apk add curl

# Can Haz Google?
curl google.com

# Exit the container
exit
```

## Run in the background

```bash
# Run a new alpine container in the background. Need to make it block to not end immediately
docker run -d alpine:latest /bin/sh -c "while true; do sleep 1000; done"

# What is running? (Note the container id)
docker ps

# Kill the container
docker kill <container id>
docker ps
docker ps -a

# Exit the container
exit
```

## Pull an Ubuntu Image

```bash
docker pull ubuntu:16.04

docker run -it ubuntu:16.04

# Exit the container
exit
```