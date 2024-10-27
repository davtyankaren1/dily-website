import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhones = createAsyncThunk(
  "products/fetchPhones",
  async () => {
    try {
      const res = await axios.get("http://localhost:5050/phones");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchNotebooks = createAsyncThunk(
  "products/fetchNotebooks",
  async () => {
    try {
      const res = await axios.get("http://localhost:5050/notebooks");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchTechniques = createAsyncThunk(
  "products/fetchTechniques",
  async () => {
    try {
      const res = await axios.get("http://localhost:5050/techniques");
      console.log(res.data, "techniques+++++++++++");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async ({ id, category }: any) => {
    try {
      const res = await axios.get(`http://localhost:5050/${category}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    isError: null,
    phones: [],
    notebooks: [],
    techniques: [],
    selectedProduct: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhones.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.phones = action.payload;
      })
      .addCase(fetchPhones.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchNotebooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNotebooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notebooks = action.payload;
      })
      .addCase(fetchNotebooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchTechniques.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTechniques.fulfilled, (state, action) => {
        state.isLoading = false;
        state.techniques = action.payload;
      })
      .addCase(fetchTechniques.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export default ProductsSlice.reducer;
