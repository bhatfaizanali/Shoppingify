import React, { Component } from 'react';
import { Box } from "@chakra-ui/core";
import { BiCalendar, BiRightArrowAlt } from 'react-icons/bi';
import { connect } from 'react-redux';


class HistoryItems extends Component {
    state = {}
    render() {
        const lists = Object.entries(this.props.lists).map(list => {
            return (<Box key={list[0]} style={{ background: "white", display: "flex", justifyContent: "space-between", padding: "1.5rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem", borderRadius: "1rem" }}>
                <span style={{ color: "black", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}>{list[1].name}</span>
                <div>
                    <span style={{ color: "#C1C1C4", padding: "1rem", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}> <BiCalendar /> {list[1].date} </span>
                    <span style={{ border: "0.1rem #56CCF2 solid", borderRadius: "1rem", padding: "0.1rem 0.5rem", color: "#56CCF2", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}>{list[1].status}</span>
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