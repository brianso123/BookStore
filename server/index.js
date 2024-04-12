import express from "express";
import path from "path";
import { renderToPipeableStream } from "react-dom/server";
import App from "../client/App.tsx";
import React from "react";

const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/*", (req, res) => {
  // render the js bundle and stream to the user
  const stream = renderToPipeableStream(<App />, {
    bootstrapScripts: ["client.bundle.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      stream.pipe(res);
    },
  });
});

app.listen(3000, () => {
  console.log("listening on localhost:3000");
});
