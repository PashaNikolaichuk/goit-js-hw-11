// У файлі main.js
import validator from 'validator';

console.log(
  'Is mango@mail.com a valid email?: ',
  validator.isEmail('mango@mail.com')
); // Is mango@mail.com a valid email?: true

console.log(
  'Is Mangodogmail.com a valid email?: ',
  validator.isEmail('Mangodogmail.com')
); // Is mango@mail.com a valid email?: false
