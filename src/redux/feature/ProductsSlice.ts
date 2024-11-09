import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Notebook,
  Phone,
  Product,
  ProductsState,
  Technique
} from "../../types/types";

const initialState: ProductsState = {
  isLoading: false,
  isError: null,
  phones: [],
  notebooks: [],
  techniques: [],
  homeandyard: [],
  toys: [],
  selectedProduct: null
};

export const fetchPhones = createAsyncThunk<
  Phone[],
  { limit?: number; offset?: number } | undefined
>("products/fetchPhones", async (params) => {
  try {
    const res = await axios.get(`http://localhost:8081/phones`, {
      params
    });
    const parsedPhones = res.data.map((phone: any) => ({
      ...phone,
      images: JSON.parse(phone.images || "[]")
    }));
    return parsedPhones;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch phones");
  }
});

export const fetchNotebooks = createAsyncThunk<Notebook[]>(
  "products/fetchNotebooks",
  async () => {
    try {
      const res = await axios.get("http://localhost:5050/notebooks");
      return res.data;
    } catch (error) {
      console.error(error);
      // throw new Error("Failed to fetch notebooks");
    }
  }
);

export const fetchTechniques = createAsyncThunk<
  Technique[],
  { limit?: number; offset?: number } | undefined
>("products/fetchTechniques", async (params) => {
  try {
    const res = await axios.get(`http://localhost:8081/techniques`, {
      params
    });
    const parsedTechniques = res.data.map((technique: any) => ({
      ...technique,
      images: JSON.parse(technique.images || "[]")
    }));
    return parsedTechniques;
  } catch (error) {
    // throw new Error("Failed to fetch techniques");
  }
});

export const fetchHomeAndYard = createAsyncThunk<Technique[]>(
  "products/fetchHomeAndYard",
  async () => {
    try {
      const res = await axios.get("http://localhost:5050/home-and-yard");
      return res.data;
    } catch (error) {
      console.error(error);
      // throw new Error("Failed to fetch techniques");
    }
  }
);

export const fetchToys = createAsyncThunk<Technique[]>(
  "products/fetchToys",
  async () => {
    try {
      const res = await axios.get("http://localhost:5050/toys");
      return res.data;
    } catch (error) {
      console.error(error);
      // throw new Error("Failed to fetch techniques");
    }
  }
);

export const fetchProductById = createAsyncThunk<
  Product,
  { id: number | string; category: string }
>("products/fetchProductById", async ({ id, category }) => {
  try {
    const res = await axios.get(`http://localhost:8081/${category}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product by ID");
  }
});

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhones.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPhones.fulfilled,
        (state, action: PayloadAction<Phone[]>) => {
          state.isLoading = false;
          state.phones = action.payload;
        }
      )
      .addCase(fetchPhones.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Failed to fetch phones";
      })
      .addCase(fetchNotebooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchNotebooks.fulfilled,
        (state, action: PayloadAction<Notebook[]>) => {
          state.isLoading = false;
          state.notebooks = action.payload;
        }
      )
      .addCase(fetchNotebooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Failed to fetch notebooks";
      })
      .addCase(fetchTechniques.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchTechniques.fulfilled,
        (state, action: PayloadAction<Technique[]>) => {
          state.isLoading = false;
          state.techniques = action.payload;
        }
      )
      .addCase(fetchTechniques.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "ERROR";
      })
      .addCase(fetchHomeAndYard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchHomeAndYard.fulfilled,
        (state, action: PayloadAction<Technique[]>) => {
          state.isLoading = false;
          state.homeandyard = action.payload;
        }
      )
      .addCase(fetchHomeAndYard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "ERROR";
      })

      .addCase(fetchToys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchToys.fulfilled,
        (state, action: PayloadAction<Technique[]>) => {
          state.isLoading = false;
          state.toys = action.payload;
        }
      )
      .addCase(fetchToys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "ERROR";
      })

      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.selectedProduct = action.payload;
        }
      )
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Failed to fetch product by ID";
      });
  }
});

export default ProductsSlice.reducer;
