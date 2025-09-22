"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  // Function used to store and update the state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to add focused class in input field
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-head">Login</h2>
        <div className="form-inputs">
          <div className={`username ${username || usernameFocused ? "focused" : ""}`}>
            <label htmlFor="user">Username</label>
            <input type="text"id="user" value={username} 
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              required/>
          </div>
          <div className={`password ${password || passwordFocused ? "focused" : ""}`}>
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required/>
          </div>
        </div>
        <button type="submit" className="login-btn primary-btn">Login</button>
      </form>
    </div>
  );
}


