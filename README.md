# DOCKER Compose

FrontEnd - React <br />
Backend - Node <br />

## Purpose

- Experiment with Reverse Proxy using Docker Compose combined

## How to run:

### 1. Run each Docker Container Individually

1. Build Docker Container: <br />
   docker build -t reactapp:1.0.0 . <br />
   docker build -t expressapp:1.0.0 . <br />
   docker build -t reverseproxy:1.0.0 . <br />

2. Create Docker Network to run your docker files in: <br />
   docker network create sub-etha <br />

3. Run Docker Containers <br />
   docker run -d --name=backend --network=sub-etha expressapp:1.0.0 <br />
   docker run -d --name=frontend --network=sub-etha reactapp:1.0.0 <br />
   docker run -d --name=revproxy --network=sub-etha -p 80:80 reverseproxy:1.0.0 <br />

4. Check http://localhost

### 2. Run as Docker Compose

1. Run Docker Compose which builds both all three: <br />
   docker-compose up -d <br />

2. Check http://localhost

## Useful Docker commands

1. list running containers

- docker container ls <br />

2. list running and stoped containers

- docker container ls -a <br />

3. stop a container

- docker stop frontend <br />

4. start a container

- docker start frontend <br />

5. Remove a container

- docker container rm frontend <br />

6. Remove all stopped containers

- docker container prune <br />

7. list images

- docker image ls <br />

8. delete an image
   -docker image rm reactapp:1.0.0 <br />

9. delete dangling images

- docker rmi $(docker images -f "dangling=true" -q) <br />

10. list networks

- docker network ls <br />

11. create a network

- docker network create sub-etha <br />

12. delete a network

- docker network rm sub-etha <br />

13. remove unused networks

- docker network prune <br />

14. inspect a network

- docker network inspect sub-etha <br />

15. start containers in detached mode (-d)

- docker-compose up -d <br />

16. stop running containers

- docker-compose stop <br />

17. stop containers and remove containers, networks and images

- docker-compose down <br />
