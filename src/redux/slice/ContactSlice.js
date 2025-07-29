import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (contact) => ({
        payload: {
          id: nanoid(),
          ...contact,
        },
      }),
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    updateContact: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
