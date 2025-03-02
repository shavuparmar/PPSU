import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"


import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Chatting from './Pages/Chatting';
import ErrorPages from './Pages/ErrorPages';


const root = ReactDOM.createRoot(document.getElementById('root'));
const allrouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'Chatting',
    element: <Chatting />
  },
  {
    path: 'Upload',

  },
  {
    path: 'Profile',
    element: <Profile />
  },
  
  {
    path: "*",
    element:<ErrorPages/>
   
  },
 
])







root.render(
  <React.StrictMode>
    <RouterProvider router={allrouter}></RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
