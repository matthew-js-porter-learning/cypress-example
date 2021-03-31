# Cypress Example
 
This is example of using [Cypress](https://www.cypress.io/) for End to End UI Testing and was created using
[Create React App](https://github.com/facebook/create-react-app). This project includes a [Github Workflow](.github/workflows/node.js.yml)
that deploys to a [static S3 Site](http://cypress-example.s3-website-us-east-1.amazonaws.com) and runs the test against it.

## Run Cypress Tests

### Start Development Server

To start the development server run the following command
```shell
npm start
```

The application will be available at http://localhost:3000

### Run Cypress Tests

To run the Cypress tests, run the following command.
```shell
npm run cypress:run
```

To open the Cypress run
```shell
npm run cypress:open
```

## Deploy

### Cloudformation
First create the S3 Bucket.
```shell
aws cloudformation update-stack --stack-name cypress-example --template-body file://aws/cloudformation.yml
```

### Deploy to S3
```shell
npm run build
aws s3 sync build s3://cypress-example
```

### Run Tests against remote server
```shell
export CYPRESS_BASE_URL=http://cypress-example.s3-website-us-east-1.amazonaws.com
npm run cypress:run
```