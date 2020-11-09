import React, { Component } from 'react';
import { Text, Grid } from "@chakra-ui/core";
import { connect } from "react-redux";

import Item from "./Item"
import { setCategoryItems } from '../actions';


class Category extends Component {
    componentDidMount() {
        this.props.setCategoryItems()
    }
    render() {
        const category = Object.entries(this.props.categories).map(category => {
            let items = <></>
            if (category[1].items !== undefined) {
                items = category[1].items.map(id => {
                    if (this.props.items[id] !== undefined)
                        return <Item key={id} id={id} name={this.props.items[id].name} category={category[0]} />
                })
            }
            return (
                <div style={{ paddingTop: "3rem" }} key={category[0]}>
                    <Text fontFamily="'Quicksand', sans-serif" fontSize="18px" mb='20px'>{category[1].category_name}</Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
                        {items}
                    </Grid>
                </div >
            )
        })
        return (
            <>
                {category}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCategoryItems: () => {
            dispatch(setCategoryItems());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);


