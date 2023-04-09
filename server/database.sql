--single line sql comment
/* multi-line comment*/

CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY, --serial is a function that increases the primary key to ensure uniqueness
  description VARCHAR(255) --varchar indicates character limit
)