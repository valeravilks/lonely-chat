import React from 'react';
import withStore from '~/hocs/withStore';
import { Form, Button } from 'react-bootstrap';

class Chat extends React.Component{
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
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Start chat
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withStore(Chat);