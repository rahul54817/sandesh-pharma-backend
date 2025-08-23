const run = require("./src/server");

run().catch((error) =>
  console.log(
    `Error encountered - errMessage: ${error.message}\n errStack: ${error.stack}`
  )
);
