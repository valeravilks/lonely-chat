import FirstScreen from '~c/first-screen';
import ChatScreen from '~c/chat-screen';

import React from 'react';
import withStore from '~/hocs/withStore';

class App extends React.Component{
    render(){
        return(
            <div>
                <FirstScreen/>
                <ChatScreen/>
            </div>
        )
    }
}

export default withStore(App);