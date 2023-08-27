"use client"

import Accordion from 'react-bootstrap/Accordion';
import Icon from 'react-icons-kit';

const Sectors = ['Banking', 'Retail', 'Life Science', 'Health care', 'Food Manufactuing'];
const Deliverables = ['Robotic Process Automation', 'Robotic Test Automation', 'Technology Consulting', 'supply Chain Management', 'Enterprise Solution'];
const Creations = ['Supplier Management Solutions', 'Quality Management Solutions', 'Compliance Management Solutions', 'Learning Management Solutions', 'GFSI Software Solutions', 'Lab Management Solutions', 'Food Safety Program Solutions', 'Audit and gap assessment solutions'];
const Contact = ['info@cygnustics.com', '123123123', 'linkedin'];

import {record} from 'react-icons-kit/iconic/record'

function Accordian() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sectors</Accordion.Header>
        <Accordion.Body>
          <ul style={{ padding: 0}}>
            {Sectors.map((service, index) => (
              <li key={index}> <Icon size={12} icon={record} style={{paddingRight: '10px'}}/>{service}</li>
            ))}
          </ul> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Deliverables</Accordion.Header>
        <Accordion.Body>
          <ul style={{ padding: 0 }}>
            {Deliverables.map((service, index) => (
              <li key={index}><Icon size={12} icon={record} style={{paddingRight: '10px'}}/>{service}</li>
            ))}
          </ul> 
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
        <Accordion.Header>Creations</Accordion.Header>
        <Accordion.Body>
          <ul style={{ padding: 0 }}>
            {Creations.map((service, index) => (
            <li key={index}><Icon size={12} icon={record} style={{paddingRight: '10px'}}/>{service}</li>
            ))}
          </ul> 
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
        <Accordion.Header>Contact</Accordion.Header>
        <Accordion.Body>
          <ul style={{ padding: 0 }}>
            {Contact.map((service, index) => (
              <li key={index}><Icon size={12} icon={record} style={{paddingRight: '10px'}}/>{service}</li>
            ))}
          </ul> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;