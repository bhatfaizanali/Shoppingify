import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, Grid } from "@chakra-ui/core";

import Item from "./Item"

class HistoryItemDetails extends Component {
    state = {}
    render() {
        const category = Object.entries(this.props.lists).map(list => {
            console.log(list)
            //       return(<div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
            //       <div
            //           style={{ marginBottom: "1rem", padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}>
            //           Name
            //       </div>
            //       <div>
            //           <div
            //               style={{ padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "14px", lineHeight: "32px" }}>
            //               Date
            //           </div>
            //           <div>
            //               {category}
            //           </div>
            //       </div>
            //   </div >)
        })

        return (<div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
            <div
                style={{ marginBottom: "1rem", padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}>
                Name
            </div>
            <div>
                <div
                    style={{ padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "14px", lineHeight: "32px" }}>
                    Date
                </div>
                category
                <div>
                    Items
                </div>
            </div>
        </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        lists: state.lists,
    };
};
export default connect(mapStateToProps)(HistoryItemDetails);