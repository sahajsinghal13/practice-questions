// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const getDomain = function (email) {
  return email.split('@')[1];
};

const domainNamesOf = function (emails) {
  return emails.map(getDomain);
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));