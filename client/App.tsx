import React from "react";
import Home from "./pages/Home";
import HTMLWrapper from "./components/HtmlWrapper";
import store from "./stores/store";
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
