import React, { Component } from 'react';
import Month from "./Month"

class History extends Component {
    state = {}
    render() {
        return (<div style={{ background: " #FAFAFE", padding: "2rem 3rem", flex: '1' }}>
            <div
                style={{ marginBottom: "1rem", padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "26px", lineHeight: "32px" }}>
                Shopping history
            </div>
            <div>
                <Month />
            </div>
        </div >);
    }
}

export default History;