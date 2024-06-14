import { useEffect, useReducer, useState } from "react";
import Header from "./component/Header";
import SideBar from "./component/Leftmenu";
import Weather from "./home";
import axios from "axios";
import UserContext from "./Context/Context";
import UserDetails from "./component/UserDetails.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAction } from "./component/useraction";
import Todo from "./component/todo";

const initialState = {
  weather: null,
  todo: [],
  search: "madurai",
};

function App() {
  // const [state, dispatch] = useReducer(UserDetails, initialState);

  const [state, dispatch] = useReducer(UserDetails, initialState);
  // const [city, setCity] = useState("madurai");
  console.log("statevv", state);
  let apiKey = "fa02f20c2acd4e5ece34e968a6337974";

  const getUser = async (data) => {
    console.log("data", data);
    // setCity(data);
    // const city = "Chennai";
    // const units = "metric"; // Ensure 'metric' is used consistently
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiKey}&units=Metric`;

    let res = await axios(url);
    dispatch({ type: UserAction.WEATHERADD, payload: res.data });

    // console.log("datazx", res);
  };

  useEffect(() => {
    console.log("state.search", state);
    // setCity(state.search);
    getUser(state.search);
  }, [state.search]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Todo />}></Route>
          <Route exact path="/weather" element={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="App">
//       {/* Header */}
//       <header className="Header">
//         <h1>Header</h1>
//         <button onClick={toggleSidebar}>Toggle Sidebar</button>
//       </header>

//       {/* Sidebar */}
//       <aside className={`Sidebar ${isOpen ? "open" : ""}`}>
//         <h2>Sidebar</h2>
//         <ul>
//           <li>Link 1</li>
//           <li>Link 2</li>
//           <li>Link 3</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="Content">
//         <h2>Main Content</h2>
//         <p>This is the main content area.</p>
//       </main>
//     </div>
//   );
// }

// export default App;
