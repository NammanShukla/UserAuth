import { useAuth } from "../context/AuthContext";
import LoginForm from "./LoginForm";

const AuthPanel = () => {
  const { user, logout } = useAuth();

  return (
    <div className="auth-panel">
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <button onClick={logout} className="auth-button logout">
            Logout
          </button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default AuthPanel;
