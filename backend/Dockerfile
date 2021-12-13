FROM python:3.8

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /backend

COPY Pipfile Pipfile.lock /backend/
RUN pip install pipenv && pipenv install --system

COPY . /backend/