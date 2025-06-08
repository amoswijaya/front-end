import { createSlice } from "@reduxjs/toolkit";
type User = {
  uid: string;
  fullName: string;
  email: string;
};
interface IState {
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialState: IState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    success(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    error(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { startLoading, success, error, logout } = userSlice.actions;
export default userSlice.reducer;
