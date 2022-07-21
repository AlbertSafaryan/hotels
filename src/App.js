import React from 'react';
import {BrowserRouter as Router, Routes, Route, useSearchParams} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Results from './pages/Results';
import RegForm from './pages/RegForm';
import LogForm from './pages/LogForm';
import AdminHome from './pages/Admin/Home';
import AdminAddUser from './pages/Admin/users/AddUser';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reg' element={<RegForm/>}/>
          <Route path='/login' element={<LogForm/>}/>
          <Route path='/search/' element={<Results/>}/>
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/users/add' element={<AdminAddUser/>} />
          {/* <Route path="/category/:name" element={<Category/>}/> */}
          {/* <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/category/:name" element={<Category/>}/>
          <Route path="/recipe/:id" element={<Recipe/>}/> */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App