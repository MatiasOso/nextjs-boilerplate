import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isOpenMenu: true,
    isOpenSubmenu: false,
    isOpenCart: false,

};
export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isOpenMenu = !state.isOpenMenu;
        },
        toggleSubmenu(state) {
            state.isOpenSubmenu = !state.isOpenSubmenu;
        },
        toggleCart(state) {
            state.isOpenCart = !state.isOpenCart;
        }
    }
});
export const getItems = state => state.home.items;
export const getIsOpenMenu = state => state.home.isOpenMenu;
export const getIsOpenSubmenu = state => state.home.isOpenSubmenu;
export const getIsOpenCart = state => state.home.isOpenCart;
export const {toggleMenu, toggleCart} = homeSlice.actions;