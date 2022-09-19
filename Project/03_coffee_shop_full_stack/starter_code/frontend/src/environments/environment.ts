/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-pw7qslq6.us.auth0.com', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'Ze75gDRG4Am7N36eI14YPnOniUgTGUPR', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100/', // the base url of the running ionic application. 
  }
};
