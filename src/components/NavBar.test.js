import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

test('render content', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar />} />
                </Routes>
            </BrowserRouter>
        </Provider>)
    screen.getByText('Listado')
})