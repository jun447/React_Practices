import './App.css'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth.js";
import {login,logout} from "./store/authSlice.js";
import {Footer, Header} from "./components/index.js";
import {Outlet} from "react-router-dom";

function App() {
    // console.log(import.meta.env.VITE_APPWRITE_ENDPOINT)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

  //   asking useEffect to check login or not
    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login(userData))
                }
                else {
                    dispatch(logout())
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return !loading ? (
        <div className={'min-h-screen flex flex-wrap content-between bg-gray-400'}>
            <div className={'w-full block'}>
                <Header/>
                <main>
                {/*todo*/}
                    {/*<Outlet/>*/}
                </main>
                <Footer/>
            </div>

        </div>
    ) : null
}

export default App
