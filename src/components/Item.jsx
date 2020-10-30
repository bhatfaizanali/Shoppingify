import React, { Component } from 'react';
import { Box } from "@chakra-ui/core";
import { BiPlus } from "react-icons/all";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { addItemToCurrentList } from "../actions";

class Item extends Component {
    state = {}
    render() {
        return (<Box style={{ background: "white", display: "flex", justifyContent: "space-between", padding: "1rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem", borderRadius: "1rem" }}>
            <Link style={{ textDecoration: "none" }} to={`/itemDescription/${this.props.id}`}>
                <span style={{ color: "black", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}> {this.props.name}</span>
            </Link>
            <span onClick={() => this.props.addItemToCurrentList(this.props.id)}><BiPlus style={{ cursor: "pointer" }} color="#C1C1C4" /></span>
        </Box>);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCurrentList: (id) => {
            dispatch(addItemToCurrentList(id));
        },
    };
};
export default connect(null, mapDispatchToProps)(Item);