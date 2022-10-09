//import logo from './logo.svg';

import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import {Route, Routes} from 'react-router-dom';
import EditPost from './EditPost';
// import {useState, useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
// import {format} from 'date-fns';
// import api from './api/posts';
// import useWindowSize from './hooks/useWindowSize';
// import useAxiosFetch from './hooks/useAxiosFetch';
import {DataProvider} from './context/DataContext';
function App() {
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState('');
  // const [postBody, setPostBody] = useState('');
  // const [editTitle, setEditTitle] = useState('');
  // const [editBody, setEditBody] = useState('');
  // const navigate = useNavigate();
  // const {width} = useWindowSize();
  
  // const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');
  
  // useEffect(() => {
  //   setPosts(data);
  // }, [data])



  // useEffect( () => {
  //   const filteredResults = posts.filter((post) => 
  //   ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
  //   ((post.title).toLowerCase()).includes(search.toLowerCase()));
  //   setSearchResults(filteredResults.reverse()); 

  // }, [posts, search])

  // useEffect( () => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       if (response && response.data) {
  //         setPosts(response.data)};
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPosts();
  // },[])


  // const handleDelete = async (id) => { 
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postsList = posts.filter((post) => post.id !== id);
  //     setPosts(postsList);
  //     navigate('/');
  //   } catch (err) {
  //     console.log(`Error:${err.message}`);
  //   }
    
    
  // }
  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(),'MMMM dd, yyyy pp'); 
  //   const updatedPost = {id, title:editTitle, datetime, body: editBody};
    
    
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost);
  //     setPosts(posts.map((post) => post.id === id? {...response.data} : post));
  //     setEditTitle('');
  //     setEditBody('');
  //     navigate('/');
  //   } catch (err) {
  //     console.log(`Error:${err.message}`);
  //   }

  
  
  // }



  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length? posts[posts.length-1].id+1:1;
  //   const datetime = format(new Date(),'MMMM dd, yyyy pp'); 
  //   const newPost = {id, title:postTitle, datetime, body: postBody};
  //   try {
  //   const response = await api.post('/posts',newPost);
  //   const allPosts = [...posts, response.data];
  //   setPosts(allPosts);
  //   setPostTitle('');
  //   setPostBody('');
  //   navigate('/');
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }


  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog"/>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/post" element={<NewPost/>}/>
          <Route exact path="/edit/:id" element={<EditPost/>}/>
          
          
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Missing/>}/> 
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
