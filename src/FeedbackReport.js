import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import "./FeedbackReport.css";


function FeedbackReport() {
  const [allEntries, setAllEntries] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [singleEntry, setSingleEntry] = useState({
    name: '',
    email: '',
    phone: '',
    checkbox_values: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem('allEntries')) || [];
      setAllEntries(data);
    };
    fetchData();
  }, []);

  const handleReply = (entryId) => {
    const recipientEmail = 'recipient@example.com';
    const subject = 'Regarding Your Feedback';
    const body = 'Dear customer,\n\nWe appreciate your feedback and would like to address your concerns.\n\nSincerely,\nYour Company';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleViewDetails = (entry) => {
    setSingleEntry(entry);
    setDisplayDetail(true);
  };

  const handleCheckVal = (ty, entry) => {
    const val = entry.checkbox_values.find((item) => item.split('_')[0] === ty);
    return val ? val.split('_')[1] : '';
  };

  const handleDelete = (entryId) => {
    const updatedEntries = allEntries.filter((entry) => entry.id !== entryId);
    setAllEntries(updatedEntries);

    localStorage.setItem('allEntries', JSON.stringify(updatedEntries));
  };


  
  const exportToExcel = () => {
    const dataForExport = allEntries.map((entry) => ({
      'Customer Name': entry.name,
      'Email': entry.email,
      'Phone': entry.phone,
      'Quality of Service': entry.checkbox_values.find((val) => val.includes('qos'))?.split('_')[1] || '',
      'Quality of Beverage': entry.checkbox_values.find((val) => val.includes('qob'))?.split('_')[1] || '',
      'Restaurant Cleanliness': entry.checkbox_values.find((val) => val.includes('roc'))?.split('_')[1] || '',
      'Overall Experience': entry.checkbox_values.find((val) => val.includes('exp'))?.split('_')[1] || '',
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataForExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Feedback Data');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'feedback_data.xlsx');
  };

  const feedback_type = {
    qos: 'quality of the service ',
    qob: 'quality of your beverage.',
    roc: 'Was our restaurant clean?',
    exp: 'overall dining experience.',
  };

  const renderSingleEntry = () => {
    return (
        <div className='users-feedback'>
      <Container>
        <Card className="Feedback-details">
          <Card.Header>
            <cite title="Source Title" style={{ fontSize: '2rem', paddingLeft: "500px"}} >
              Feedback Details
            </cite>
          </Card.Header>
          <Card.Body>
            <br />
            <br />
            <Table striped bordered hover responsive>
              <tbody>
                <tr>
                  <td>Customer Name</td>
                  <td>{singleEntry.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{singleEntry.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{singleEntry.phone}</td>
                </tr>
                {Object.keys(feedback_type).map((ty) => (
                  <tr key={ty}>
                    <td>{feedback_type[ty]}</td>
                    <td>{handleCheckVal(ty, singleEntry)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
      </div>

    );
  };

  const renderAllEntries = () => {
    return (
      <div className="padding30px">
        <h1 style={{marginLeft: "40%", fontFamily: "cursive"}}>Feedback Report</h1> <br/>
        <div className='users-feedback'>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>.</th>
              <th>Form Details</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              {Object.keys(feedback_type).map((ty) => (
                <th key={ty}>{feedback_type[ty]}</th>
              ))}
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {allEntries.map((entry) => (
              <tr key={entry.id}>
                <td>
                {renderDot(entry.checkbox_values)}
              </td>
                <td>
                  <Button onClick={() => handleViewDetails(entry)} className='btn btn-primary'
                  style={{backgroundColor: "Highlight", color: 'white'}}>View Details</Button>
                </td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                {Object.keys(feedback_type).map((ty) => (
                  <td key={`${entry.id}_${ty}`}>{handleCheckVal(ty, entry)}</td>
                ))}
                <td>
                  <Button onClick={() => handleReply(entry.id)} style={{backgroundColor: "Highlight", color: 'white'}}>Reply</Button>
                </td>
                <td>
                  <Button onClick={() => handleDelete(entry.id)} style={{backgroundColor: "Highlight", color: 'white'}}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div> <br/>
        <Button onClick={exportToExcel} style={{marginLeft: "50%", backgroundColor: "purple", color: 'white'}}>Export to Excel</Button>
      </div>
    );
  };

  return <>{displayDetail ? renderSingleEntry() : renderAllEntries()}</>;
}


const renderDot = (checkboxValues) => {
  const ratings = checkboxValues.map((val) => val.split('_')[1]);
  if (ratings.includes('Bad')) {
    return <span className="dot" style={{ backgroundColor: 'red' }}></span>;
  } else if (ratings.includes('Fair')) {
    return <span className="dot" style={{ backgroundColor: 'orange' }}></span>;
  } else if (ratings.includes('Good')) {
    return <span className="dot" style={{ backgroundColor: 'green' }}></span>;
  } else if (ratings.includes('Excellent')) {
    return <span className="dot" style={{ backgroundColor: 'green' }}></span>;
  }
  return null; 
};
export default FeedbackReport;
