import React from "react";
import Home from "./home";
import HTMLWrapper from "./HtmlWrapper";
import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <HTMLWrapper>
      <Provider store={store}>
        <Home />
      </Provider>
    </HTMLWrapper>
  );
}
