# Portfolio Website V 1.0

![content](https://drive.google.com/uc?export=download&id=1EhgVKfkQ-AM01TD-VqnmQVhZ_YgAYFsB)


## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Languages](#languages)
4. [Technologies](#technologies)
5. [Installations](#installations)
6. [Run](#run)


## Overview
This is my portfolio website

## Features
* Responsive website
* It has theme change

## Languages
* Javascript
* Python
* SQL

## Technologies
* Next.js
* Material UI
* Django
* Postgresql

## Installations

### Backend

#### 1. Create a virtual environment

From the **root** directory run:

```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **root** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **root** directory run:

```bash
pip install -r requirements.txt
```

#### 4. Set up a PostgreSQL database

With **PostgreSQL** up and running, in a new Terminal window run:

```bash
dropdb --if-exists portfolio
```

Start **psql**, which is a terminal-based front-end to PostgreSQL, by running the command:

```bash
psql postgres
```

Create a new PostgreSQL database:

```sql
CREATE DATABASE portfolio;
```

Create a new database admin user:

```sql
CREATE USER yourusername WITH SUPERUSER PASSWORD 'yourpassword';
```

To quit **psql**, run:

```bash
\q
```

#### 5. Set up backend environment variables

From the **root** directory run:

```bash
touch config/.env
```

The **touch** command will create the **.env** file in the **backend/config** directory. This command works on Mac and Linux but not on Windows. If you are a Windows user, instead of using the command line, you can create the **.env** file manually by navigating in Visual Studio Code to the Explorer, clicking on the **config** directory (inside the **backend** directory), and selecting the option **New File**.


Next, declare environment variables in the **.env** file. Make sure you don't use quotation marks around the strings.

```bash
SECRET_KEY=yoursecretkey
DATABASE_NAME=portfolio
DATABASE_USER=yourusername
DATABASE_PASS=yourpassword
DATABASE_HOST=localhost
FRONTEND_URL=http://localhost:3000
```

#### 6. Run migrations

From the **root** directory run:

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 7. Create an admin user to access the Django Admin interface

From the **root** directory run:

```bash
python manage.py createsuperuser
```

When prompted, enter a username, email, and password.

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory run:

```bash
npm install
```

#### 2. Set up frontend environment variables

From the **root** directory run:

```bash
touch .env.development && touch .env.production
```

The **touch** command will create the **.env.development** and **.env.production** files in the **frontend** directory. This command works on Mac and Linux but not on Windows. If you are a Windows user, instead of using the command line, you can create the **.env.development** and **.env.production** files manually by navigating in Visual Studio Code to the Explorer, clicking on the **frontend** directory, and selecting the option **New File**.

Next, declare environment variables in the **.env.development** file. Make sure you don't use quotation marks around the strings.

```bash
BACKEND_HOST=127.0.0.1
BACKEND_URL=http://127.0.0.1:8000
```

## Run

To run the application, you need to have both the backend and the frontend up and running.

#### 1. Run backend

From the **root** directory run:

```bash
python manage.py runserver
```

#### 2. Run frontend

From the **root** directory run:

```bash
npm run dev
```

#### 3. View the application

Go to http://localhost:3000/ to view the application.


## Add data to the application

Add data through Django Admin.

Go to http://127.0.0.1:8000/admin to access the Django Admin interface and sign in using the admin credentials.
Note: When editing technologies and projects, put the image/icon url in the box, possibly the file's google drive direct download link
](https://github.com/thehashton/cb-data-dashboard.git)https://github.com/thehashton/cb-data-dashboard.git
