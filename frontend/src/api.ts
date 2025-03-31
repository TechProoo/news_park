import axios from "axios";
// export const token = localStorage.getItem("auth_token");



export const getUserPostByTitle = async (id: string, title: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/blog/posts/${id}/${title}`,
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

export const getAllPost = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/blog/allpost", {
      headers: {
        "Content-Type": "application/json",
      },
    });
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


