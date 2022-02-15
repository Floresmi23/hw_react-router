import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Boxes from "./components/pages/Boxes";
import BoxList from "./components/BoxList";
import BoxPage from "./components/BoxPage";
import Cool from "./components/pages/Cool";
import cools1 from "./components/pages/data/cools1";
import cools2 from "./components/pages/data/cools2";
import cools3 from "./components/pages/data/cools3";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}>

                    <Route path={"boxes"} element={<Boxes/>}>
                        <Route index element={<BoxList/>}/>
                        <Route path={":id"} element={<BoxPage/>}/>
                    </Route>
                    <Route index element={<Home/>}/>

                    <Route path={"cool"} element={<Cool/>}>
                        <Route path={"cools1"} element={<cools1/>}/>
                        <Route path={"cools2"} element={<cools2/>}/>
                        <Route path={"cools3"} element={<cools3/>}/>
            
                        
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

