require('custom-env').env(true)


const mongoDb = process.env.YATRIAMI_DB;
const port = process.env.PORT || 8081;

if (!mongoDb) {
  throw new Error(
    ".env is missing the definition of a port environmental variable",
  );
}

module.exports = {
  mongoDb,
  port
};
