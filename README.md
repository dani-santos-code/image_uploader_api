# Image Uploader API

An image uploader developed with Node, Express and Mongoose/MongoDB

## Running the Project

- Requirementes: [node.js / npm](https://www.npmjs.com/get-npm)
- Install [Mongo Community Edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- Go to the root directory and run `npm install` to install dependencies

## Validation and Sanitization

MongoDB provides a way to to build custom validators with `validate()`, which is used in this project in combination with [validator.js](https://www.npmjs.com/package/validator)

## Password Security

[Bcryptjs](https://www.npmjs.com/package/bcryptjs) is used to hash plain text to be stored in the DB

A `pre` middleware is used in the User Schema in order to hash passwords before saving them to the database

## Authentication / Session

For protected routes, JWTs are integrated with the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package

The User model is designed to allow for the storage of several tokens, so the user can keep the session live across different devices (e.g. phone, tablet, desktop, etc)

_An endpoint for logging out of all sessions is also provided_

## Public Profile

By using [toJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) in our DB Object, data such as password is not exposed to endpoints that have access to our user object(`req.user`)

## File Upload

[Multer](https://www.npmjs.com/package/multer) is being used for handling multipart/form-data when uploading files. It is maintained by the developers of [Express](https://github.com/expressjs).

## File Upload Security

- Only uploads of files with mimetype `png`, `jpeg`, and `jpeg` are allowed in this api
- The uploaded file is not larger than 2MB as specified
- Zip upload is not supported
- The library `hash-generator` is used in combination with `Date.now()`as a timestamp so the file has a new name when stored on the OS.

## Sensitive Data

- Upon request, I can provide you with a `.env`file that contains environment variables to run the project.

## Testing

- This project uses [Jest](https://jestjs.io/) for testing (A zero configuration testing framework), which makes it easy to set up.

- The assertion library used for HTTP tests is [SuperTest](https://www.npmjs.com/package/supertest)

- To run tests, run `npm test` (Once again, an `.env.test`should be provided. Please ping me for it.)
