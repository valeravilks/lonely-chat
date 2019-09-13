import React from 'react';
import withStore from '~/hocs/withStore';
import { Form, Button } from 'react-bootstrap';

class Chat extends React.Component{
    input = React.createRef();

    sendName = () => {
        event.preventDefault();
        this.props.stores.storage.setName(this.input.current.value);
        // this.forceUpdate();
    };

    render(){
        return (
            <div>
                <h1 className="text-center mb-5 mt-5">Lonely Chat</h1>
                <Form className="text-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder=""
                            ref={this.input}
                        />
                    </Form.Group>
                    <Button onClick={this.sendName} variant="primary" type="submit">
                        Start chat
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withStore(Chat);