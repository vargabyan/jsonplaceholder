const express = require("express");
const path = require("path");
const app = express();

app.use(
  "/",
  express.static(path.join(path.parse(__dirname).dir, "client", "build"))
);

app.get("*", function (req, res) {
  res.sendFile(
    path.join(path.parse(__dirname).dir, "client", "build", "index.html")
  );
});

app.listen(5000, () => console.log("started 5000"));
