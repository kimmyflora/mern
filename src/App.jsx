import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react'


import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import OtherPage from "./pages/OtherPage/OtherPage";
import CommentPage from "./pages/CommentPage/CommentPage";

// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component
import userService from "./utils/userService";


function App() {
  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin() {
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
  }

  function logout() {
    console.log("happening");
    userService.logout();
    setUser(null);
  }

  if (!user) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<FeedPage  />} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path='/signup' element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/:username" element={<ProfilePage loggedUser={user} handleLogout={logout} />} />
        <Route path="/restaurant" element={<RestaurantPage loggedUser={user} handleLogout={logout}/>} />
        <Route path="/service" element={<ServicePage loggedUser={user} handleLogout={logout}/>} />
        <Route path="/other" element={<OtherPage loggedUser={user} handleLogout={logout}/>} />
        <Route path="/comments" element={<CommentPage loggedUser={user} handleLogout={logout}/>} />
      </Routes>

    </>

  );
}

export default App;
