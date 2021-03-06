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
import Object1 from "./components/pages/data/Object1";
import Object2 from "./components/pages/data/Object2";
import Object3 from "./components/pages/data/Object3";


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

                    <Route path= {"Cool"} element={<Cool/>}>
                        <Route path={":object1"} element={<Object1/>}/>
                        <Route path={":object2"} element={<Object2/>}/>
                        <Route path={":object3"} element={<Object3/>}/>
                    </Route>

                    <Route path ={"/object1"} element={<Object1/>}>
                        <Route index element={<Object1/>}/>
                    </Route>

                    <Route path ={"/object2"} element={<Object2/>}>
                        <Route index element={<Object2/>}/>
                    </Route>

                    <Route path ={"/object3"} element={<Object3/>}>
                        <Route index element={<Object3/>}/>
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

