import React from 'react';
import withStore from '~/hocs/withStore';

class Chat extends React.Component{
    render(){
        return (
            <div>
                Chat
            </div>
        );
    }
}

export default withStore(Chat);