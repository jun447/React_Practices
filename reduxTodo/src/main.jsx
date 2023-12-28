import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from './app/store'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import CategoriesList from "./components/CategoriesList.jsx";
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <Provider store={store}>
//           <App />
//       </Provider>
//   </React.StrictMode>
// )
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
        >
            <Route
                path="/books" element={
                <Provider store={store}>
                    <App/>
                </Provider>

            }
            />
            <Route
                path="/books/categories"
                element={<CategoriesList/>}
            />
        </Route>

    ))
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        <RouterProvider router={router}/>

    </React.StrictMode>
)