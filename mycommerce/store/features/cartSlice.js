// Create cartSlice.js file
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    amount: 0,
    changed: false,
    isOpen: false,


};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
        },
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        }
    }
});
export const getItems = state => state.cart.items;
export const getTotalQuantity = state => state.cart.totalQuantity;
export const getChanged = state => state.cart.changed;
export const getAmount = state => state.cart.amount;
export const getIsOpen = state => state.cart.isOpen;

export const {replaceCart, addItemToCart, removeItemFromCart, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;