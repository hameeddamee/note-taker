if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "CHANGE TO ATLAS URL"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/note-taker" };
}
