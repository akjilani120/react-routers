
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import FriendDetails from './Components/FriendDeatails/FriendDetails';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFount from './Components/NotFound/NotFount';
import Posts from './Components/Post/Posts';
import PostsDetails from './Components/PostsDetails/PostsDetails';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/friends' element={<Friends/>}></Route>
        <Route path='/friend/:details' element={<FriendDetails/>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
        <Route path=':postId' element={<PostsDetails></PostsDetails>}></Route>
        </Route>
        <Route path='*' element={<NotFount/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
