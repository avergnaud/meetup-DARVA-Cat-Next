import { useState, useEffect } from 'react';
import Post from './components/Post';

function App() {

  const d = new Date();
  console.log(`executing App.js | ${d.toString()}`);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const reponseJson = await response.json();
      setPosts(reponseJson);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <h1>{d.toString()}</h1>
      <table>
        <tbody>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {posts.map(post => <Post
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />)}
        </tbody>
      </table>
    </main>
  );
}

export default App;
