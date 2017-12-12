# Port Mapping

Port mapping allows us to expose some network service inside our container as a 
port on the host.

The idea is that there is a port inside the container, let's say 8080 that is running 
our service.

We then add a port on the host that maps through to the port in the container, let's say 8888

# Build the example container

From this location look at the Dockerfile.

_Note: We use ADD here to copy in the source files_

```bash
docker build -t hello-node .
```

# Run it

Now run it. This time let's run it in the background

```bash
docker run -d hello-node
```

Let's confirm it is running 

```bash
docker ps
```

_Note: We should see our running container. Note the id_

# Exec into a container

This time we are going to exec into the container to start a shell inside.

_Note: You can just use the first few characters of the container id if you are lazy_

```bash
docker exec -it <container id> /bin/bash
```

Now we are inside the container, let's see what is running 

```bash
ps -A
```

_Note: we have a node process. Is it serving http traffic?_

```bash
curl localhost:80
```

Yes!

Let's exit and see if the host can see that traffic


```bash
exit

# Still running? Do you know why?
docker ps 

curl localhost:80

```
Awww :'(

# Map the Port

Let's kill our previous container
```bash
docker kill <container id>
```

Let's map a port on the host to a port in the container when we run it

```bash
docker run -d -p 8080:80 hello-node 
```

Let's hit the host port

```bash
curl localhost:8080
```

Yay!

If you are in Cloud9 then go to the `Preview` menu and select `Preview Running Application`