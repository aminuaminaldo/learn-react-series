import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
