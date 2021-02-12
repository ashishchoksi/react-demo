import React, { Component, lazy, Suspense } from 'react';

const dropDownWithData = (props) => {
    // props.data
    // It should be in array form []

    let data = props.data;

    return (
        <select>
            <option>Select one</option>
            {
                data.map((val) => {
                    return (
                        <option key={val}>{val}</option>
                    )
                })
            }
        </select>
    )

};

export default dropDownWithData;