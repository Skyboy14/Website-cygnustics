"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import '../styleSheet/header.css'
import Image from 'next/image';
import Logo from '../../../assets/Main-page/Logo-01.png'
import { useState } from 'react';
import CreationsPopUp from './headerPopUp/creations';
import { Popover } from '@mui/material';
import DeliverablesPopUp from './headerPopUp/deliverables';
import SectorsPopUp from './headerPopUp/sector';

import { play3 } from 'react-icons-kit/icomoon/play3'
import Icon from 'react-icons-kit';

import { isBrowser, isTablet, isMobile } from 'react-device-detect';
import Accordian from '../accordian/accordian';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';

function OffcanvasExample() {

    const [anchorE1, setAnchorE1] = useState(null);
    const open1 = Boolean(anchorE1);
    const id1 = open1 ? 'simple-popover' : undefined;

    const handleMouseOver1 = (event) => {
        setAnchorE1(event.currentTarget)
    };
    const handleMouseOut1 = () => {
        setAnchorE1(null);
    };

    const [anchorE2, setAnchorE2] = useState(null);
    const open2 = Boolean(anchorE2);
    const id2 = open2 ? 'simple-popover' : undefined;

    const handleMouseOver2 = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleMouseOut2 = () => {
        setAnchorE2(null);
    };

    const [anchorE3, setAnchorE3] = useState(null);
    const open3 = Boolean(anchorE3);
    const id3 = open3 ? 'simple-popover' : undefined;

    const handleMouseOver3 = (event) => {
        setAnchorE3(event.currentTarget);
    };
    const handleMouseOut3 = () => {
        setAnchorE3(null);
    };



    return (
        <>
            <Navbar expand='md' bg="grey" className="mb-3 navstyle" style={{ padding: 0 }}>
                <Container fluid>
                    <Navbar.Brand >
                        <div style={{ minWidth: '150px' }}>
                            <Image
                                src={Logo}
                                width={150}
                                height={80}
                                alt="Picture of the author" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Cygnustics
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {isBrowser || isTablet ? (
                                <Nav className="justify-content-end flex-grow-1 pe-3 fontstyleHeader">
                                    {/* <Nav.Link href="#action1"
                                        onMouseEnter={handleMouseOver1}
                                        onMouseLeave={handleMouseOut1}
                                    >
                                        Sectors
                                        {open1 &&
                                            <div className='arrow-1'>
                                                <Icon icon={play3} size={28} color={'white'} />
                                            </div>
                                        }
                                    </Nav.Link> */}
                                    {/* <DropdownButton
                                        id="dropdown-button-drop-down-centered"
                                        title="Sectors"
                                        menuVariant="light"
                                    >
                                        <SectorsPopUp />
                                    </DropdownButton> */}
                                    <NavDropdown
                                        id="nav-dropdown-light-sectors"
                                        title="Sectors"
                                        menuVariant="light"
                                        className="custom-dropdown1-sectors"
                                    >
                                        <SectorsPopUp />
                                    </NavDropdown>
                                    <NavDropdown
                                        id="nav-dropdown-light-deliverables"
                                        title="Deliverables"
                                        menuVariant="light"
                                        className="custom-dropdown1-deliverables"
                                    >
                                        <DeliverablesPopUp />
                                    </NavDropdown>
                                    <NavDropdown
                                        id="nav-dropdown-light-creations"
                                        title="Creations"
                                        menuVariant="light"
                                        className="custom-dropdown1-creations"
                                    >
                                        <CreationsPopUp />
                                    </NavDropdown>
                                    <NavDropdown
                                        id="nav-dropdown-light-contact"
                                        title="Contact Us"
                                        menuVariant="light"
                                        className="custom-dropdown1-contact"
                                    >
                                        <Dropdown.Item href="#/action-2">info@cygnustics.com</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">+91 9004819004</Dropdown.Item>
                                    </NavDropdown>
                                    {/* <Nav.Link href="#action2"
                                        onMouseEnter={handleMouseOver2}
                                        onMouseLeave={handleMouseOut2}
                                    >
                                        Deliverables
                                        {open2 &&
                                            <div className='arrow-2'>
                                                <Icon icon={play3} size={28} />
                                            </div>
                                        }
                                    </Nav.Link> */}
                                    {/* <Nav.Link href="#action3"
                                        onMouseEnter={handleMouseOver3}
                                        onMouseLeave={handleMouseOut3}
                                    >
                                        Creations
                                        {open3 &&
                                            <div className='arrow3'>
                                                <Icon icon={play3} size={28} />
                                            </div>
                                        }
                                    </Nav.Link> */}
                                    {/* <Nav.Link href="#action4" style={{ whiteSpace: 'nowrap' }}>Contact Us</Nav.Link> */}
                                    <Nav.Link href="#action5">Worldwide</Nav.Link>
                                </Nav>
                            ) :
                                (
                                    <Accordian />
                                )}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container >
            </Navbar >


            <Popover
                id={open1 ? 'mouse-over-popover' : undefined}
                sx={{
                    pointerEvents: 'none',
                }}
                open={open1}
                anchorE1={anchorE1}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handleMouseOut1}
                disableRestoreFocus
            >
                <SectorsPopUp />
            </Popover>

            <Popover
                id={open2 ? 'mouse-over-popover' : undefined}
                sx={{
                    pointerEvents: 'none',
                }}
                open={open2}
                anchorE1={anchorE2}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handleMouseOut2}
                disableRestoreFocus
            >
                <DeliverablesPopUp />
            </Popover>

            <Popover
                id={open3 ? 'mouse-over-popover' : undefined}
                sx={{
                    pointerEvents: 'none',
                }}
                open={open3}
                anchorE1={anchorE3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handleMouseOut3}
                disableRestoreFocus
            >
                <CreationsPopUp />
            </Popover>

        </>
    );
}

export default OffcanvasExample;

