import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostAxio = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((error) => console.log('something went wrong'));
  }, []);

  return (
    <table>
      <tr>
        {Object.keys(posts[0] || {}).map((x) => (
          <th key={x}>{x}</th>
        ))}
      </tr>
      {posts.map((ob) => (
        <tr key={ob.id}>
          {Object.values(ob).map((y) => (
            <td key={y}>{y}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default PostAxio;