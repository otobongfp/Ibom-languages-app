import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceClient } from "../../utils/config";

const initialState = {
  allWords: [],
  singleWord: {},
  loading: false,
  success: false,
  error: false,
  singleNoun: {},
  allNouns: [],
};

export const getAllNouns = createAsyncThunk(
  "getAllNouns",
  async (type, { rejectWithValue }) => {
    try {
      const res = await serviceClient.get(`/noun/type?query=${type}`);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getSingleNoun = createAsyncThunk(
  "getSingleNoun",
  async ({ type, word }, { rejectWithValue }) => {
    try {
      const res = await serviceClient.get(`/noun?query=${word}&type=${type}`);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getAllWords = createAsyncThunk(
  "getAllWords",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const res = await serviceClient.get(
        `/dictionary/words?page=${page}&limit=${limit}`
      );
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getSingleWord = createAsyncThunk(
  "getSingleWord",
  async (word, { rejectWithValue }) => {
    try {
      const res = await serviceClient.get(`/dictionary/word?query=${word}`);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSingleWord: (state) => {
      return { ...state, singleWord: [] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAllWords.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.allWords = action.payload;
        state.singleWord = {};
      })
      .addCase(getAllWords.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = true;
        state.message = action.payload.message;
      });
    builder
      .addCase(getAllNouns.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAllNouns.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.allNouns = action.payload;
        state.singleNoun = {};
      })
      .addCase(getAllNouns.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = true;
        state.message = action.payload.message;
      });
    builder
      .addCase(getSingleWord.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getSingleWord.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.singleWord = action.payload;
      })
      .addCase(getSingleWord.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = true;
        state.message = action.payload.message;
      });

    builder
      .addCase(getSingleNoun.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getSingleNoun.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.singleNoun = action.payload;
      })
      .addCase(getSingleNoun.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = true;
        state.message = action.payload.message;
      });
  },
});

export const { clearSingleWord } = searchSlice.actions;

export default searchSlice.reducer;
