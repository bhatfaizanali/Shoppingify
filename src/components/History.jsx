import React, { Component } from 'react';
import Month from "./Month";
import { connect } from "react-redux";


import { fetchLists } from "../actions";

class History extends Component {
    componentDidMount() {
        this.props.fetchLists()
    }
    render() {
        return (<div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
            <div
                style={{ marginBottom: "1rem", padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}>
                Shopping history
            </div>
            <div>
                <Month setComponent={this.props.setComponent} />
            </div>
        </div >);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLists: () => {
            dispatch(fetchLists());
        },
    };
};
export default connect(null, mapDispatchToProps)(History);