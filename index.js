const app = require("./app");
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server listening at port - ${port}");
});