import React, { Component } from 'react';

import Search from "./Search";
import Category from "./Category"

class Items extends Component {
    state = {}

    render() {
        return (
            <div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
                <div style={{ display: "flex" }}>
                    <span style={{ width: "30rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}><span style={{ color: "#F9A109" }}>Shoppingify</span> allows you take your shopping list wherever you go</span>
                    <Search />
                </div >
                <Category />
            </div >
        );
    }
}

export default Items;