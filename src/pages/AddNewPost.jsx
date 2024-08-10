// import { useState } from "react";
// import { createPost } from "../services/postServices";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const STATUS = {
//   IDLE: "IDLE",
//   SUBMITTED: "SUBMITTED",
//   SUBMITTING: "SUBMITTING",
//   COMPLETED: "COMPLETED",
// };
// const initialState = {
//   title: "",
//   content: "",
//   author: "",
// };

// const getErrors = (postData) => {
//   const results = {};
//   if (!postData.title) {
//     results.title = "Title is required.";
//   } else if (postData.title && postData.title.length < 4) {
//     results.title = "Title must be more than 4 letters";
//   } else if (postData.title && postData.title.length > 100) {
//     results.title = "Title must not be more than 100 letters";
//   }

//   if (!postData.content) {
//     results.content = "Content is required.";
//   } else if (postData.content && postData.content.length < 4) {
//     results.content = "Content must be more than 4 letters";
//   } else if (postData.content && postData.content.length > 2000) {
//     results.content = "Title must not be more than 2000 letters";
//   }

//   if (!postData.author) {
//     results.author = "Author is required.";
//   }

//   return results;
// };

// const AddNewPost = () => {
//   const [postData, setPostData] = useState(initialState);
//   const [status, setStatus] = useState(STATUS.IDLE);
//   const [saveError, setSaveError] = useState(null);
//   const [touched, setTouched] = useState({});
//   const navigate = useNavigate();

//   const errors = getErrors(postData);
//   const isValid = Object.keys(errors).length === 0;

//   const handleChanged = (event) => {
//     setPostData((prevData) => {
//       return {
//         ...prevData,
//         [event.target.id]: event.target.value,
//       };
//     });
//   };

//   const handleBlur = (event) => {
//     setTouched((prevData) => {
//       return {
//         ...prevData,
//         [event.target.id]: true,
//       };
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setStatus(STATUS.SUBMITTING);

//     const data = {
//       title: postData.title,
//       content: postData.content,
//       author: postData.author,
//     };

//     if (isValid) {
//       try {
//         const response = await createPost(data);
//         if (response.error) {
//           toast.error(response.error);
//         } else {
//           setTimeout(() => {
//             setPostData({ ...postData });
//             setStatus(STATUS.COMPLETED);
//             toast.success(`Post created successfully.`);
//             navigate(`/posts`);
//           }, 3000);
//         }
//       } catch (error) {
//         console.error(error);
//         setSaveError(error);
//       }
//     } else {
//       setStatus(STATUS.SUBMITTED);
//     }
//   };

//   if (saveError) throw saveError;

//   return (
//     <div className="row">
//       <div className="col-sm-8 mx-auto mt-4 mb-2">
//         <h3>Add a New Post</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="title" className="form-label">
//               Title:
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               className="form-control"
//               placeholder="Enter title..."
//               value={postData.title}
//               onChange={handleChanged}
//               onBlur={handleBlur}
//             />
//             <p role="alert" className="text-danger">
//               {(touched.title || status === STATUS.SUBMITTED) && errors.title}
//             </p>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="content" className="form-label">
//               Content:
//             </label>
//             <textarea
//               id="content"
//               name="content"
//               className="form-control"
//               placeholder="Enter post content..."
//               value={postData.content}
//               onChange={handleChanged}
//               onBlur={handleBlur}
//             />
//             <p role="alert" className="text-danger">
//               {(touched.content || status === STATUS.SUBMITTED) &&
//                 errors.content}
//             </p>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="author" className="form-label">
//               Author:
//             </label>
//             <input
//               type="text"
//               id="author"
//               name="author"
//               className="form-control"
//               placeholder="Enter your name..."
//               value={postData.author}
//               onChange={handleChanged}
//               onBlur={handleBlur}
//             />
//             <p role="alert" className="text-danger">
//               {(touched.author || status === STATUS.SUBMITTED) && errors.author}
//             </p>
//           </div>

//           <button
//             disabled={status === STATUS.SUBMITTING}
//             className="btn btn-primary btn-sm my-2"
//           >
//             {status === STATUS.SUBMITTING ? "Submitting..." : "Add Post"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddNewPost;

import { useState } from "react";
import { createPost } from "../services/postServices";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

const initialState = {
  title: "",
  content: "",
  author: "",
};

const getErrors = (postData) => {
  const results = {};
  if (!postData.title) {
    results.title = "Title is required.";
  } else if (postData.title.length < 4) {
    results.title = "Title must be more than 4 letters.";
  } else if (postData.title.length > 100) {
    results.title = "Title must not be more than 100 letters.";
  }

  if (!postData.content) {
    results.content = "Content is required.";
  } else if (postData.content.length < 4) {
    results.content = "Content must be more than 4 letters.";
  } else if (postData.content.length > 2000) {
    results.content = "Content must not be more than 2000 letters.";
  }

  if (!postData.author) {
    results.author = "Author is required.";
  }

  return results;
};

const AddNewPost = () => {
  const [postData, setPostData] = useState(initialState);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const errors = getErrors(postData);
  const isValid = Object.keys(errors).length === 0;

  const handleChanged = (event) => {
    setPostData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleBlur = (event) => {
    setTouched((prevData) => ({
      ...prevData,
      [event.target.id]: true,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(STATUS.SUBMITTING);

    if (isValid) {
      try {
        await createPost(postData);
        setPostData(initialState); // Reset form after successful submission
        setStatus(STATUS.COMPLETED);
        toast.success("Post created successfully.");
        navigate(`/posts`); // Navigate to the posts page
      } catch (error) {
        console.error("Error creating post:", error);
        setSaveError(error.message);
        toast.error("Failed to create post.");
        setStatus(STATUS.IDLE);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };

  if (saveError) {
    return <div role="alert">Error: {saveError}</div>;
  }

  return (
    <div className="row">
      <div className="col-sm-8 mx-auto mt-4 mb-2">
        <h3>Add a New Post</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Enter title..."
              value={postData.title}
              onChange={handleChanged}
              onBlur={handleBlur}
            />
            <p role="alert" className="text-danger">
              {(touched.title || status === STATUS.SUBMITTED) && errors.title}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              placeholder="Enter post content..."
              value={postData.content}
              onChange={handleChanged}
              onBlur={handleBlur}
            />
            <p role="alert" className="text-danger">
              {(touched.content || status === STATUS.SUBMITTED) &&
                errors.content}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="form-control"
              placeholder="Enter your name..."
              value={postData.author}
              onChange={handleChanged}
              onBlur={handleBlur}
            />
            <p role="alert" className="text-danger">
              {(touched.author || status === STATUS.SUBMITTED) && errors.author}
            </p>
          </div>

          <button
            disabled={status === STATUS.SUBMITTING}
            className="btn btn-primary btn-sm my-2"
          >
            {status === STATUS.SUBMITTING ? "Submitting..." : "Add Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
