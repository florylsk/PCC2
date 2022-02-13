# FOTech

FOTech is a microservices single page E-Commerce web application based on Next.js/React and Spring Boot/MySQL/MongoDB.

## Technologies used
### Frontend
* Next.js
* React
* Bootstrap
### Backend
* Spring Boot
* MySQL
* MongoDB
## How to run it
* Start MySQL service on linux/process on Windows
* Execute DBScript.txt logged as root in MySQL terminal/MySQL Workbench
* Start MongoDB service on linux/execute "mongod.exe --dbpath DB" on Windows
* Start ProductsAPI application
* Execute populateDatabase test in ProductsAPI project
* Start UserAPI application
* Start TransactionAPI application
* Start FinanceAPI application
* Enter Frontend project
* Run npm install
* Run next dev/npm run dev
* Alternatively, run next build and next start for a production level start
