import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();
  const { slug } = params; // Access the dynamic slug
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is the content for the blog post with the slug: {slug}.</p>
    </div>
  );
};

export default BlogPost;
