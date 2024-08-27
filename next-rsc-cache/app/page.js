import Post from '@/app/components/Post';

export default async function Home() {

  const d = new Date();
  console.log(`executing App.js | ${d.toString()}`);

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { cache: 'no-store' }
  );
  const posts = await response.json();

  return (
    <main>
      <h1 name='h1-timestamp'>{d.toString()}</h1>
      <table>
        <tbody>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {posts.map(post => <Post
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />)}
        </tbody>
      </table>
    </main>
  );
}
