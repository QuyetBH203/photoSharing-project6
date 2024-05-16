const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const UserRouter = require("./routes/UserRouter");
const PhotoRouter = require("./routes/PhotoRouter");
const AuthRouter = require("./routes/AuthRouter");
// const CommentRouter = require("./routes/CommentRouter");

const checkUserJwt = require("./middleware/JWTAction");

dbConnect();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  if (req.path.startsWith("/api/auth")) {
    return next();
  }
  checkUserJwt(req, res, next);
});

app.use("/api/user", UserRouter);
app.use("/api/photo", PhotoRouter);
app.use("/api/auth", AuthRouter);

app.get("/", (request, response) => {
  response.status(200).send({ message: "Hello from photo-sharing app API!" });
});

app.listen(8081, () => {
  console.log("server listening on port 8081");
});
