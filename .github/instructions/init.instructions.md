---
applyTo: '**'
---

# Initialization Instructions for the Project

## Stack Overview

This project is built using a modern web stack designed for scalability and performance. Below is an overview of the technologies used:

- **Backend**: Node.js with NestJS, Typescript.

### Security

- **Authentication**: JWT (JSON Web Tokens) for secure user authentication.
- on controllers always use `@UseGuards(AuthGuard)` to protect routes.
- Ensure all endpoints are protected by authentication and authorization
- Validate all user inputs and sanitize data
- Implement rate limiting and throttling
- Implement logging and monitoring for security events