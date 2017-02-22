import React from 'react';

export class User extends React.Component {

    render() {
        return (<div className="row">
            <p>NAME: {this.props.username}</p>
        </div>)
    }
}
