import React from 'react';
import withStore from '~/hocs/withStore';
import { Form, Button, Card } from 'react-bootstrap';

class First extends React.Component{
    render(){
        return (
            <div>
                <h1 className="text-center mb-5 mt-5">Lonely Chat</h1>
                <Card border="light">
                    <Card.Header>Валерий</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Form className="text-center">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Enter your message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withStore(First);