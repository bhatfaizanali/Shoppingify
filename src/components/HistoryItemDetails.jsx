import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, Grid, Box } from "@chakra-ui/core";
import { BiCalendar } from 'react-icons/bi';
import { Link } from "react-router-dom"

class HistoryItemDetails extends Component {
    state = {}
    allEqual = arr => arr.every(v => v === arr[0])
    render() {
        const category = Object.entries(this.props.categories).map(category => {
            const items = category[1].map(id => {
                const temp = Object.entries(this.props.props[1].items).map(item => {
                    if (id === item[0]) {
                        return (
                            <Box key={id} style={{ background: "white", display: "flex", justifyContent: "space-between", padding: "1rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem", borderRadius: "1rem" }}>
                                <Link style={{ textDecoration: "none" }} to={`/itemDescription/${id}`}>
                                    <span style={{ color: "black", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}> {this.props.items[id].name}</span>
                                </Link>
                            </Box>
                        )
                    }
                    else {
                        return null
                    }
                })
                return temp
            })
            return (
                <div style={{ paddingTop: "3rem" }} key={category[0]}>
                    <Text fontFamily="'Quicksand', sans-serif" fontSize="18px" mb='20px'>{category[0]}</Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
                        {items}
                    </Grid>
                </div >
            )

        })
        const lists = Object.entries(this.props.lists).map(list => {
            if (list[0] === this.props.props[0]) {
                return (<div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
                    <span onClick={() => this.props.setComponent("history")} style={{ cursor: "pointer", color: "#F9A109", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "14px", lineHeight: "32px" }}> &lt; back</span>

                    <div
                        style={{ marginBottom: "1rem", padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}>
                        {list[1].name}
                    </div>
                    <div>
                        <div
                            style={{ color: "lightgray", padding: "0 1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "14px", lineHeight: "32px" }}>
                            <BiCalendar /> {list[1].date}
                        </div>
                        <div>
                            {category}
                        </div>
                    </div>
                </div >)
            }
        })

        return (
            <>
                {lists}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        lists: state.lists,
        categories: state.categories,
        items: state.items
    };
};
export default connect(mapStateToProps)(HistoryItemDetails);