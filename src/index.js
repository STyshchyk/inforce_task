import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Pages/App';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <h1> Error loading</h1>
    },
    {
        path: "product/:id",
        element: <p>Hello</p>,
        errorElement: <h1> Error card</h1>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} base={"/"}/>
        </Provider>
    </React.StrictMode>
);

