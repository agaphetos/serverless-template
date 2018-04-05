import localJwt from './localJwt';
import google from './google';

const auth = {
  jwt: localJwt,
  google,
};

export default auth;
