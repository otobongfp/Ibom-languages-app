import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceClient } from "../../utils/config";

const initialState = {
  message: "",
  loading: false,
  success: false,
  error: false,
};

export const postNoun = createAsyncThunk(
  "postNoun",
  async (nounDetails, { rejectWithValue }) => {
    try {
      const res = await serviceClient.post(`/noun`, {
        word: nounDetails.word,
        translation: nounDetails.translation,
        type: nounDetails.type,
      });
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

export const postWord = createAsyncThunk(
  "postWord",
  async (wordDetails, { rejectWithValue }) => {
    try {
      const res = await serviceClient.post(`/dictionary`, {
        word: wordDetails.word,
        translation: wordDetails.translation,
      });
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

const contributeSlice = createSlice({
  name: "contribute",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postNoun.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
        state.message = "";
      })
      .addCase(postNoun.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.message = "Successful";
        // state.singleWord = action.payload;
        console.log(action);
      })
      .addCase(postNoun.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = true;
        state.message = "Failed";
        // state.message = action.payload.message;
      });
    builder
      .addCase(postWord.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
        state.message = "";
      })
      .addCase(postWord.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        console.log(action);
        state.message = "Successful";
      })
      .addCase(postWord.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = true;
        state.message = action.payload.message;
        state.message = "Failed";
      });
  },
});

export default contributeSlice.reducer;
