import auth0 from "auth0-js";

export default class Authenticator {
  constructor() {
    console.log(process.env);
    this.auth0 = new auth0.WebAuth({
      domain: process.env.VUE_APP_DOMAIN,
      clientID: process.env.VUE_APP_CLIENTID,
      redirectUri: process.env.VUE_APP_REDIRECTURI,
      audience: process.env.VUE_APP_AUDIENCE,
      responseType: "token id_token",
      scope:
        "openid email profile read:current_user create:current_user_metadata update:current_user_metadata delete:current_user_metadata",
    });
  }
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        console.log(authResult);
        resolve(authResult);
      });
    });
  }
  login() {
    console.log("logging in");
    this.auth0.authorize();
  }
  logout() {
    this.auth0.logout({
      returnTo: process.env.VUE_APP_LOGOUTURL,
    });
  }
}
