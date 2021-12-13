## Steps to run the project :<br>

make sure you're currently in root directory then :<br>

- create `.env` file with the listed environment variables in `.env.example`
- `docker-compose up`
- `docker-compose exec api python manage.py makemigrations`
- `docker-compose exec api python manage.py migrate`
- run a shell in django with `docker-compose exec api python manage.py shell` and then :<br>
  - initialize the database with:<br> `from products import seed`
  - exit the shell<br>

you can access the web app at :<br> `http://localhost:<specified api port>/`
