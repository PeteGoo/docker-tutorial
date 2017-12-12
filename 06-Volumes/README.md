# Volumes

You can create `volumes` to persist data outside the container and to share 
into a new container.

```bash
docker run -it -v $(pwd)/src:/src node:latest /bin/bash
```

Let's see where our volume data is

```bash
cd /src
ls
npm install
node index.js

[Ctrl + c]

exit
```

Now did we affect the host?

```bash
ls -la ./src
```

_Note: We now have a `node_modules` folder_