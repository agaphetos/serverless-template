import encrypt from './encrypt';
import localJwt from './localJwt';
import google from './google';


const auth = {
  jwt: localJwt,
  google,
  encrypt,
};

export default auth;
