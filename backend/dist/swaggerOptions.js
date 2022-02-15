export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Freelancers API",
      version: "1.0.0",
      description: ""
    },
    servers: [{
      url: "http://localhost:4001"
    }]
  },
  apis: ["./src/routes/**/*.js"]
};