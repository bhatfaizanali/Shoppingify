import React, { Component } from 'react';
import { Grid, Box } from "@chakra-ui/core";

import Search from "./Search";

class Items extends Component {
    state = {}
    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <span style={{ fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontWeight: "bold", fontSize: "26px", lineHeight: "32px" }}><span style={{ color: "#F9A109" }}>Shoppingify</span> allows you take your shopping list wherever you go</span>
                    <Search />
                </div >
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    <Box style={{ display: "flex", justifyContent: "space-between", padding: "1rem", boxShadow: "0.01rem 0.01rem 0.1rem 0.1rem #5555", border: "0.1rem", borderRadius: "1rem" }}>
                        <span>Avacado</span>
                        <span>+</span>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-between", padding: "1rem", boxShadow: "0.01rem 0.01rem 0.1rem 0.1rem #5555", border: "0.1rem", borderRadius: "1rem" }}>
                        <span>Avacado</span>
                        <span>+</span>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "space-between", padding: "1rem", boxShadow: "0.01rem 0.01rem 0.1rem 0.1rem #5555", border: "0.1rem", borderRadius: "1rem" }}>
                        <span>Avacado</span>
                        <span>+</span>
                    </Box>
                </Grid>
            </div >
        );
    }
}

export default Items;