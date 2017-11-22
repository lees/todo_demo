
init:
	virtualenv venv
	./venv/bin/pip install -r requirements.txt
	./venv/bin/python todo_demo/manage.py migrate
	docker build --tag webpack --file webpack-dockerfile .

static-build:
	docker run -it --rm -v $(PWD):/usr/local/app webpack sh -c "npm install && npm start"

static-serve:
	cd public && python -m SimpleHTTPServer 8001

run-backend:
	./venv/bin/python todo_demo/manage.py runserver

admin:
	./venv/bin/python todo_demo/manage.py createsuperuser

clean:
	rm -rf venv
	rm -rf public/build/*
	rm -rf node_modules
	rm -f todo_demo/db.sqlite3
	find todo_demo -name *.pyc -delete