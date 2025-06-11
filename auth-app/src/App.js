import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AuthPanel from "./components/AuthPanel";

const App = () => {
  return (
    <AuthProvider>
      <AuthPanel />
    </AuthProvider>
  );
};

export default App;
