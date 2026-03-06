require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL)
    .then(_result => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.error(err));

const indexRouter = require("./routes/index");
const AuthRouter = require("./routes/auth");
const UsersRouter = require("./routes/users");
const PostsRouter = require("./routes/posts");
const CommentsRouter = require("./routes/comments");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/users", UsersRouter);
app.use("/api/posts", PostsRouter);
app.use("/api/comments", CommentsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
