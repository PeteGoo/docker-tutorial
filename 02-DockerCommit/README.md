# Docker Commit

The Docker commit commands allow you to build up your own custom images.
You can run commands inside your container and then snapshot the changes
into a new image.

To do this section it makes sense to have two terminal windows open, split into top and bottom

## Run a new container

* On bottom terminal window
```bash
# Run a new container
docker run -it ubuntu:16.04
```

* On top terminal window
```bash
# Show the running container
docker ps
```

## Make a change in the container

* On bottom terminal window
```bash
# Add a new file
echo "This is a new file" > ~/foo
```

## Commit the change 

* On the top terminal window
```bash
# Get the container id
docker ps

# Let's see the diff (yes the diff) of our container
docker diff <container id>

# Commit the changed container to a new image (Note the returned image id - sha256 hash)
docker commit <container id>
```

* On the bottom terminal window
```bash
# Exit the running container
exit

# Run a new container from the image
docker run -it <image id>

# Check that the file is there
cat ~/foo
```