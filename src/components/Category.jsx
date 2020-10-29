import React, { Component } from 'react';
import { Text, Grid } from "@chakra-ui/core";
import { connect } from "react-redux";

import Item from "./Item"
import categories from "./dummyCategories.js";


class Category extends Component {
    state = {}

    render() {
        const category = Object.entries(categories).map(category => {
            const items = category[1].map(id => {
                return <Item name={this.props.items.items[id].name} />
            })
            return (
                <div style={{ paddingTop: "3rem" }}>
                    <Text fontFamily="'Quicksand', sans-serif" fontSize="18px" mb='20px'>{category[0]}</Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
                        {items}
                    </Grid>
                </div >
            )
        })
        return (

            <> {category}</>

        );
    }
}
const mapStateToProps = (state) => {
    return { items: state };
};
export default connect(mapStateToProps)(Category);


