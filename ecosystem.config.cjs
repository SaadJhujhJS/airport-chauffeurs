module.exports = {
  apps: [
    {
      name: "airportchauffeurs",
      script: ".output/server/index.mjs",
      exec_mode: "cluster",
      instances: "max",
      env: {
        PORT: 3002,
        NODE_ENV: "production",
      },
    },
  ],
};
