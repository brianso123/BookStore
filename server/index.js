import express from "express";
import path from "path";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import App from "../client/App.tsx";
import React from "react";

const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.static(path.resolve(__dirname, "../assets")));

app.get("/*", (req, res) => {
  const stream = renderToPipeableStream(<App />, {
    bootstrapScripts: ["client.bundle.js"],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      stream.pipe(res);
    },
  });
  // const html = renderToString(<App />);
  // res.send(html);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
