import axios from "axios";
// export const token = localStorage.getItem("auth_token");

export const getUserPostByTitle = async (id: string, title: string) => {
  try {
    const response = await axios.get(
      `https://news-park.onrender.com/api/blog/posts/${id}/${title}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("User Info Response:", response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
      return error.response.data;
    } else if (error.request) {
      console.error("No Response from Server");
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
};

export const incrementPost = async (post_id: number) => {
  try {
    const response = await axios.post(
      "https://news-park.onrender.com/api/blog/increment_view",
      { postId: post_id }, // Wrap post_id in an object
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Assuming the response has a 'data' field with the result
  } catch (error: any) {
    if (error.response) {
      console.error("Server Error:", error.response);
      return error.response.data; // Returning error response data for easier debugging
    } else if (error.request) {
      console.error("No Response from Server");
    } else {
      console.error("Request Error:", error.message);
    }
    throw new Error("Failed to increment post views"); // Provide a custom error message
  }
};

export const getCategory = async (cat: number) => {
  try {
    const response = await axios.get(
      `https://news-park.onrender.com/api/blog/category/${cat}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server Error:", error.response);
      return error.response.data;
    } else if (error.request) {
      console.error("No Response from Server");
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
};

export const getAllPost = async () => {
  try {
    const response = await axios.get(
      "https://news-park.onrender.com/api/blog/allpost",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server Error:", error.response);
      return error.response.data;
    } else if (error.request) {
      console.error("No Response from Server");
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
};
