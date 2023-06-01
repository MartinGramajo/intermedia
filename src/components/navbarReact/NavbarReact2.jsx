import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./navbarReact.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function NavbarReact2() {
    return (
        <div>
            <Navbar className="fondo-blanco py-1">
                <Container>
                    {/* Modo Computadora */}
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link href="https://www.intermediasp.com/cual-es-mi-ip/">
                            <p className="color-azul fs-16 peso-600 me-2 ">
                                SU IP
                            </p>
                        </Nav.Link>
                        <Nav.Link href="https://www.intermediasp.com/ingresar-webmail/">
                            <p className="color-azul fs-16 peso-600 me-2">
                                WEBMAIL
                            </p>
                        </Nav.Link>
                        <Nav.Link href="https://www.intermediasp.com/soporte/">
                            <p className="color-azul fs-16 peso-600 me-2">
                                ÁREA SOPORTE
                            </p>
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link href="https://www.intermediasp.com/whmcs/index.php?rp=/login">
                            <p className="color-azul fs-16 peso-600 me-2">
                                ÁREA DE CLIENTES
                            </p>
                        </Nav.Link>
                        <Nav.Link href="https://www.intermediasp.com/contacto/?id=">
                            <p className="color-azul fs-16 peso-600 me-2">
                                ATENCIÓN A CLIENTES: 54 11 50329999
                            </p>
                        </Nav.Link>
                        <Nav.Link href="https://fc.ar.inter.net/get.php">
                            <p className="color-azul fs-16 peso-600 me-2">
                                FACTURA ONLINE
                            </p>
                        </Nav.Link>
                    </Nav>
                    {/* Modo Celular */}
                    <Nav className="d-lg-none d-flex align-items-center justify-content-between text-center mx-auto navbar-celu">
                        <Nav.Link href="https://www.intermediasp.com/ingresar-webmail/">
                            <p className="color-azul fs-12 peso-600">WEBMAIL</p>
                        </Nav.Link>
                        <Nav.Link href="https://www.intermediasp.com/soporte/">
                            <p className="color-azul fs-12 peso-600">
                                ÁREA SOPORTE
                            </p>
                        </Nav.Link>
                        <Nav.Link href="https://www.intermediasp.com/whmcs/index.php?rp=/login">
                            <p className="color-azul fs-12 peso-600">
                                ÁREA DE CLIENTES
                            </p>
                        </Nav.Link>
                        <Nav.Link href="https://www.intermediasp.com/contacto/?id=">
                            <p className="color-azul fs-12 peso-600">
                                54 11 50329999
                            </p>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* -------------------- SEGUNDO NAVBAR ----------------------------------*/}
            <Navbar className="fondo-azul" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        href
                        className="d-lg-block d-none"
                    >
                        {" "}
                        <Image
                            className="h-100 my-3"
                            src={logo}
                            fluid
                            alt="bandera-argentina"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        href
                        className="d-block d-lg-none w-75"
                    >
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
                            <Nav.Link as={Link} to="/" href className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2 ">
                                    PLANES
                                </p>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" href className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    POR QUE NOSOTROS
                                </p>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" href className="ms-auto">
                                <p className="color-blanco fs-20 peso-500 me-2">
                                    FAQ
                                </p>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" href className="ms-auto">
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
