# server

> Provide the resources for the client browser and serve the APIs for the clients

## APIs

### User login

        POST /api/users/login

### Receive the diagram information from the clinet

        POST /api/board/run

### Get the board data

        GET /api/board

### Receive the simulation result

        POST /api/data/results

### Save the simulation data

        POST /api/simulation/save

### Get the simulation data based on its id

        GET /api/simulation/:simId

## Prepare the development env using Docker

1. Make sure you have SSL certificate file as client-cert.pem and client-key.pem on the app's root folder.
1. Get into the app root folder by using your cli.
1. Run webpack to build the final bundle of browser's resources.
1. Create server image by running this command:
    ```sh
    docker build -f Dockerfile.dev -t divination-software/server:dev .
    ```
1. Create sim image by running the Dockerfile in sim's application folder if you haven't done it.
1. Run this command:
    ```sh
    docker-compose -f docker-compose.dev.yml up -d
    ```

## Useful Docker commands

1. To stop the cluster:
    ```sh
    docker-compose -f docker-compose.dev.yml stop
    ```
1. To remove the cluster:
    ```sh
    docker-compose -f docker-compose.dev.yml down
    ```
1. To show the containers' log data:
    ```sh
    docker-compose -f docker-compose.dev.yml logs
    ```
1. To show the containers' status:
    ```sh
    docker-compose -f docker-compose.dev.yml ps
    ```
