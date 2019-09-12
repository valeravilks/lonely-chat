import React from 'react';
import withStore from '~/hocs/withStore';

class First extends React.Component{
    render(){
        return (
            <div>
                First
            </div>
        );
    }
}

export default withStore(First);