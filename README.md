# DOCKER Compose

FrontEnd - React
Backend - Node

## Purpose

- Experiment with Reverse Proxy using Docker Compose combined

## How to run:

### 1. Run each Docker Container Individually

1. Build Docker Container:
   docker build -t reactapp:1.0.0 .
   docker build -t expressapp:1.0.0 .
   docker build -t reverseproxy:1.0.0 .

2. Create Docker Network to run your docker files in:
   docker network create sub-etha

3. Run Docker Containers
   docker run -d --name=backend --network=sub-etha expressapp:1.0.0
   docker run -d --name=frontend --network=sub-etha reactapp:1.0.0
   docker run -d --name=revproxy --network=sub-etha -p 80:80 reverseproxy:1.0.0

4. Check http://localhost

### 2. Run as Docker Compose

1. Run Docker Compose which builds both all three:
   docker-compose up -d

2. Check http://localhost

## Useful Docker commands

1. list running containers
   docker container ls

2. list running and stoped containers
   docker container ls -a

3. stop a container
   docker stop frontend

4. start a container
   docker start frontend

5. Remove a container
   docker container rm frontend

6. Remove all stopped containers
   docker container prune

7. list images
   docker image ls

8. delete an image
   docker image rm reactapp:1.0.0

9. delete dangling images
   docker rmi $(docker images -f "dangling=true" -q)

10. list networks
    docker network ls

11. create a network
    docker network create sub-etha

12. delete a network
    docker network rm sub-etha

13. remove unused networks
    docker network prune

14. inspect a network
    docker network inspect sub-etha

15. start containers in detached mode (-d)
    docker-compose up -d

16. stop running containers
    docker-compose stop

17. stop containers and remove containers, networks and images
    docker-compose down
