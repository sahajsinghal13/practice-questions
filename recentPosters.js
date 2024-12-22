// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const wasRecentlyActive = function (user) {
  return user.lastPostDate > '2024-12-14';
};

const filterRecentActiveUsers = function (users) {
  return users.filter(wasRecentlyActive);
 };

 console.log(filterRecentActiveUsers([
  {username: "alice", lastPostDate: "2024-12-21", active: true},
  {username: "frank", lastPostDate: "2024-12-15", active: true},
  {username: "bob", lastPostDate: "2024-11-20", active: true},
  {username: "alex", lastPostDate: "2024-12-14", active: true}
]));