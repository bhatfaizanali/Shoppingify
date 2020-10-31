import React, { Component } from 'react';
import { Box } from "@chakra-ui/core";
import { BiCalendar, BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';

class HistoryItems extends Component {
    state = {}
    render() {
        return (
            <Box style={{ background: "white", display: "flex", justifyContent: "space-between", padding: "1.5rem", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)", border: "0.1rem", borderRadius: "1rem" }}>
                <span style={{ color: "black", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}>Hello</span>
                <div>
                    <span style={{ color: "#C1C1C4", padding: "1rem", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}> <BiCalendar /> Mon 27.08.2020  </span>
                    <span style={{ border: "0.1rem #56CCF2 solid", borderRadius: "1rem", padding: "0.1rem 0.5rem", color: "#56CCF2", cursor: "pointer", fontFamily: "'Quicksand', sans-serif", fontStyle: "normal", fontSize: "16px" }}>completed</span>
                    <span style={{ color: "#F9A109", marginLeft: "1rem" }}><BiRightArrowAlt size="1.5rem" /></span>
                </div>
            </Box>
        );
    }
}

export default HistoryItems;