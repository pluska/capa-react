import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Register from './pages/Register';
import Login from './pages/Login';
import MyReviews from './pages/MyReviews';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import ProfileSettings from './pages/ProfileSettings';
import { Navigate } from 'react-router-dom';
import AddReview from './pages/AddReview';



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

  return isAuthenticated ? children : <Navigate to="/login" state={{ redirect: window.location.pathname }} />;
};


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path='/example/'>
            <Route path="/example/nested" element={<ProfileSettings />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-reviews" element={<PrivateRoute><MyReviews /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/profile/settings" element={<PrivateRoute><ProfileSettings /></PrivateRoute>} />
          <Route path="/add-review" element={<PrivateRoute><AddReview /></PrivateRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
