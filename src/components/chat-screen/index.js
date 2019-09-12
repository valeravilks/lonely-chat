import React from 'react';
import withStore from '~/hocs/withStore';
import { Form, Button, Card } from 'react-bootstrap';

class First extends React.Component{
    input = React.createRef();

    sendMessage = () => {
        event.preventDefault();
        this.props.stores.storage.setMessage(this.input.current.value);
    };

    render(){

        let messageCart = this.props.stores.storage.message.map(res => {
            return <Card border="light">
                <Card.Header>Валерий</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        });

        return (
            <div>
                <h1 className="text-center mb-3 mt-5">Lonely Chat</h1>
                <h4 className="text-center mb-5">Hi, {this.props.stores.storage.name}!</h4>
                {messageCart}
                <Form className="text-center">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Enter your message" ref={this.input}/>
                    </Form.Group>
                    <Button onClick={this.sendMessage} variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withStore(First);