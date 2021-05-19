"use strict";
const util = require("util");
const exec = util.promisify(require("child_process").exec);

(async () => {
  // const isAWS = await exec(`which aws`);
  // const cmd = isAWS ? "aws" : "aws2";
  await exec(
    `cross-env${
      process.env.AWS_ACCESS_KEY_ID
        ? ` AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID}`
        : ``
    }${
      process.env.AWS_SECRET_ACCESS_KEY
        ? ` AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY}`
        : ``
    } aws2 s3 sync ./storybook-static/ s3://lb-websites/web-components --delete`
  );
})();
