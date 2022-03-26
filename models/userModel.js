'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
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
