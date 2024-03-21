import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Alert from 'react-bootstrap/Alert';
import Navbar from './components/Navbar/Navbar';
import './FeedbackForm.css';

function FeedbackForm() {
    const [displayform, setDisplay] = useState(true);
    const [em_value, setEmValue] = useState('');
    const [nm_value, setNmValue] = useState('');
    const [ph_value, setPhValue] = useState('');

    const [checked_val, setCheckBoxChecked] = useState([]);
    const [error_msg, setErrorMsg] = useState('Please enter the value for the above field');

    const handleOnChange = (isChecked, value) => {
        let temp = [...checked_val];
        const pre = value.split('_')[0];
        if (isChecked) {
            temp = temp.filter(item => item.split('_')[0] !== pre);
            temp.push(value);
            setCheckBoxChecked(temp);
            return;
        }

        setCheckBoxChecked(temp.filter(item => item !== value));
    };

    const validateForm = (submitting) => {
        if (submitting) {
            setErrorMsg('Please enter the value for the above field');
    
            // Reset error messages
            document.getElementById('name_er').style.display = 'none';
            document.getElementById('email_er').style.display = 'none';
            document.getElementById('phone_er').style.display = 'none';
    
            // Check if fields are empty
            if (nm_value === '') {
                document.getElementById('name_er').style.display = 'block';
                return false;
            }
            if (em_value === '') {
                document.getElementById('email_er').style.display = 'block';
                return false;
            } else if (!em_value.includes('.com') || !em_value.includes('@')) {
                document.getElementById('email_er').style.display = 'block';
                setErrorMsg('Invalid Email');
                return false;
            }
            if (!ph_value) {
                document.getElementById('phone_er').style.display = 'block';
                return false;
            } else if (ph_value.length < 13) {
                document.getElementById('phone_er').style.display = 'block';
                setErrorMsg('Invalid Phone number');
                return false;
            }
            if (checked_val.length < Object.keys(feedback_type).length) {
                const keys = Object.keys(feedback_type);
                checked_val.forEach(val => {
                    const pre = val.split('_')[0];
                    keys.filter(item => item !== pre);
                });
                keys.forEach(val => {
                    document.getElementById(`er_${val}`).style.display = 'block';
                });
                return false;
            }
        }
        return true;
    };
    
    

    const formSubmit = e => {
        e.preventDefault();
    
        // Call validateForm with true only when the form is being submitted
        if (validateForm(true)) {
            const existingEntries = JSON.parse(localStorage.getItem('allEntries')) || [];
            let new_id = 0;
            if (existingEntries.length > 0) {
                const lastentry = existingEntries.slice(-1)[0];
                new_id = parseInt(lastentry.id) + 1;
            }
            const entry = {
                id: new_id,
                email: em_value,
                name: nm_value,
                phone: ph_value,
                checkbox_values: checked_val,
            };
            existingEntries.push(entry);
            localStorage.setItem('allEntries', JSON.stringify(existingEntries));
            setDisplay(false);
        }
    };
    

    const feedback_type = {
        qos: 'Please rate the quality of the service you received from your host.',
        qob: 'Please rate the quality of your beverage.',
        roc: 'Was our restaurant clean?',
        exp: 'Please rate your overall dining experience.',
    };

    const feedback_opts = ['Excellent', 'Good', 'Fair', 'Bad'];

    return (
        <>
            <Navbar /> <br/> <br/> <br/> <br/> 
            <Container className="feedback">
                {displayform ? (
                    <Card className="feedback-form">
                        <Card.Header>
                            <cite title="Source Title" style={{marginLeft: "14%", color: "whitesmoke", fontSize: "1rem"}}>
                                We are committed to providing you with the best dining experience possible, so we welcome your comments.
                            </cite> 
                        </Card.Header> <br/>
                        <Card.Body style={{marginLeft: "37%", color: "whitesmoke"}}>
                            <blockquote className="blockquote" style={{color: "whitesmoke"}} >Please fill out this questionnaire.</blockquote>
                        </Card.Body>
                        <Container className="padding30px">
                            <Form> <br/>
                                <Row style={{display: "flex"}}>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="required-field" style={{marginLeft: "0%", color: "whitesmoke", fontSize: "1.2rem"}}>Customer Name</Form.Label>
                                            <Form.Control type="text" required placeholder="E.g. jon snow" value={nm_value} onChange={e => setNmValue(e.target.value)} style={{marginLeft: "5%", color: "whitesmoke"}}/>
                                        </Form.Group>
                                        <Alert variant="danger" id="name_er">
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                    <Col style={{marginLeft: "25%", color: "whitesmoke"}}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                                            <Form.Label className="required-field" style={{marginLeft: "0%", color: "whitesmoke", fontSize: "1.2rem"}}>Email address</Form.Label>
                                            <Form.Control type="email" required placeholder="E.g. mailto:abc@gmail.com" value={em_value} onChange={e => setEmValue(e.target.value)} style={{marginLeft: "7%", color: "whitesmoke"}}/>
                                        </Form.Group>
                                        <Alert variant="danger" id="email_er">
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                </Row>
                                <Row> <br/>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="required-field" style={{marginLeft: "30%", color: "whitesmoke", fontSize: "1.2rem"}}>Phone</Form.Label>
                                            <InputGroup>
                                                <PhoneInput placeholder="9999999999" value={ph_value} onChange={setPhValue} style={{marginLeft: "40%", color: "whitesmoke", width: "20%", marginTop: "-2%"}}/>
                                            </InputGroup>
                                        </Form.Group>
                                        <Alert variant="danger" id="phone_er" style={{marginLeft: "30%"}}>
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                    <Col></Col>
                                </Row> <br/>
                                <Row>
                                    {Object.keys(feedback_type).map(ty => (
                                        <Col key={ty}>
                                            <Form.Group className="mb-3" controlId={ty}>
                                                <Form.Label className="required-field" style={{color: "whitesmoke", fontSize: "1rem"}}>{feedback_type[ty]}</Form.Label>
                                                <InputGroup>
                                                    <div className="mb-3" style={{display: "flex",color: "whitesmoke", justifyContent: "space-around", paddingRight: "10%"}}>
                                                        {feedback_opts.map((opt, key) => (
                                                            <Form.Check
                                                                key={key}
                                                                inline
                                                                label={opt}
                                                                name={`${ty}_feedback_opts`}
                                                                id={`${ty}_${key}`}
                                                                checked={checked_val.includes(ty + '_' + opt)}
                                                                onChange={e => handleOnChange(e.target.checked, ty + '_' + opt)}
                                                                type="checkbox"
                                                                value={opt}
                                                            style={{color: "whitesmoke"}}/>
                                                        ))}
                                                    </div>
                                                </InputGroup>
                                            </Form.Group>
                                            <Alert variant="danger" id={`er_${ty}`} style={{marginLeft: "30%"}}>
                                                &#9432;{error_msg}
                                            </Alert>
                                        </Col>
                                    ))}
                                </Row> <br/>
                                <Button className="btn_purp" onClick={e => formSubmit(e)} style={{marginLeft: "40%", borderRadius: "2rem"}}>Submit Review</Button>
                            </Form>
                        </Container>
                    </Card>
                ) : (
                    <Card bg="light" text="dark">
                        <Card.Body className="Feedback-thank">
                            <div className="padding30px">
                                <div className="circle">
                                    <div className="checkmark"></div>
                                </div>
                            </div>
                            <Card.Text>Thank you for providing the feedback</Card.Text>
                            <Form.Text muted>We will work towards improving your experience</Form.Text>
                            <div className="padding30px">
                                <Button className="btn_purp">Close</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </>
    );
}

export default FeedbackForm;
