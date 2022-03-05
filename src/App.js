import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <h1 className="text-3xl text-red-800 text-center">Movie List</h1>
      <Movies />
    </>
  );
};

export default App;
