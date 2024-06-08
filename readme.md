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

### Authorization

- **POST /api/auth**
    - **Description**: Obtains an authorization token for the company.
    - **Body Parameters**:
        - `companyName` (string): The name of the company.
        - `clientID` (string): The client ID obtained from registration.
        - `clientSecret` (string): The client secret obtained from registration.
        - `ownerName` (string): The name of the owner.
        - `ownerEmail` (string): The email of the owner.
        - `rollNo` (string): The roll number.

    - **Example Request Body**:
        ```json
        {
            "companyName": "goMart",
            "clientID": "37bb493c-73d3-47ca-5675-21f66ef0b735",
            "clientSecret": "HVIQBVbqnTGEMAED",
            "ownerName": "Rahul",
            "ownerEmail": "rahul@example.edu",
            "rollNo": "12345"
        }
        ```

    - **Example Response**:
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }
        ```

## Testing

Use Postman or Insomnia to test the registration endpoint.

1. Set the URL to `http://localhost:3000/api/register`.
2. Set the request method to POST.
3. Set the request body as described above.
4. Send the request and check the response.

## Screenshots

Registration -> ![register](https://github.com/amit15000/2100270100021/assets/135760038/4749d1f7-1394-428d-817f-e9b30ae8f6d7)
Unauthorised Access -> ![unauthorised_access](https://github.com/amit15000/2100270100021/assets/135760038/410d2faa-0088-4e28-93b5-d14f99236ee5)
Authorised Access -> ![authorised_access](https://github.com/amit15000/2100270100021/assets/135760038/1e2183bc-684a-4318-b7fa-b6856741c37d)



