# Linking Containers

To understand container to container networking it helps to 
understand how manual linking of containers works.


Let's run a new container with our node app from section 3

```bash
docker run -d --name app hello-node
```

_Note: we have not mapped the container port 80 to a host port this
time. Also make a note of the container id for later_

# Nginx

Nginx is a web server that is often use as the public front end to 
applications like a dotnet app or nodejs. This way we will get better 
logging, SSL termination etc.

- First have a look at the nginx.conf file
- Then check out our Dockerfile

Let's start up a new container with nginx in it that will proxy through 
to our node app.

```bash
docker run -d -p 8080:8888 --link <node container id>:app nginx-app
```

- Preview the running application

 So what just happened?
 
 - `-p 8080:8888` - Expose the container port 8888 as 8080 on the host
 - `--link <id>:app` - Link through to the node app and name the relationship `app`
 - The nginx.conf says proxy through to the url http://app:80
 - We didn't need to expose a port on the app container

*So how was it able to address the app container with the name `app`?*

```bash
# Get the container ids
docker ps

# exec into the nginx container
docker exec -it <nginx id> /bin/bash

# let's look at the hosts file
cat /etc/hosts

exit
```

Pretty clever, huh?

## Cleanup 
```bash
docker kill `docker ps -q`
```
