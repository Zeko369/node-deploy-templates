const { config } = require("dotenv");
config();

module.exports = {
  apps: [
    {
      name: "App name",
      script: "./client/node_modules/.bin/next",
      args: "start ./client -p PORT",
      log_file: "./logs/client.log",
      time: true,
    },
    {
      name: "Server",
      script: "node",
      args: "./backend/dist/index.js",
      log_file: "./logs/server.log",
      time: true,
      env: {
        NODE_ENV: "development",
        PORT: 4000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 2135,
      },
    },
  ],
  deploy: {
    production: {
      user: "USER",
      host: "HOST",
      ref: "origin/master",
      repo: "git@github.com:Zeko369/REPO.git",
      path: "/home/USER/todo",
      "post-deploy": "./scripts/postdeploy.sh",
    },
  },
};
