import './App.css'
import UserContextProvider from "./context/UserContextProvider.jsx";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";

function App() {


  return (
    <UserContextProvider>
        {/*{console.log('App.jsx')}*/}
        <h1>App</h1>
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App
