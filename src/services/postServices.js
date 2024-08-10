import httpClient from "../utilities/httpClient";

// Fetch a list of users
export const fetchPosts = async () => {
  try {
    const response = await httpClient.get("/posts");
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error; // Rethrow error to handle it in the component
  }
};

// Fetch a single user by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await httpClient.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error.message);
    throw error;
  }
};

export const updatePost = async (postId, updatedData) => {
  try {
    const response = await httpClient.put(`/posts/${postId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with ID ${postId}:`, error.message);
    throw error;
  }
};

// Delete a post by ID
export const deletePost = async (postId) => {
  try {
    const response = await httpClient.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error.message);
    throw error;
  }
};
