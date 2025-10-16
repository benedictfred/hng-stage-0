# HNG Stage 0 - Profile API

## Description

A simple RESTful API endpoint that returns profile information along with a dynamic cat fact fetched from an external API. This project demonstrates the ability to consume third-party APIs, format JSON responses, and return dynamic data.

## Features

- RESTful API with GET `/me` endpoint
- Dynamic timestamp generation in ISO 8601 format
- Integration with Cat Facts API for random cat facts
- Proper error handling and fallback messages
- CORS enabled for cross-origin requests
- Request logging middleware
- Environment variable configuration
- TypeScript for type safety

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **HTTP Client**: Axios
- **Additional Libraries**: CORS, Dotenv

## API Documentation

### GET /me

**Example Request:**

```bash
curl http://localhost:3000/me
```

- Returns user profile information along with a random cat fact.

**Response Format:**

```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "A random cat fact from Cat Facts API"
}
```

**Response Fields:**

| Field        | Type   | Description                         |
| ------------ | ------ | ----------------------------------- |
| `status`     | string | Always returns "success"            |
| `user.email` | string | User's email address                |
| `user.name`  | string | User's full name                    |
| `user.stack` | string | Backend technology stack            |
| `timestamp`  | string | Current UTC time in ISO 8601 format |
| `fact`       | string | Random cat fact from external API   |

**Status Codes:**

- `200 OK` - Successful response

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd hng-stage-zero
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
PORT=3000
USER_EMAIL=your.email@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express/TypeScript
```

### Running Locally

**Development mode (with auto-reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will start on `http://localhost:3000` (or the PORT specified in your `.env` file).

### Testing the API

Once the server is running, you can test the endpoint using:

**Using curl:**

```bash
curl http://localhost:3000/me
```

**Using a browser:**

Navigate to `http://localhost:3000/me`

**Using Postman or similar tools:**

- Method: GET
- URL: `http://localhost:3000/me`

## Project Structure

```
hng-stage-zero/
├── src/
│   └── index.ts          # Main application file
├── .env                  # Environment variables (be sure to create this)
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## Error Handling

The API includes robust error handling:

- **External API Failure**: If the Cat Facts API is unavailable, a fallback message is returned
- **Timeout Handling**: 10-second timeout on external API calls
- **Request Logging**: All requests are logged with timestamp, method, and URL

## Author

Nebolisa Ugochukwu

## HNG Internship

This project is part of the HNG Internship Stage 0 task.

Learn more about hiring talented developers: [HNG Hire](https://hng.tech/hire)
