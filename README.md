# Bookstore_API

## Getting Started

First, run the development server:

```bash
Install NPM packages:

npm install

then run development server:

npm run dev
``
## Open Browser
[http://localhost:3000](http://localhost:3000) 
with your browser to see the result.

## Check out the documentation:

http://localhost:3000/api-docs


##Use Postman for API Checkout

```bash
http://localhost:3000/auth/register

{
    "username":"Your username",
    "password":"Your password",
}

http://localhost:3000/auth/login
{
    "username":"Your username",
    "password":"Your password",
}

http://localhost:3000/books

Auth Types: Api Key
key: Authorization
Value: Your Token

{
    "title":"Your book Title",
    "author":"Author",
    "genre":"genre",
    "publicationDate":"Date",
    "price":"Price",
}

http://localhost:3000/cart & http://localhost:3000/orders

Headers Params
username: your username
password: your password

Auth Types: Api Key
key: Authorization
Value: Your Token

Query Params
bookId: your book
userId: your user

``
##Docker 
```bash
docker build -t bookstore-api .
docker run -p 3000:3000 -d bookstore-api
or 
docker-compose -f docker-compose.dev.yml up


##END





