
---

# SIM Card Activation Service

## Project Overview

This project is a **SIM Card Activation Service** built for a telecom company. It provides functionalities for managing SIM cards, including:
- Adding new SIM cards
- Activating and deactivating SIM cards
- Retrieving SIM card details

The application is built using:
- **Backend**: Node.js with Express
- **Database**: MongoDB (NoSQL)

The frontend is deployed, but due to some issues, it is currently not functioning. As a result, you can interact with the application by using the provided API endpoints manually.

## Deployment

The backend is deployed on **Render**. You can interact with the API using tools like **Postman** or **curl**.

- **Deployed Backend URL**: https://digiplus-assesment.onrender.com/

## API Endpoints

Here are the API endpoints available:

### 1. Add New SIM Card
- **Endpoint**: `POST /add-sim`
- **Description**: Adds a new SIM card to the system.
- **Request Body**:
  ```json
  {
    "simNumber": "SIM1234567890",
    "phoneNumber": "1234567890"
  }
  ```
- **Response**:
  ```json
  {
    "message": "SIM Card added successfully.",
    "simCard": {
      "_id": "613b1a4b4f1c2d2c441c013c",
      "simNumber": "SIM1234567890",
      "phoneNumber": "1234567890",
      "status": "inactive",
      "activationDate": null
    }
  }
  ```

### 2. Activate SIM Card
- **Endpoint**: `POST /activate`
- **Description**: Activates a SIM card by setting its status to active and recording the activation date.
- **Request Body**:
  ```json
  {
    "simNumber": "SIM1234567890"
  }
  ```
- **Response**:
  ```json
  {
    "message": "SIM Card activated successfully.",
    "simCard": {
      "_id": "613b1a4b4f1c2d2c441c013c",
      "simNumber": "SIM1234567890",
      "status": "active",
      "activationDate": "2024-10-06T18:30:00.000Z"
    }
  }
  ```

### 3. Deactivate SIM Card
- **Endpoint**: `POST /deactivate`
- **Description**: Deactivates a SIM card by setting its status to inactive.
- **Request Body**:
  ```json
  {
    "simNumber": "SIM1234567890"
  }
  ```
- **Response**:
  ```json
  {
    "message": "SIM Card deactivated successfully.",
    "simCard": {
      "_id": "613b1a4b4f1c2d2c441c013c",
      "simNumber": "SIM1234567890",
      "status": "inactive",
      "activationDate": null
    }
  }
  ```

### 4. Get SIM Card Details
- **Endpoint**: `GET /sim-details/:simNumber`
- **Description**: Retrieves details of a SIM card by its SIM number.
- **Example URL**: `/sim-details/SIM1234567890`
- **Response**:
  ```json
  {
    "simCard": {
      "_id": "613b1a4b4f1c2d2c441c013c",
      "simNumber": "SIM1234567890",
      "phoneNumber": "1234567890",
      "status": "active",
      "activationDate": "2024-10-06T18:30:00.000Z"
    }
  }
  ```

## Database Schema

### NoSQL (MongoDB) Schema for SIM Cards:
```json
{
  "simNumber": "String",        // Unique identifier for the SIM card
  "phoneNumber": "String",      // Associated phone number
  "status": "String",           // SIM card status: "active" or "inactive"
  "activationDate": "Date"      // Date when the SIM card was activated
}
```

## How to Use the API

Since the frontend is not functioning, you can use tools like **Postman**, **curl**, or any other REST client to manually interact with the API.

### Example using `curl`:

#### Add SIM Card:
```bash
curl -X POST "https://your-backend-url/add-sim" \
-H "Content-Type: application/json" \
-d '{"simNumber": "SIM1234567890", "phoneNumber": "1234567890"}'
```

#### Activate SIM Card:
```bash
curl -X POST "https://your-backend-url/activate" \
-H "Content-Type: application/json" \
-d '{"simNumber": "SIM1234567890"}'
```

#### Get SIM Card Details:
```bash
curl -X GET "https://your-backend-url/sim-details/SIM1234567890"
```

## Project Structure

- **models/**: Contains the MongoDB schema definitions.
- **routes/**: Contains the API routes for interacting with SIM cards.
- **server.js**: Main server file to set up the Express app and connect to the MongoDB database.


4. Use Postman or any REST client to interact with the API.

 [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/29106156-7ed4c8e1-416f-4700-8694-35b8d2d52d6a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29106156-7ed4c8e1-416f-4700-8694-35b8d2d52d6a%26entityType%3Dcollection%26workspaceId%3D859d29de-bea7-40c6-8c22-1c301a012b8b)

## Conclusion

While the frontend is currently non-functional, the backend is fully operational and supports all necessary API interactions. You can manually test all features using the above APIs.

---
