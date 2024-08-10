import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchPostById } from "../services/postServices";
import LoadingSpinner from "../components/LoadingSpinner";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPostById(postId);
        if (response.error) {
          toast.error(response.error);
        } else {
          setPost(response);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [postId]);

  if (isLoading) return <LoadingSpinner />;
  if (error) throw error;

  return (
    <section className="row">
      <section className="col-sm-8 mx-auto mt-4">
        <article className="card rounded-2 shadow-lg my-3">
          <header className="card-header">{post.author}</header>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <Link
              to={`/post/edit/${post._id}`}
              className="btn btn-primary btn-sm my-2 rounded-2 px-2 py-1 mx-1"
            >
              Edit post
            </Link>
            <button className="btn btn-danger btn-sm my-2 rounded-2 px-2 py-1 mx-1">
              Delete post
            </button>
          </div>
        </article>
      </section>
    </section>
  );
};

export default SinglePostPage;
