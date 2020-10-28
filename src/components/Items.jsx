import React, { Component } from 'react';
import { Grid } from "@chakra-ui/core";
import { connect } from "react-redux";

import Search from "./Search";
import Category from "./Category"
import Item from "./Item"

class Items extends Component {
    state = {}

    render() {
        return (
            <div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
                <div style={{ display: "flex" }}>
                    <span style={{ width: "30rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}><span style={{ color: "#F9A109" }}>Shoppingify</span> allows you take your shopping list wherever you go</span>
                    <Search />
                </div >
                <div style={{ paddingTop: "3rem" }}>
                    <Category />
                    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </Grid>
                </div>

            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return { boards: state.boards };
};
export default connect(mapStateToProps)(Items);