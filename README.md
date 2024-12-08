# Webhoop project in Node.js

This project implements a basic GraphQL server in Python, using Flask and Ariadne, including a graphical interface for querying the API.

## Instructions to run the project
### Prerequisites
1. Make sure you have Docker installed on your machine.
2. Clone this repository to your local machine:

   ```bash
   git clone  https://github.com/alwxav98/EA3Webhoop.git
   cd  EA3Webhoop
   ```

### Using Docker
1. Clone this repository to your local machine.
2. Build the Docker image with the following command:

   ```bash
   docker build -t node-webhoop .
   ```

3. Run the container with:

   ```bash
   docker run -d -p 3000:3000 --name webhoop-container node-webhoop
   ```
4. Access the application in your browser:
- Home page: http://localhost:3000
- API endpoint: http://localhost:3000/webhook

## Testing the Webhoop Endpoint
The Webhoop endpoint only accepts POST requests and cannot be accessed directly from the browser. You can test it using tools like Postman or cURL. Here's an example:

### Using Postman
1. Open Postman and create a new request.
2. Set the method to POST.
3. Enter the URL: http://localhost:3000/webhook.
4. Go to the Body tab, select raw, and choose JSON as the format.
5. Enter the following sample JSON:

   ```json
      {
        "evento": "nuevo_registro",
        "usuario": "alexandra"
      }
      ```
   
   This should return:
   
   ```bash
      Webhook recibido
      ```
   
