import React from 'react'
import ReactDOM from 'react-dom/client'

import About from './pages/About/About.tsx'
import Home from './pages/Home/Home.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.tsx'
import Services from './pages/Services/Services.tsx'
import Portfolio from './pages/Portfolio/Portfolio.tsx'
import Contact from './pages/Contact/Contact.tsx'
import Carrers from './pages/Carrers/Carrers.tsx'
import { GlobalStyle } from './styles/GlobalStyles.ts'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"services",
        element: <Services/>
      },
      {
        path:"portfolio",
        element: <Portfolio/>
      },
      {
        path: "/project/:id",
        element: <ProjectDetails/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"carrers",
        element: <Carrers/>
      },
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
