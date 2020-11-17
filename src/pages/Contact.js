import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Button from '../components/Button';

// Create styled component for the Contact Page layour
const FormContainer = styled.div`
    width: 450px;
    margin: auto;
    margin-top: 40px;
`

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            message: '',
        }
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
        this.handleMessageFieldChange = this.handleMessageFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameFieldChange(event) {
        // Update the state for the name field
        this.setState({
            name: event.target.value,
        })
    }

    handleMessageFieldChange(event) {
        this.setState({
            message: event.target.value,
        })
    }

    // mehod for handling the form submission
    handleSubmit() {
        const { name, message } = this.state
        console.log(name, message)
    }

    render() {
        // To set up the controlled form fields, you have to force the values to reflect the form state
        const { name, message } = this.state;
        return (
            <FormContainer>
                <Card>
                    <p className="lead">I would love to hear from you</p>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" className="form-control" value={name} onChange={(event) => this.handleNameFieldChange(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" className="form-control" rows="4" value={message} onChange={e => this.handleMessageFieldChange(e)} />
                    </div>
                    <div className="form-group">
                        <Button color='primary' onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </Card>
            </FormContainer>
        );
    }
}

export default Contact;