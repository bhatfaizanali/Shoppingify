import React, { Component } from 'react';
import HistoryItems from "./HistoryItems"

class Month extends Component {
    state = {}
    render() {
        return (
            <>
                <div
                    style={{ padding: "1rem", fontFamily: "'Quicksand', sans-serif", fontWeight: "600", fontSize: "14px", lineHeight: "32px" }}>
                    {/* August 2020 */}
                </div>
                <div>
                    <HistoryItems setComponent={this.props.setComponent} />
                </div>
            </>
        );
    }
}

export default Month;
