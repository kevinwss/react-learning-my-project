import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "../News";

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'skyblue', padding: 10 }}>
                <h1>Home</h1>

                <Routes>
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        );
    }
}