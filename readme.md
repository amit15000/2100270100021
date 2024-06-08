# Registration Project

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/amit15000/2100270100021.git
    cd 2100270100021
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node server.js
    ```

## API Endpoint

- **POST /api/register**
    - **Description**: Registers a company with the test server.
    - **Body Parameters**:
        - `companyName` (string): The name of the company.
        - `ownerName` (string): The name of the owner.
        - `rollNo` (string): The roll number.
        - `ownerEmail` (string): The email of the owner.

    - **Example Request Body**:
        ```json
        {
            "companyName": "goMart",
            "ownerName": "Rahul",
            "rollNo": "12345",
            "ownerEmail": "xyz@example.edu"
        }
        ```

    - **Example Response**:
        ```json
        {
            "companyName": "goMart",
            "clientID": "37bb493c-73d3-47ca-5675-21f66ef0b735",
            "clientSecret": "HVIQBVbqnTGEMAED",
            "ownerName": "Rahul",
            "ownerEmail": "xyz@example.edu",
            "rollNo": "12345"
        }
        ```

## Testing

Use Postman or Insomnia to test the registration endpoint.

1. Set the URL to `http://localhost:3000/api/register`.
2. Set the request method to POST.
3. Set the request body as described above.
4. Send the request and check the response.

## Screenshots

Include screenshots of the API client showing the request and response.
