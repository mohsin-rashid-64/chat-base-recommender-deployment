import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetails />} />
      
    </Routes>
  );
};

export default App;
