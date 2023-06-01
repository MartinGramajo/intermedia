import React from "react";
import { Button, Image } from "react-bootstrap";
import wsp from "../../assets/img/WhatsApp.png";

export default function Comunicate() {
    return (
        <div id="contactanos">
            <div className="container acordeon-pf d-none d-lg-block py-5">
                <h1 className="peso-800 fs-57 text-center pt-5">
                    Comunícate con Nosotros
                </h1>
                <h6 className="pt-3 peso-400 fs-23 text-center mb-5">
                    Nuestro equipo de soporte siempre le ayudará a resolver sus
                    inquietudes.
                </h6>
                <div className="d-flex justify-content-center mb-5">
                    <a
                        href="https://wa.link/iv6vm7"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            className="boton-contacto-wsp border-0"
                            size="sm"
                            type="submit"
                        >
                            <div className="d-flex flex-row justify-content-center">
                                <Image
                                    className="icono-wsp mx-2"
                                    src={wsp}
                                    fluid
                                    alt="iconos"
                                />
                                <h6 className="fs-20 peso-700 mt-1">
                                    {" "}
                                    Habla con un asesor
                                </h6>
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="container acordeon-pf d-lg-none d-block py-5">
                <h1 className="peso-800 fs-30 text-center pt-5">
                    Comunícate con <br className="d-block d-sm-none"/>Nosotros
                </h1>
                <h6 className="pt-4 peso-500 fs-20 text-center mb-3">
                    Nuestro equipo de soporte siempre le ayudará a resolver sus
                    inquietudes.
                </h6>
                <div className="d-flex justify-content-center mb-5">
                    <a
                        href="https://wa.link/iv6vm7"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            className="boton-contacto-wsp border-0"
                            size="sm"
                            type="submit"
                        >
                            <div className="d-flex flex-row justify-content-center">
                                <Image
                                    className="icono-wsp mx-2"
                                    src={wsp}
                                    fluid
                                    alt="iconos"
                                />
                                <h6 className="fs-20 peso-700 mt-1">
                                    {" "}
                                    Habla con un asesor
                                </h6>
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
