import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import "./preguntasFrecuentes.css";

const arrayTextos = [
    {
        id: 1,
        titulo: "¿Qué es un Hosting?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 2,
        titulo: "¿Qué plan de Hosting me recomiendan?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 3,
        titulo: "¿En cuanto tiempo tendré activo el servicio de Hosting?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 4,
        titulo: "¿Qué es un nombre de dominio?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 5,
        titulo: "¿Por qué necesito un dominio?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 6,
        titulo: "Quiero delegar un dominio a IntermediaSP, ¿Cuáles son los dns?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 7,
        titulo: "¿Cómo es la política de backups?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 8,
        titulo: "¿Puedo usar WordPress?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 9,
        titulo: "¿Puedo alojar una tienda online?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 10,
        titulo: "¿Qué es el autoinstalador de aplicaciones web?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 11,
        titulo: "¿Cuáles son las diferencias entre un hosting compartido y una VPS?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 12,
        titulo: "¿Qué es un Hosting de correo?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 13,
        titulo: "¿Cómo puedo migrar mi sitio web a IntermediaSP?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 14,
        titulo: "¿El servicio de Hosting incluye SSL?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 15,
        titulo: "¿Cómo puedo aumentar las prestaciones de mi plan de Hosting?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 16,
        titulo: "¿Cómo y cuándo puedo solicitar la baja del servicio contratado?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 17,
        titulo: "¿Qué nivel de servicio garantizan?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 18,
        titulo: "¿Qué nivel de servicio garantizan?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 19,
        titulo: "¿Que tipo de soporte tengo si contrato un Hosting?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 20,
        titulo: "¿Por qué elegir a IntermediaSP como proveedor?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
    {
        id: 21,
        titulo: "¿Cómo puedo pagar los servicios contratados?",
        descripcion: `Un hosting es un servicio de alojamiento para sitios web.

El hosting web aloja online los contenidos de tu web y de tu correo electrónico para que puedan ser visitados en todo momento desde cualquier dispositivo conectado a Internet.`,
    },
];

export default function PreguntasFrecuentes() {
    const [show, setShow] = useState(5);

    return (
        <div className="fondo-celeste">
            <div className="container acordeon-pf d-none d-lg-block">
                <h1 className="peso-800 fs-57 text-center pt-5">
                    Preguntas Frecuentes
                </h1>
                <h6 className="pt-3 peso-400 fs-23 text-center mb-5 pb-5">
                    ¿Tenes dudas o preguntas? Escríbenos
                </h6>
                <Accordion className="padding-pf">
                    {arrayTextos.map((textos) => (
                        <Accordion.Item eventKey={textos.id}>
                            <Accordion.Header>
                                <h5 className="d-flex align-items-center peso-500 fs-28 justify-content-center mb-0 ps-4">
                                    {textos.titulo}
                                </h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <pre className="peso-400 fs-22 pre-wrap ms-5 ps-1">
                                    {textos.descripcion}
                                </pre>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            {/* MODO CELULAR */}
            <div className="container acordeon-pf d-lg-none d-block pt-4">
                <h1 className="peso-800 fs-30 text-center pt-5">
                    Preguntas Frecuentes
                </h1>
                <h6 className="pt-4 peso-400 fs-20 text-center pb-5">
                    ¿Tenes dudas o preguntas? <br /> Escríbenos
                </h6>
                <Accordion className="padding-pf">
                    {arrayTextos.slice(0, show).map((textos) => (
                        <Accordion.Item eventKey={textos.id}>
                            <Accordion.Header>
                                <h5 className="d-flex align-items-center peso-600 fs-16 justify-content-center mb-0 ps-2">
                                    {textos.titulo}
                                </h5>
                            </Accordion.Header>
                            <Accordion.Body className="p-3">
                                <pre className="peso-500 fs-16 pre-wrap">
                                    {textos.descripcion}
                                </pre>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
                <div className="d-flex justify-content-center pb-5">
                    <Button
                        onClick={() => {
                            setShow(show+5);
                        }}
                        className={show>=arrayTextos.length ?"boton-vermas-cel d-none":"boton-vermas-cel"}
                    >
                        <p className="peso-800 fs-14 color-azul py-1">
                            Ver mas preguntas
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    );
}
