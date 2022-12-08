export const api = {
  url: "https://www.omdbapi.com/",
  key: "742aeb0c",
};

export const authUsers = [
  {
    id: "1001",
    username: "admin",
    name: "Admin",
    password: "1234",
  },
  {
    id: "1002",
    username: "admin1",
    name: "Admin",
    password: "12345",
  },
];

const Config = {
  authUsers,
  api,
};

export default Config;
