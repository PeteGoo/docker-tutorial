# Dockerfile

Dockerfile is a way to create new container images. 

You can think of it as a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) for building Docker images.

## FROM - The Base Image

Create a new file called `Dockerfile` and add the following line

```Dockerfile
FROM ubuntu:16.04
```

Now build it. _Note the successfully built image id_

```bash
docker build .
```

Now run it

```bash
docker run -it <image id>
```

## CMD - What program should I run?

Modify your `Dockerfile` to look like this

```Dockerfile
FROM ubuntu:16.04

CMD echo "Hello, World!"
```

Now build it. _This time we will name it_

```bash
docker build -t hello .
```

_Did you see the image ids? How many images did we create?_

Now run it by name

```bash
docker run hello
```