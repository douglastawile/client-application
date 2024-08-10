import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import AddNewPost from "./pages/AddNewPost";

const App = () => {
  return (
    <main className="container">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="text-center mt-4">
                Welcome to Douglas Feed Application
              </h1>
              <p className="text-center mt-4">
                This app was just to test to see how to connect my front-end and
                my back-end
              </p>
            </div>
          }
        />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
        <Route path="/create" element={<AddNewPost />} />
      </Routes>
    </main>
  );
};

export default App;
