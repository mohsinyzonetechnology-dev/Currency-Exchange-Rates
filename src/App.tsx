import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { useAuth } from './context/AuthContext'; // Hook use karein
import Navbar from './components/Navbar';
import Dashboard from './components/Dashbord';
import Form from './pages/Form';
import AuthForm from './auth/AuthForm';

const App = () => {
  const { user } = useAuth(); // Context se user lein

  return (
    <Box 
   
    >
      {user && <Navbar />}

      <Box  >
        {user && <Toolbar />} 
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashbord" /> : <Navigate to="/auth" />} />
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/auth" element={!user ? <AuthForm /> : <Navigate to="/dashbord" />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;