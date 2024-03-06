# Manual
```
pip install django
```
```
sudo python manage.py runserver 0.0.0.0:80
```
# Docker
## Build image:
```
docker build -t portfolio_app .
```
## Run image:
```
docker run -it -p 80:80 -d portfolio_app
```