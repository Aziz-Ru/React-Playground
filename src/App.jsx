import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./routes/dashboard/dashboard";
import Login from "./routes/login/login";
import Notfound from "./routes/Notfound";
import Post from "./routes/post/post";
import UserProfile from "./routes/profile/profile";
import User from "./routes/user/user";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
