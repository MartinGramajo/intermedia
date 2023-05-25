import React, { useState } from "react";
import { Accordion, Button, Image } from "react-bootstrap";
import "./preguntasFrecuentes.css";
import tarjetas1 from "../../assets/img/tarjetas1.jpg";
import tarjetas2 from "../../assets/img/tarjetas2.jpg";
import tarjetas3 from "../../assets/img/tarjetas3.jpg";

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
        descripcion: `Tenemos distintos planes de Web Hosting disponibles para que puedas elegir de acuerdo a tu necesidad.
En todos los planes vas a poder subir tu web a internet y usar casillas de correo
Plan Básico: es un hosting para alojar un sitio web simple y con un tráfico moderado.
Plan Empresa: este plan es ideal para negocios y profesionales con un caudal de tráfico intermedio.
Plan Premium: Este plan es para sitios y aplicaciones más complejas con mucho tráfico.`,
    },
    {
        id: 3,
        titulo: "¿En cuanto tiempo tendré activo el servicio de Hosting?",
        descripcion: `El alta del servicio de hosting es inmediato y está automatizado.
Una vez que realices el pago, tu instancia de Hosting se crea automáticamente.
Te enviaremos por mail los datos de acceso para que puedas subir a tu espacio el sitio web o dar de alta las casillas de correo electrónico. Recibirás un correo electrónico a la dirección que dejaste al registrarte con los datos de acceso a tu panel de gestión cPanel®.`,
    },
    {
        id: 4,
        titulo: "¿Qué es un nombre de dominio?",
        descripcion: `Un nombre de dominio, usualmente llamado dominio, es un nombre fácil de recordar asociado a una dirección IP física de Internet.
Se trata del nombre único que se muestra después de @ en las direcciones de correo y después de www. en las direcciones web.`,
    },
    {
        id: 5,
        titulo: "¿Por qué necesito un dominio?",
        descripcion: `Necesitas un dominio para tener tu nombre propio en internet.
Gracias al dominio tu dirección online será única y accesible.
Así al publicar tu sitio web, llevarás tu marca online y le darás identidad propia a tu empresa.
Además, tus clientes te reconocerán cuando les envíes un mail y reconocerán fácilmente tu marca.`,
    },
    {
        id: 6,
        titulo: "Quiero delegar un dominio a IntermediaSP, ¿Cuáles son los dns?",
        descripcion: `ns1.intermediasp.com
ns2.intermediasp.com
ns3.intermediasp.com`,
    },
    {
        id: 7,
        titulo: "¿Cómo es la política de backups?",
        descripcion: `En IntermediaSP realizamos un backup semanal de toda la información de tu cuenta de hosting.
El back up incluye tus correos, tu web y bases de datos. Guardamos varias versiones de los backups para mejor seguridad.
De todos modos te recomendamos la creación de tus propios backups sobre todo cada vez que vayas hacer un cambio importante en tu sitio.
Puedes realizar tus backups desde tu panel de control.`,
    },
    {
        id: 8,
        titulo: "¿Puedo usar WordPress?",
        descripcion: `Utilizar WordPress es muy fácil si contratas un Hosting Wordpress en IntermediaSP.
Una vez que contrates el servicio vas a poder instalar WordPress desde el panel de control cPanel® que te suministramos.
En el Área de soporte encontrarás instructivos para guiarte.`,
    },
    {
        id: 9,
        titulo: "¿Puedo alojar una tienda online?",
        descripcion: `Todos los planes de Hosting que ofrecemos permiten alojar una tienda online.
También incluyen un Certificado de Seguridad gratuito Let's Encrypt para que los visitantes de tu sitio web se sientan seguros y no tengan alertas de seguridad al ingresar.
Adicionalmente, si necesitas certificados que den más nivel de confianza a tus compradores, te ofrecemos otros SSL con mayor nivel de autenticación.
Si tu web crece mucho y el tráfico aumenta, te recomendamos contratar una VPS, un Servidor Privado Virtual, que es más seguro y tiene prestaciones más estables donde puedes alojar solo tu tienda.`,
    },
    {
        id: 10,
        titulo: "¿Qué es el autoinstalador de aplicaciones web?",
        descripcion: `Desde el panel de control de tu hosting vas a poder instalar fácilmente las aplicaciones que necesites: WordPress, Joomla!, Drupal, Magento, WHMCS y Prestashop entre otras.`,
    },
    {
        id: 11,
        titulo: "¿Cuáles son las diferencias entre un hosting compartido y una VPS?",
        descripcion: `El hosting o alojamiento web es un servicio que se brinda en servidores compartidos con otros clientes que requieren el mismo tipo de servicio.
Al contratar un servicio de hosting compartido estas comprando el uso de un espacio en un servidor físico junto con otros clientes. Podrás almacenar todos los archivos y datos necesarios para que tu sitio web y tus correos funcionen correctamente.
Una VPS, un Virtual Private Server o Servidor Privado Virtual, es un servicio de uso exclusivo para tu página web.
En ese servidor los recursos adjudicados a tu instancia son propios para tu servicio y puedes tener una configuración acorde los requerimientos de tu proyecto.
Si necesitás más datos del servicio por favor comunicate con nosotros vía chat o mandanos un mail a: ventas@intermediasp.com`,
    },
    {
        id: 12,
        titulo: "¿Qué es un Hosting de correo?",
        descripcion: `Es un hosting solo para tu correo electrónico.
En este servicio no podrás alojar tu sitio web.
Es profesional y transmite confianza.
Tu dirección de email y las de tu equipo estarán asociados a tu sitio web
Es menos probable que tus emails sean marcados como spam
Tendrás más posibilidades en la configuración de tu plataforma de correo
Tus clientes te recordarán fácilmente por tu nombre de dominio`,
    },
    {
        id: 13,
        titulo: "¿Cómo puedo migrar mi sitio web a IntermediaSP?",
        descripcion: `Una vez que adquieras tu plan de hosting lo vas a poder migrar.
Puedes hacer la migración tú mismo desde el Cpanel.
- La podemos hacer nosotros sin cargo si tu hosting actual usa tecnología Cpanel.
- La haremos sin interrumpir el servicio actual
- Vamos a programar juntos tu migración
- Tendrás asesoramiento, soporte y seguimiento en el proceso.
- Tus cuentas de correo también pueden ser migradas si lo solicitas.
- La migración del sitio web no tiene costo
- Es importante que tengas en cuenta que, como en toda migración, puede ser necesario realizar retoques de diseño.`,
    },
    {
        id: 14,
        titulo: "¿El servicio de Hosting incluye SSL?",
        descripcion: `Todos los hostings de IntermediaSP cuentan con un certificado SSL provisto por la autoridad de certificación Let's Encrypt.
El SSL puede activarse desde el panel de control.`,
    },
    {
        id: 15,
        titulo: "¿Cómo puedo aumentar las prestaciones de mi plan de Hosting?",
        descripcion: `Podrás aumentar tu plan de hosting cuando lo necesites desde el Área de clientes.
Para pagar estarán disponibles los mismos medios de pagos que utilizaste al pagar el servicio la primera vez.
Del mismo modo que cuando realizaste el alta, una vez acreditado tu pago el plan de hosting se modificará de forma automática.`,
    },
    {
        id: 16,
        titulo: "¿Cómo y cuándo puedo solicitar la baja del servicio contratado?",
        descripcion: `Puedes solicitar la baja del servicio en cualquier momento desde el Área de clientes..
El servicio no será renovado en el próximo período de facturación.`,
    },
    {
        id: 17,
        titulo: "¿Qué nivel de servicio garantizan?",
        descripcion: `El SLA, Service Level Agreement o SLA, de IntermediaSP es 99.7 % anual.`,
    },
    {
        id: 18,
        titulo: "¿Que tipo de soporte tengo si contrato un Hosting?",
        descripcion: `Tendrás soporte telefónico, vía Whatsapp o mail.
Nuestro horario de atención telefónica es de lunes a viernes de 8 a 20 hs`,
    },
    {
        id: 19,
        titulo: "¿Por qué elegir a IntermediaSP como proveedor?",
        descripcion: `Porque contamos con más de 25 años de experiencia ofreciendo servicios de internet para emprendedores, profesionales y empresas.
Trabajamos todos los días, las 24 horas, con el compromiso de dar el mejor servicio a nuestros clientes.
Porque damos soporte telefónico y por Whatsapp o mail..
Nuestra red e instalaciones se encuentran monitoreadas activamente 7x24, lo que te brinda la garantía de seguridad y disponibilidad que tu proyecto en la web necesita.`,
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
                    <Accordion.Item>
                        <Accordion.Header>
                            <h5 className="d-flex align-items-center peso-500 fs-28 justify-content-center mb-0 ps-4">
                                ¿Cómo puedo pagar los servicios contratados?
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body className="ms-5">
                            <pre className="peso-400 fs-22 pre-wrap ps-1">
                                Tenemos varias formas de pago: Tarjeta de
                                crédito:
                            </pre>
                            <Image
                                className="mb-3"
                                src={tarjetas1}
                                fluid
                                alt="tarjetas"
                            />
                            <Image
                                className="mb-3"
                                src={tarjetas2}
                                fluid
                                alt="tarjetas"
                            />
                            <pre className="peso-400 fs-22 pre-wrap ps-1">
                                *dependiendo de tu banco emisor podrás pagar en
                                cuotas Tarjeta de débito En efectivo en puntos
                                de pago:
                            </pre>
                            <Image
                                className="mb-3"
                                src={tarjetas3}
                                fluid
                                alt="tarjetas"
                            />
                            <pre className="peso-400 fs-22 pre-wrap ps-1">
                                Transferencia bancaria. Consultar CVU (Clave
                                Virtual Única): 0000003100081300003223
                            </pre>
                        </Accordion.Body>
                    </Accordion.Item>
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
                    <Accordion.Item>
                        <Accordion.Header>
                            <h5 className="d-flex align-items-center peso-600 fs-16 justify-content-center mb-0 ps-2">
                                ¿Cómo puedo pagar los servicios contratados?
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <pre className="peso-500 fs-16 pre-wrap">
                                Tenemos varias formas de pago: Tarjeta de
                                crédito:
                            </pre>
                            <Image
                                className="mb-3"
                                src={tarjetas1}
                                fluid
                                alt="tarjetas"
                            />
                            <Image
                                className="mb-3"
                                src={tarjetas2}
                                fluid
                                alt="tarjetas"
                            />
                            <pre className="peso-500 fs-16 pre-wrap">
                                *dependiendo de tu banco emisor podrás pagar en
                                cuotas Tarjeta de débito En efectivo en puntos
                                de pago:
                            </pre>
                            <Image
                                className="mb-3"
                                src={tarjetas3}
                                fluid
                                alt="tarjetas"
                            />
                            <pre className="peso-500 fs-16 pre-wrap">
                                Transferencia bancaria. Consultar CVU (Clave
                                Virtual Única): 0000003100081300003223
                            </pre>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="d-flex justify-content-center pb-5">
                    <Button
                        onClick={() => {
                            setShow(show + 5);
                        }}
                        className={
                            show >= arrayTextos.length
                                ? "boton-vermas-cel d-none"
                                : "boton-vermas-cel"
                        }
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
