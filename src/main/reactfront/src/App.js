import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  //임시
  const RoutesData = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );

  const AxiosData = () => (
    <div>백엔드에서 가져온 데이터입니다 : {hello}</div>
  );

  return (
    <div>
      <AxiosData />
    </div>
  );
}

export default App;
