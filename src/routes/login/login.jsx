import { useState } from "react";
import { apiRequest } from "../../lib/apiRequest";
import "./login.scss";
const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const LoginHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(e.target);
    const uid = formData.get("uid");
    const password = formData.get("password");
    const role = formData.get("role");
    try {
      const res = await apiRequest.post("/auth/login", {
        uid,
        password,
        role,
      });
      console.log(res.data);
      console.log(res);
    } catch (err) {
      setError(err.response.data.errors[0].msg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-container">
      <form className="loginForm" onSubmit={LoginHandler}>
        <div>
          <h1>Admin Login</h1>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="uid" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <select name="role" id="">
            <option value="Admin">Admin</option>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Login" disabled={loading} />
        </div>

        <div>
          <h5>{error}</h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
