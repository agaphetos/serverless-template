const bcrypt = require('bcrypt');
const salt = process.env.SALT_ROUND || 10;

export const hash = (password) => bcrypt.hash(password, salt);

export const verify = (password, hash) => bcrypt.compare(password, hash);
