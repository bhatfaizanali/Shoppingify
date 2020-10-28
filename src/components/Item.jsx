import React, { Component } from 'react';
import { Box } from "@chakra-ui/core";
import { BiPlus } from "react-icons/all";


class Item extends Component {
    state = {}
    render() {
        return (<Box style={{ background: "white", display: "flex", justifyContent: "space-between", padding: "1rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem", borderRadius: "1rem" }}>
            <span style={{ fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}> Avacado</span>
            <span> <BiPlus color="#C1C1C4" /></span>
        </Box>);
    }
}

export default Item;