import axios from "axios";
export const token = localStorage.getItem("auth_token");

export const getAllUser = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/user/user_info",
      {
        headers: {
          Authorization: `Bearer ${token}`,
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

export const getUserPost = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/blog/posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
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

export const getUserPostByTitle = async (id: string, title: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/blog/posts/${id}/${title}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
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

export const signUp = async (userData: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("SignUp Response:", response.data);
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

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/blog/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Delete Post Response:", response.data);
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

export interface BlogPost {
  title: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  author: string;
  authorEmail: string;
  image: File;
  user_id: string;
}

export const createPost = async (postData: BlogPost) => {
  console.log(token);
  try {
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("description", postData.description);
    formData.append("category", postData.category);
    formData.append("content", postData.content);
    formData.append("author", postData.author);
    formData.append("authorEmail", postData.authorEmail);
    formData.append("user_id", postData.user_id);

    // Convert tags array to JSON string
    formData.append("tags", JSON.stringify(postData.tags || []));

    if (postData.image) {
      formData.append("file", postData.image); // Change "image" → "file" to match backend
    }

    const response = await axios.post(
      `http://localhost:5000/api/blog/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Create Post Response:", response);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server Error:", error);
      return error.response.data;
    } else if (error.request) {
      console.error("No Response from Server");
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
};
