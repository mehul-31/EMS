import { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const loggedData = JSON.parse(loggedInUser);
      setUser(loggedData.role);
      
      if (loggedData.role === "employee") {
        const employee = authData.userData?.find((emp) => emp.email === loggedData.email);
        setLoggedInUserData(employee);
      }
    }
    setIsLoading(false);
  }, [authData.userData]);

  // Add event listener for page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('userRole');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLogin = (email, password) => {
    if (!authData.userData) {
      alert("User data not yet loaded, please try again in a moment.");
      return;
    }
  
    if (email === import.meta.env.VITE_ADMIN_EMAIL && password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", email }));
      return;
    }
  
    const employee = authData.userData.find(
      (user) => user.email === email && user.password === password
    );
  
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", email }));
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1c1c1c]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="app-container">
        {user && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
        {!user ? (
          <Login handleLogin={handleLogin} />
        ) : user === "admin" ? (
          <AdminDashboard />
        ) : (
          <EmployeeDashboard data={loggedInUserData} />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
