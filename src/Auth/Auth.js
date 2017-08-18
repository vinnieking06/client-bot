import auth0 from 'auth0-js';


export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  auth0 = new auth0.WebAuth({
    domain: 'vinnieking06.auth0.com',
    clientID: '5A0B7LQXAXQPB_76_ta7M5xw5_chBhaP',
    redirectUri: 'http://localhost:3000/account',
    audience: 'https://vinnieking06.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log(err, authResult)
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  getId() {
    return localStorage.getItem('id');
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log(authResult)
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id', authResult.idTokenPayload.sub );
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.setItem('id');
    // navigate to the home route
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }


}


// var lock = new Auth0Lock('5A0B7LQXAXQPB_76_ta7M5xw5_chBhaP', 'vinnieking06.auth0.com', {
//     auth: {
//       redirectUrl: 'http://localhost:3000/account',
//       responseType: 'token',
//       params: {
//         scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
//       }
//     }
//   });

