import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchPosts } from "../services/postServices";
import LoadingSpinner from "../components/LoadingSpinner";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        if (response.error) {
          toast.error(response.error);
        } else {
          setPosts(response);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) throw error;

  return (
    <section className="row">
      <section className="col-sm-8 mx-auto mt-4">
        <h2 className="text-center">Recent Posts</h2>
        {posts.map((post, index) => {
          return (
            <article key={index} className="card rounded-2 shadow-lg my-3">
              <header className="card-header">{post.author}</header>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content.substring(0, 100)}...</p>
                <Link
                  to={`/post/${post._id}`}
                  className="btn btn-primary btn-sm my-2 rounded-2 px-2 py-1"
                >
                  Read more
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default PostsPage;
