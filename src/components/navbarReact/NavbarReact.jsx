import React from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./navbarReact.css";
import argentina from "../../assets/img/argentina.png";
import logo from "../../assets/img/logo.png";

export default function NavbarReact() {
    return (
        <div>
            <Navbar className="fondo-blanco py-1">
                <Container>
                    {/* Modo Computadora */}
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2 ">
                                SU IP
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2">
                                WEBMAIL
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2">
                                ÁREA SOPORTE
                            </p>
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2">
                                ÁREA DE CLIENTES
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2">
                                ATENCIÓN A CLIENTES: 54 11 50329999
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2">
                                FACTURA ONLINE
                            </p>
                        </Nav.Link>
                        <Image
                            className="h-100 my-auto"
                            src={argentina}
                            fluid
                            alt="bandera-argentina"
                        />
                        <NavDropdown
                            className="navbar-drop"
                            title="Argentina"
                        ></NavDropdown>
                    </Nav>
                    {/* Modo Celular */}
                    <Nav className="d-lg-none d-flex align-items-center justify-content-between mx-auto navbar-celu">
                        <Nav.Link href="#home">
                            <p className="color-azul fs-12 peso-600">WEBMAIL</p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-12 peso-600">
                                ÁREA SOPORTE
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-12 peso-600">
                                ÁREA DE CLIENTES
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <p className="color-azul fs-12 peso-600">
                                54 11 50329999
                            </p>
                        </Nav.Link>
                        <div className="d-flex flex-column ps-2 my-2 justify-content-center border-bottom-0 border-top-0 border-end-0 border-nav">
                            <Image
                                className="w-25 ms-2"
                                src={argentina}
                                fluid
                                alt="bandera-argentina"
                            />
                            <NavDropdown
                                className="navbar-drop d-flex align-items-center"
                                title="Argentina"
                            ></NavDropdown>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            {/* -------------------- SEGUNDO NAVBAR ----------------------------------*/}
            <Navbar className="fondo-azul" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="d-lg-block d-none">
                        {" "}
                        <Image
                            className="h-100 my-3"
                            src={logo}
                            fluid
                            alt="bandera-argentina"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home" className="d-block d-lg-none w-75">
                        {" "}
                        <Image
                            className="h-100 my-3"
                            src={logo}
                            fluid
                            alt="bandera-argentina"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2 ">
                                    PLANES
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home" className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    POR QUE NOSOTROS
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home" className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    FAQ
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home" className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    CONTACTANOS
                                </p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
