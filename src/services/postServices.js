// import httpClient from "../utilities/httpClient";

const BASE_URL = "https://server-application-6b9w.onrender.com/api/posts";

export const createPost = async (postData) => {
  try {
    const response = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    return response.json();
  } catch (error) {
    console.error(`Error creating post`, error.message);
    throw error;
  }
};

// Fetch a list of users
export const fetchPosts = async () => {
  try {
    const response = await fetch(BASE_URL);
    return response.json(); // Return the data from the response
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error; // Rethrow error to handle it in the component
  }
};

// Fetch a single user by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`);
    return response.json();
  } catch (error) {
    console.error(
      `Error fetching post with ID ${postId}:`,
      error.message
    );
    throw error;
  }
};

export const updatePost = async (postId, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  } catch (error) {
    console.error(`Error updating post with ID ${postId}:`, error.message);
    throw error;
  }
};

// Delete a post by ID
export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/${postId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error.message);
    throw error;
  }
};
