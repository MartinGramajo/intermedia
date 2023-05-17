import React from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./navbarReact.css";
import argentina from "../../assets/img/Flag_of_Argentina.png";
import logo from "../../assets/img/logo.png";

export default function NavbarReact() {
    return (
        <div>
            <Navbar className="fondo-blanco py-1">
                <Container>
                    <Nav className="">
                        <Nav.Link href="#home">
                            <p className="color-azul fs-16 peso-600 me-2">
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
                    <Nav className="">
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
                </Container>
            </Navbar>
            <Navbar className="fondo-azul" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
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
                            <Nav.Link href="#home">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    FACTURA ONLINE
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    POR QUE NOSOTROS
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    FAQ
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home">
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
