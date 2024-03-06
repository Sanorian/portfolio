FROM alpine:latest
WORKDIR /app
COPY . .
RUN apk update && apk add --no-cache python3 py3-pip sudo
RUN python3 -m venv venv && source venv/bin/activate && pip install django
EXPOSE 80
CMD ["sh", "-c", "source venv/bin/activate && python manage.py runserver 0.0.0.0:80"]
