import React, { Component } from 'react';

class DropDownWithChage extends Component {

    /*
    props:
        data, changed
        data : [] array
    */

    state = null

    render() {
        return (
            <div>
                <select onChange={this.props.changed}>
                    <option>Select</option>
                    {
                        this.props.data.map((val) => {
                            return (<option value={val} key={val}>{val}</option>)
                        })
                    }
                </select>


            </div>
        )
    }

}

export default DropDownWithChage;