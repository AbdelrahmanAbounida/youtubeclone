import './App.css';
// import  Container  from '@mui/material/Container';
import {Outlet, Route,Routes} from 'react-router-dom'
import {Navbar, Page,Feed} from './components'
import { useState } from 'react';
import VideoPage from './components/VideoPage';
import VideoSearch from './components/VideoSearch';


function App() {

  const [currentCategory,setCurrentCategory] = useState("Python");

  return (
    <div className="App">

          <Navbar />
          <Routes>
              <Route path="/" element={<Feed  currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />} />
              <Route path="/video/:id" element={<VideoPage />} />
              <Route path="/search/:searchItem" element={<VideoSearch />} />

              {/* <Route path='/login' element={<Login />} /> */}
          </Routes>
          <Outlet context={{'page_num':12}} />
    </div>
  );
}

export default App;
