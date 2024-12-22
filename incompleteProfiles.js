// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const isIncomplete = function (profile) {
  return !profile.profileComplete;
};

const filterIncompleteProfiles = function (users) {
  return users.filter(isIncomplete);
};

console.log(filterIncompleteProfiles([
  { username: "alice", profileComplete: true },
  { username: "bob", profileComplete: false }]));