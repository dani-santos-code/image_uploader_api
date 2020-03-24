# Image Uploader API

An image uploader developed with Node, Express and Mongoose/MongoDB

## Running the Project

- Requirementes: node.js / npm
- Install [Mongo Community Edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- Go to the root directory and run `npm install`

## Validation and Sanitization

MongoDB provides a wait to to build custom validators with `validate()`, which is used in this project in combination with [validator.js](https://www.npmjs.com/package/validator)

## Password Security

[Bcryptjs](https://www.npmjs.com/package/bcryptjs) is used to hash plain text to be stored in the DB

A `pre` middleware is used in Mongo in order to hash passwords before saving them to the database

## Authentication / Session

For protected routes, JWTs are integrated with the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package

The User model is designed to allow for the storage of several tokens, so the user can keep the session live across differentdevices (e.g. phone, tablet, desktop, etc)
