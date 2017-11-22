# Демонстрационный проект Todo листа на Python+React

Это демонстрационный проект в рамках мастер класса, необходимый для изучения современных средств веб-разработки.

В проекте несколько веток, соответствующих разным стадиям разработки проекта. Проект работает в каждой ветке, но в каждой ветке реализоаны разные наборы функционала.

## Системный требования
На машине, на которой будет развернут проект требуются следующие компоненты:
* git
* make
* python
* virtualenv
* docker

## Порядок развертывания проекта
* Сборка образа и virtualenv окружения

> make init

* Сборка React приложения с помощью webpack (будет работать в фоне)

> make static-build

* Веб-сервер для статики [(Ссылка)](http://127.0.0.1:8001/)

> make static-serve

* Веб-сервер для бекенда [(Ссылка)](http://127.0.0.1:8000/)

> make run-backend


## Полезные материалы
* [React tutorial](https://reactjs.org/tutorial/tutorial.html)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Django tutorial](https://docs.djangoproject.com/en/1.11/intro/tutorial01/)