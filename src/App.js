import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const[posts,setPosts]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      if(!response.ok){
        throw new Error('response was not ok')
        }
        return response.json();
    })
    .then(data=>{
      setPosts(data);
      setLoading(false);
    })
    .catch(err=>{
      setError(err);
      setLoading(false);
    });
  },[]);
  return (
    <div className="App">
      <h1>API Data:</h1>
      {loading?(
      <p>loading...</p>
      ):error?(
        <p>Error:{error.message}</p>
      ):(
        <ul>
          {posts.map(post=>(
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;
