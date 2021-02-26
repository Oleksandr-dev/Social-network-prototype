import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewPostMessage} from "./redux/state";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} changeNewPostMessage={changeNewPostMessage}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}

