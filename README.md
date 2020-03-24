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

A `pre` middleware is used in Mongo in order to hash passwords before saving it to the database
