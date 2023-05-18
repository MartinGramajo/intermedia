import React from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormWsp() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/

  const sendEmail = (e) => {
    const form = e.currentTarget;
    const { nombre, cel, email } = form;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      const URL = `https://api.whatsapp.com/send?phone=${cel}&text=Hi,${nombre}%20you%20have%20scheduled%20an%20appointment%20on%20${email}%20with%20the%20following%20instructions%20&source=&data=`;
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false);
      window.open(URL, "_blank");
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Form
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
        className="mx-auto form mb-5 p-2 "
      >
        <div>
          <div className="card-body">
            <Row className="mb-2">
              <Form.Group
                className=""
                as={Col}
                md="12"
                controlId="validationCustom03"
              >
                <Form.Label className="text-black-50 tamaño-medio">
                  Nombre
                </Form.Label>
                <Form.Control type="text" required name="nombre" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group
                className=""
                as={Col}
                md="12"
                controlId="validationCustom03"
              >
                <Form.Label className="text-black-50 tamaño-medio">
                  Apellido
                </Form.Label>
                <Form.Control type="text" required name="apellido" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="text-black-50 mt-2 tamaño-medio">
                  Whatsapp
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  type="text"
                  required
                  name="cel"
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su número de whatsapp completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-black-50 mt-2 tamaño-medio">
                  Email
                </Form.Label>
                <Form.Control type="email" required name="email" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su Email por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <Button
            className="boton-contacto-wsp border-0"
            size="sm"
            type="submit"
            value="Send"
          >
            <span className=" peso-asap-regular tamaño-chico"> ENVIAR</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}
