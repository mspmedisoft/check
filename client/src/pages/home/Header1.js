import React from 'react'
import Nav from 'react-bootstrap/Nav';
import MSPlogo from '../../images/msplogo.png'
import "./Home.css";
import Side from './Side';

function Header1() {
    return (
        <div className='Header1Sec'>
            <div className='LeftMenu'>
                <div className='imgSection'>

                </div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <a className="navbar-brand logoimg" href="/">
                        {" "}
                        <img src={MSPlogo} alt="" />
                    </a>
                    <Nav.Item>
                        <Nav.Link href="/home">Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Setting </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Entry </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Report </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Help </Nav.Link>
                    </Nav.Item>
                    
                    <div className='RightMenu'>
                        <ul>
                            <li>
                                <a href="">
                                    {" "}
                                    <img src={MSPlogo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    {" "}
                                    <img src={MSPlogo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    {" "}
                                    <img src={MSPlogo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    {" "}
                                    <img src={MSPlogo} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Nav>
            </div>
            <Side/>
        </div>
    )
}

export default Header1