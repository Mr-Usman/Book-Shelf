import React from 'react';

const Loader = (props) => {
    return (
        <div className="bookshelf">
            <h2 id="msgHeader" className="bookshelf-title">{props.msg}</h2>
        </div>
    )
}

export default Loader