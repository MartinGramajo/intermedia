import React from "react";
import { Button, Image } from "react-bootstrap";
// import banner from "../../assets/img/Group 333.png";
import banner from "../../assets/img/banner.png";
import tilde from "../../assets/img/tilde.png";
import tildeCelu from "../../assets/img/tilde-celu.png";
import "./banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="fondo-azul">
            <div className="d-none justify-content-end d-lg-flex">
                <Image
                    className="imagen-compu me-5"
                    src={banner}
                    fluid
                    alt="Banner"
                />
            </div>
            <div className="container">
                <div className="color-blanco py-5 d-none d-lg-block">
                    <p className="peso-800 fs-45 pt-4">TU HOSTING</p>
                    <p className="peso-600 fs-32 mt-4">
                        <Image className="me-3" src={tilde} fluid alt="tilde" />
                        rápido y seguro
                    </p>
                    <p className="peso-600 fs-32 mt-3">
                        <Image className="me-3" src={tilde} fluid alt="tilde" />
                        con soporte telefónico
                    </p>
                    <p className="peso-600 fs-32 mt-3">
                        <Image className="me-3" src={tilde} fluid alt="tilde" />
                        en pesos argentinos
                    </p>
                    <p className="peso-600 fs-45 mt-4 py-4">
                        ¡Para que tu web vuele en la nube!
                    </p>
                    <Button className="boton-naranja my-4" as={Link} to="/pagar">
                        <p className="peso-800 fs-23 mx-5 my-2">
                            CONTRATA HOY TU HOSTING
                        </p>
                    </Button>
                    <p className="peso-500-italic fs-28 py-4">
                        *Los clientes eligen nuestro servicio de Hosting desde
                        hace 25 años
                    </p>
                </div>
                {/* MODO CELULAR */}
                <div className="color-blanco py-5 d-lg-none d-block mx-2">
                    <p className="peso-800 fs-30 pt-4">TU HOSTING</p>
                    <p className="peso-600 fs-20 mt-4">
                        <Image className="me-3" src={tildeCelu} fluid alt="tilde" />
                        rápido y seguro
                    </p>
                    <p className="peso-600 fs-20 mt-3">
                        <Image className="me-3" src={tildeCelu} fluid alt="tilde" />
                        con soporte telefónico
                    </p>
                    <p className="peso-600 fs-20 mt-3">
                        <Image className="me-3" src={tildeCelu} fluid alt="tilde" />
                        en pesos argentinos
                    </p>
                    <p className="peso-600 fs-24 mt-4 py-4">
                        ¡Para que tu web vuele en la nube!
                    </p>
                    <Button className="boton-naranja my-4">
                        <p className="peso-800 fs-16 mx-4 my-2" as={Link} to="/pagar">
                            CONTRATA HOY TU HOSTING
                        </p>
                    </Button>
                    <p className="peso-500-italic fs-16 py-4">
                        *Los clientes eligen nuestro servicio de Hosting desde
                        hace 25 años
                    </p>
                </div>
            </div>
        </div>
    );
}
