import React from "react";
import { createStore } from "redux";
import UserCard from "./UserCard";
import reducer from "./reducers";
import "./styles.css";

//redux
const initialState = {
  url:
    "https://www.kindpng.com/picc/m/690-6904538_men-profile-icon-png-image-free-download-searchpng.png",
  profession: ["software Engineer", "writter"],
  likes: ["cats", "books", "black dresses"],
  name: "Shamiul Islam",
  email: "shamiulislam388@gmail.com",
  location: "Bangladesh"
};
const store = createStore(reducer, initialState);

export default function App() {
  return (
    <div className="App">
      <UserCard user={store.getState()} />
    </div>
  );
}
