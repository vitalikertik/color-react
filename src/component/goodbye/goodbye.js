import * as React from 'react';

class Goodbye extends React.Component{
    render(){
        return (
            <div>
                <h1>Goodbye, {this.props.formatName(this.props.name, 'asda')}</h1>
            </div>
        );
    }
}

export default Goodbye;
