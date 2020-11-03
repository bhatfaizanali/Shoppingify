import React, { Component } from 'react';
import { Box } from "@chakra-ui/core";
import { BiCalendar, BiRightArrowAlt } from 'react-icons/bi';
import { connect } from 'react-redux';


class HistoryItems extends Component {
    state = {}
    render() {
        const lists = Object.entries(this.props.lists).map(list => {
            return (
                <Box onClick={() => this.props.setComponent("historyItemDetail", list)} key={list[0]} style={{ cursor: "pointer", marginBottom: "1rem", background: "white", display: "flex", justifyContent: "space-between", padding: "1.5rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem", borderRadius: "1rem" }}>
                    <span style={{ color: "black", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}>{list[1].name}</span>
                    <div>
                        <span style={{ color: "#C1C1C4", padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}> <BiCalendar /> {list[1].date} </span>
                        <span style={{ borderColor: list[1].status === "completed" ? "#56CCF2" : "red", border: "0.1rem  solid", borderRadius: "1rem", padding: "0.1rem 0.5rem", color: list[1].status === "completed" ? "#56CCF2" : "red", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}>{list[1].status}</span>
                        <span style={{ color: "#F9A109", marginLeft: "1rem" }}><BiRightArrowAlt size="1.5rem" /></span>
                    </div>
                </Box>
            )
        })
        return (
            <>{lists}</>
        );
    }
}
const mapStateToProps = state => {
    return {
        lists: state.lists,
    }
}

export default connect(mapStateToProps)(HistoryItems);