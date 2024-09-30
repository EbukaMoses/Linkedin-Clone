import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./Pages/Feed";
import NavBar from "./Component/Common/NavBar";
import Network from "./Pages/Network/Network";
import Notifications from "./Pages/Notifications/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/network" element={<Network />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
