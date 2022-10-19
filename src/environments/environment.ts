// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // userapi:"http://localhost:3000/users",
  userapi:"https://localhost:7179/api/Registrations",
  // userapi:"https://heroku-json-server-fakedata.herokuapp.com/users",
  // cartapi:"http://localhost:3000/cart",
  cartapi:"https://heroku-json-server-fakedata.herokuapp.com/cart",
  // productapi:"http://localhost:3000/product",
  productapi:"https://heroku-json-server-fakedata.herokuapp.com/product",
  // reviewapi:"http://localhost:3000/review",
  reviewapi:"https://heroku-json-server-fakedata.herokuapp.com/review"
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
