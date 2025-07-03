import React, { Suspense } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
// import Home from './pages/home/home'
// import Layout from './pages/layout/layout'
// import About from './pages/about/about'
import { Layout, Home, About, Category, Contact, Catalog, Main, Home2, About2, Category2, Catalog2, Main2, Contact2 } from './pages/lazy/lazy';
// import Contact2 from './pages/contact/contact2';
// import Catalog from './pages/catalog/catalog';
// import Main from './pages/main/main';
// import About2 from './pages/about/about2';


const App = () => {
  return (
    <>
      
    <BrowserRouter>
    <Suspense fallback={'Loading'}>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='category' element={<Category/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='catalog' element={<Catalog/>} />
      <Route path='about' element={<About/>} />
      <Route path='main' element={<Main/>} />


      <Route path='home2' element={<Home2/>} />
      <Route path='about2' element={<About2/>} />
      <Route path='category2' element={<Category2/>} />
      <Route path='contact2' element={<Contact2/>} />
      <Route path='catalog2' element={<Catalog2/>} />
      <Route path='main2' element={<Main2/>} />
      </Route>  
      </Routes>
    </Suspense>
    </BrowserRouter>

    </>
  )
}

export default App