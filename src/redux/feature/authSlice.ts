// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   email: string;
//   basket: string;
// }

// interface AuthState {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   loading: false,
//   error: null
// };

// // export const loginUser = createAsyncThunk(
// //   "auth/loginUser",
// //   async (credentials: { name: string; password: string }) => {
// //     const response = await axios.post(
// //       "http://localhost:8081/login",
// //       credentials
// //     );
// //     return response.data;
// //   }
// // );

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (credentials: { name: string; password: string }) => {
//     const response = await axios.post("/login", credentials);
//     // Store the token in local storage
//     localStorage.setItem("token", response.data.token);
//     return response.data.user; // Assuming the user data is returned here
//   }
// );

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (userData: {
//     name: string;
//     surname: string;
//     email: string;
//     password: string;
//   }) => {
//     const response = await axios.post(
//       "http://localhost:8081/register",
//       userData
//     );
//     return response.data;
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Login failed";
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Registration failed";
//       });
//   }
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  basket: string[]; // Changed to an array if it's meant to hold multiple items
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
};

// Login user action
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { name: string; password: string }) => {
    const response = await axios.post(
      "http://localhost:8081/login",
      credentials
    );
    // Store the token in local storage
    localStorage.setItem("token", response.data.token);
    return response.data.user; // Assuming the user data is returned here
  }
);

// Register user action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => {
    const response = await axios.post(
      "http://localhost:8081/register",
      userData
    );
    // Automatically log the user in after successful registration
    localStorage.setItem("token", response.data.token); // Store token if returned
    return response.data.user; // Assuming the user data is returned here
  }
);

// Authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token"); // Clear the token on logout
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state on new request
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Set the user object
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state on new request
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Automatically log the user in
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Registration failed";
      });
  }
});

// Export the logout action and reducer
export const { logout } = authSlice.actions;

export default authSlice.reducer;
