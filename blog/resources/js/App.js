import React, {Fragment} from 'react';
import AppRoute from "./route/AppRoute";
import {BrowserRouter} from "react-router-dom";
function App() {
    return (
        <BrowserRouter >
            <AppRoute/>
        </BrowserRouter>
    );
}
export default App;
