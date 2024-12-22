// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const isActive = function (user) {
  return user.active;
};

const filterActiveUsers = function (users) {
  return users.filter(isActive);
};

console.log(filterActiveUsers([{username: "alice", active: true}, {username: "bob", active: false}]));
