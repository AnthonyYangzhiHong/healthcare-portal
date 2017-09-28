import querystring from 'querystring';

import Cookies from 'js-cookie';

const COOKIE_NAME = 'token_acquired';

export default class WebSecAuth {
  constructor() {
    this.authorization_url = process.env.REACT_APP_AUTHORIZATION_URL;

    this.request_args = {
      response_type: 'token',
      //scope: config.scope,
      pfidpadapterid: 'loginform',
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URL
    };

    // using session storage so we get a new token for each new
    // browsing session
    this.storage = window.sessionStorage;
  }

  redirect() {
    let uri = this.authorization_url + '?' + querystring.stringify(this.request_args);

    window.location.href = uri;
  }

  logout() {
    this.storage.clear();
    Cookies.remove(COOKIE_NAME);
    window.location.hash = '';
    window.location.reload(true);
  }

  isAuthenticated() {
    if (Cookies.get(COOKIE_NAME) && this.getAccessToken()) {
      return true;
    }
    if (window.location.hash) {
      let hash = window.location.hash.substring(1);
      let parsed = querystring.parse(hash);
      if (parsed.access_token) {
        let t = parsed.access_token;
        this.storage.setItem('websec-accesstoken', t);
        this.storage.setItem(
          'websec-profile-info',
          atob(t.substring(t.indexOf('.') + 1, t.lastIndexOf('.')))
        );
        var now = new Date().getTime();
        Cookies.set(COOKIE_NAME, now, {
          expires: new Date(now + process.env.REACT_APP_TOKEN_EXPIRATION_MINUTES * 60 * 1000)
        });
        return true;
      }
    }
    return false;
  }

  getUserName() {
    let profile = JSON.parse(this.storage.getItem('websec-profile-info'));
    let userName = '';
    if (profile) {
      userName = profile.COMCAST_USERNAME;
    }
    return userName;
  }

  getAccessToken() {
    return this.storage.getItem('websec-accesstoken');
  }
}
