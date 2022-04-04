'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '$2b$12$gqTeAdYQkgvNQnewv4OTQumz3wG4fP/.Kbf9Q5ZdWzaw8/S6OeeQ.',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: '$2b$12$RsV9XUmXbtAg/xXJGRg/duC3UGlLIz25u.6uc7mlqlmAandi/o4Oy',
  },
];

const getUser = (userName) => {
  return users.filter((item) => item.name === userName);
};

const getUserLogin = (email) => {
  const user = users.filter((usr) => {
      if (usr.email === email) {
      return usr;
    }
  }).pop();
  return user;
 };
 
export { users, getUser, getUserLogin };
