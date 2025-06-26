#  Waypoint Tracker

**Real-life participant tracking system with Laravel backend and React Native mobile app.**  
Participants receive directional guidance; admins manage GPX routes and track progress.

---

##  Project Overview

Waypoint Tracker enables organizers to guide and monitor participants along predefined routes using GPS coordinates and directional arrows. The system ensures:

 Admin control over route management via GPX uploads  
 Participants receive real-time directional assistance, without exposing full waypoint maps  
 Secure role-based access for Admins and Participants  

---

##  Technologies

- **Frontend:** React Native (Expo)  
- **Backend:** Laravel (PHP, recommended with Sanctum for token authentication)  
- **Database:** MySQL or PostgreSQL  
- **Authentication:** Token-based login (Laravel Sanctum preferred)  

---

##  Core Features

- **User Registration & Login with Role Selection**  
- **Role-Specific Screens**  
   - **Admin:**  
     - Upload GPX route files  
     - Monitor participant status (future improvement)  
   - **Participant:**  
     - Directional arrows for route guidance  
     - Coordinates display, without full map view  

- **GPX File Upload & Parsing**  
- **Real-time waypoint tracking (directional focus only)**  

---

##  Project Setup

### Backend: Laravel API

1. Navigate to backend folder:
   ```bash
   cd your-backend-folder
```

2. Install dependencies:

```bash
composer install
 ```

3. Configure.env:
```bash 
  DB_CONNECTION=mysql
  DB_DATABASE=your_database
  DB_USERNAME=your_username
  DB_PASSWORD=your_password
 ```
4. Migrate database:
```bash
php artisan migrate
 ```

5. Install Laravel Sanctum (for token authentication):
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
 ```

6. Start backend server:
```bash

php artisan serve --host=192.168.0.101 --port=8001
 ```

###Frontend: React Native with Expo
1.Navigate to frontend folder:
```bash
cd your-frontend-folder
 ```
2.Install dependencies:

```bash
npm install
 ```

3.Start Expo development server:
```bash
npx expo start --tunnel
Use Expo Go app on your mobile device (connected to same Wi-Fi as backend) to run the application.
 ```


