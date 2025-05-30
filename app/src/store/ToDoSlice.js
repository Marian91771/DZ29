import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const ToDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push({value: action.payload.value, id: Date.now()});
        },

        deleteItem: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        }
    }
})

export const {addItem, deleteItem} = ToDoSlice.actions;

export default ToDoSlice.reducer;