"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../assets/Main-page/Logo-01.png'
import { circleTop } from 'react-icons-kit/iconic/circleTop'
import { circleBottom } from 'react-icons-kit/iconic/circleBottom'
import '../styleSheet/footer.css';
import Icon from 'react-icons-kit';

const Industries = ['Banking', 'Retail', 'Life Science', 'Health care', 'Food Manufactuing'];
const Services = ['Robotic Process Automation', 'Robotic Test Automation', 'Technology Consulting', 'supply Chain Management', 'Enterprise Solution'];
const Solutions = ['Supplier Management Solutions', 'Quality Management Solutions', 'Compliance Management Solutions', 'Learning Management Solutions', 'GFSI Software Solutions', 'Lab Management Solutions', 'Food Safety Program Solutions', 'Audit and gap assessment solutions'];
const Contact = ['info@cygnustics.com', '+91 9004819004'];



const Footer = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {expanded ? (
                <footer className='footerexpanded'>
                    <div className="footer-content">
                        <div className="footer-logo">
                            <Image
                                src={Logo}
                                width={150}
                                height={80}
                                alt="Picture of the author" />
                        </div>
                        <div className="footer-services">
                            <h5>Industries</h5>
                            <ul style={{ padding: 0 }}>
                                {Industries.map((service, index) => (
                                    <li style={{ fontSize: 'small' }} key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h5>Services</h5>
                            <ul style={{ padding: 0 }}>
                                {Services.map((service, index) => (
                                    <li style={{ fontSize: 'small' }} key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h5>Product & Solutions</h5>
                            <ul style={{ padding: 0 }}>
                                {Solutions.map((service, index) => (
                                    <li style={{ fontSize: 'small' }} key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h5>Contact Us</h5>
                            <ul style={{ padding: 0 }}>
                                {Contact.map((service, index) => (
                                    <li style={{ fontSize: 'small' }} key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='btn-styled'>
                        <Icon onClick={toggleExpand} size={48} icon={circleBottom} />
                    </div>
                </footer>
            ) : (
                <footer className='footercollapse'>
                    <div className='footer-text'>
                        &copy;    Cygnustics Software Pvt. Ltd.
                    </div>
                    <div className='btn-styled-2'>
                        <Icon onClick={toggleExpand} size={36} icon={circleTop} />
                    </div>
                </footer>
            )}

        </>
    );
};

export default Footer;



