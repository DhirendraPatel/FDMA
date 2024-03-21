import React, { useState } from 'react';
import './Faq.css'; // Import CSS file for styling

const Faq = () => {
  // State to track the currently clicked question
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Function to handle click on a question
  const handleQuestionClick = (question) => {
    if (selectedQuestion === question) {
      // If the same question is clicked again, collapse its answer
      setSelectedQuestion(null);
    } else {
      // If a different question is clicked, show its answer
      setSelectedQuestion(question);
    }
  };

  return (
    <div className="faq-container" style={{marginLeft: "30%"}}>
      <h2 style={{fontSize: "2rem"}}>Frequently Asked Questions</h2> <br/>
      <div className="faq-item">
        <h3 onClick={() => handleQuestionClick('Q1')}>Q: How do I place an order?</h3>
        {selectedQuestion === 'Q1' && (
          <p>A: To place an order, simply browse our menu, select the items you'd like to order, and proceed to checkout. You can choose delivery or pickup options based on your preference.</p>
        )}
      </div>
      <div className="faq-item">
        <h3 onClick={() => handleQuestionClick('Q2')}>Q: What payment methods do you accept?</h3>
        {selectedQuestion === 'Q2' && (
          <p>A: We accept various payment methods, including credit/debit cards, online payment gateways, and cash on delivery. Choose the option that suits you best during checkout.</p>
        )}
      </div>
      <div className="faq-item">
        <h3 onClick={() => handleQuestionClick('Q3')}>Q: Can I customize my order?</h3>
        {selectedQuestion === 'Q3' && (
          <p>A: Absolutely! Most of our menu items can be customized to accommodate dietary preferences or allergies. Simply indicate your preferences in the special instructions section during checkout.</p>
        )}
      </div>
      <div className="faq-item">
        <h3 onClick={() => handleQuestionClick('Q4')}>Q: How do I track my order?</h3>
        {selectedQuestion === 'Q4' && (
          <p>A: Once your order is confirmed, you'll receive a confirmation email or SMS with a tracking link. You can use this link to monitor the status of your order and estimated delivery time.</p>
        )}
      </div>
      <div className="faq-item">
        <h3 onClick={() => handleQuestionClick('Q5')}>Q: Is there a minimum order requirement?</h3>
        {selectedQuestion === 'Q5' && (
          <p>A: We don't have a minimum order requirement. You can order as much or as little as you like.</p>
        )}
      </div>
      <div className="faq-item">
        <h3 onClick={() => handleQuestionClick('Q6')}>Q: Do you offer catering services for events?</h3>
        {selectedQuestion === 'Q6' && (
          <p>A: Yes, we provide catering services for various events such as weddings, corporate gatherings, parties, and more. Contact us to discuss your catering needs and preferences.</p>
        )}
      </div>
    </div>
  );
};

export default Faq;
