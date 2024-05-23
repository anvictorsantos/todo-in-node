# Task Manager API

This is a simple RESTful API for managing tasks. It allows you to perform CRUD operations (Create, Read, Update, Delete) on tasks.

## Setup

1.  Clone the repository:

        git clone https://github.com/your-username/task-manager-api.git

2.  Install dependencies:

        cd task-manager-apinpm install

3.  Create a `.env` file in the root directory and add your PostgreSQL database connection details:

        DB_USER=your_usernameDB_HOST=your_hostDB_DATABASE=your_databaseDB_PASSWORD=your_passwordDB_PORT=5432

4.  Run the server:

        npm run dev

5.  Running PostgreSQL Docker Container

    To run a PostgreSQL Docker container with the provided command, follow these steps:

    1.  **Pull PostgreSQL Image:**  
        If you haven't already pulled the PostgreSQL image, you can do so by running:  

        `docker pull postgres`

    2.  **Run Docker Container:**  
        Run the following command to start the PostgreSQL container:  

            docker run --name my-postgres \
                        -e POSTGRES_PASSWORD=your-password \
                        -e POSTGRES_DB=task \
                        -e POSTGRES_USER=your-username \
                        -p 5432:5432 \
                        -v /tmp/pgdata:/var/lib/postgresql/data \
                        -d postgres

        This command will:  

        - Create a container named `my-postgres`.  
        - Set the PostgreSQL password to `your-password`.  
        - Create a database named `task`.  
        - Create a user named `your-username`.  
        - Map port `5432` of the host to port `5432` of the container.  
        - Mount the host directory `/tmp/pgdata` to `/var/lib/postgresql/data` in the container for persistent data storage.  
        - Run the container in detached mode (`-d`).

    3.  **Verify Container Status:**  
        You can verify that the container is running by executing:  

        `docker ps`  

        This will list all running containers.

    4.  **Connect to PostgreSQL:**  
        Once the container is running, you can connect to the PostgreSQL database using your preferred PostgreSQL client or the `psql` command-line tool: 

        `psql -h localhost -U your-username -d task`  

        Replace `your-username` with the PostgreSQL username and `task` with the name of your PostgreSQL database.

    5.  **Perform Database Operations:**  
        You can now perform various database operations, such as creating tables, inserting data, querying data, etc., using SQL commands.

    6.  **Stop and Remove the Container:**  
        When you're done working with the PostgreSQL database, you can stop and remove the container using:  

            docker stop my-postgres
            docker rm my-postgres

        This will stop and remove the `my-postgres` container.

## Endpoints

### Get all tasks

    curl http://localhost:4000/tasks

### Get task by ID

    curl http://localhost:4000/tasks/{task_id}

Replace `{task_id}` with the ID of the task you want to retrieve.

### Create task

    curl -X POST -H "Content-Type: application/json" -d '{"title":"New Task","description":"Description of the new task"}' http://localhost:4000/tasks

### Update task

    curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Task","description":"Updated description of the task"}' http://localhost:4000/tasks/{task_id}

Replace `{task_id}` with the ID of the task you want to update.

### Delete task

    curl -X DELETE http://localhost:4000/tasks/{task_id}

Replace `{task_id}` with the ID of the task you want to delete.

## Dependencies

*   express: "^4.17.1"
*   pg: "^8.7.1"
*   dotenv: "^10.0.0"
*   nodemon: "^2.0.14"
*   body-parser: "^1.19.0"

## License

This project is licensed under the [MIT License](LICENSE).