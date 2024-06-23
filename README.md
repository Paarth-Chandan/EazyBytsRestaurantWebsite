# Spices&Herbs Restaurant Website

This is a full-stack restaurant website developed using HTML, CSS, JavaScript, React.js (with Axios and Redux) for the frontend, and Java, Spring Boot, and MySQL for the backend.

## Introduction

The Spices&Herbs website provides a platform for customers to browse the restaurant menu, place orders, and make payments online. It includes user authentication, a menu catalog, order placement, and a secure payment gateway powered by Cashfree.

## Features

- User Authentication (Login/Signup)
- Browse Menu
- Place Orders
- Make Payments (powered by Cashfree)
- Order History
- Global State Management with Redux

## Video

https://github.com/Paarth-Chandan/EazyBytsRestaurantWebsite/assets/135144621/42545c8d-d2d6-4725-bb09-afdf76f22de1

## Deployment

- Frontend: Deployed on Vercel
- Backend: Deployed on Railway


## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript
- React.js (Axios for API calls)
- Redux

### Backend

- Java
- Spring Boot
- MySQL

## Installation

### Prerequisites

- Node.js
- npm
- Java (JDK 17)
- MySQL

### Frontend Setup

1. Install the dependencies:

    
sh
    npm install


2. Start the frontend development server:

    
sh
    npm start


### Backend Setup

1. Clone the repository:

    
sh
    git clone https://github.com/YourUsername/SpicesHerbsBackend.git
    cd SpicesHerbsBackend


2. Set up MySQL database:

    
sql
    CREATE DATABASE spicesherbs_db;


3. Update application.properties file with your MySQL credentials:

    
properties
    spring.datasource.url=jdbc:mysql://localhost:3306/spicesherbs_db
    spring.datasource.username=YOUR_DB_USERNAME
    spring.datasource.password=YOUR_DB_PASSWORD
    spring.jpa.hibernate.ddl-auto=update


4. Build and run the backend:

    
sh
    cd backend
    mvn clean package
    java -jar target/SpicesHerbsBackend-0.0.1-SNAPSHOT.jar


The application should now be running with the frontend accessible at http://localhost:3000 and the backend accessible at http://localhost:8080.

## Usage

1. Register a new user or log in with existing credentials.
2. Browse the menu and select items to order.
3. Place an order and proceed to payment.
4. Make payments securely through Cashfree.
5. View your order history.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## Website Link - https://spices-herbs.vercel.app/

## Contact

- **Paarth Chandan** - [GitHub](https://github.com/Paarth-Chandan)

Feel free to reach out if you have any questions or suggestions!
i have used vercel to deploy the frontend and railway to deploy the backend
