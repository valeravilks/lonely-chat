import FirstScreen from '~c/first-screen';
import ChatScreen from '~c/chat-screen';

import React from 'react';
import withStore from '~/hocs/withStore';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <FirstScreen/>
                        <ChatScreen/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStore(App);