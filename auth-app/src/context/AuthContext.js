import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const dummyUser = {
  username: "admin",
  password: "Admin@123",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    if (username === dummyUser.username && password === dummyUser.password) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
