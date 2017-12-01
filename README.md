# Демонстрационный проект Todo листа на Python+React

Это демонстрационный проект в рамках мастер класса, необходимый для изучения современных средств веб-разработки.

В проекте несколько веток, соответствующих разным стадиям разработки проекта. Проект работает в каждой ветке, но в каждой ветке реализоаны разные наборы функционала.

## Видео
* [Видео мастер-класса от 30.11.2017](https://vk.com/video-64913393_456239168?list=f940c1c34739b04294)
* [Скринкаст мастер-класса от 30.11.2017](https://cloud.mail.ru/public/DgRG/jjLqkVi4z)

## Системный требования
На машине, на которой будет развернут проект требуются следующие компоненты:
* git
* make
* python (**2.7**)
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

* Создаем пользователя для [django-admin](http://127.0.0.1:8000/admin/)

> make admin

## Полезные материалы
* [React tutorial](https://reactjs.org/tutorial/tutorial.html)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Django tutorial](https://docs.djangoproject.com/en/1.11/intro/tutorial01/)
