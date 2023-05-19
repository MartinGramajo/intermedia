import React from "react";
import { Col, Form, Row, Button, Image } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";
import wsp from "../../assets/img/WhatsApp.png";

export default function FormWsp() {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    cel: "",
    email: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };
  const texto = `Hola quisiera tener asesoramiento, estos son mis datos: me llamo ${input.nombre} ${input.apellido}, este es mi numero de contacto: ${input.cel} y mi email: ${input.email}`;
  const form = useRef();
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      const URL = `https://api.whatsapp.com/send?phone=543814490276&text=${encodeURIComponent(
        texto
      )}`;
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
    <div className="container">
      <div className="d-none d-md-block">
        <h1 className="peso-700 fs-32 ">Completa tus datos</h1>
      </div>
      <div className="d-md-none d-block">
        <h1 className="peso-700 fs-23 pb-3 ms-2">Completa tus datos</h1>
      </div>
      <Form
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
        className="mx-auto form mb-5 p-2  "
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
                <Form.Label className="peso-400 fs-14 input-texto my-2">
                  Nombre
                </Form.Label>
                <Form.Control
                  className="input-style"
                  type="text"
                  required
                  name="nombre"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="peso-400 fs-14 input-texto my-2">
                  Apellido
                </Form.Label>
                <Form.Control
                  className="input-style"
                  type="text"
                  required
                  name="apellido"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su apellido completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="peso-400 fs-14 input-texto my-2">
                  Email
                </Form.Label>
                <Form.Control
                  className="input-style"
                  type="email"
                  required
                  name="email"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su Email por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="peso-400 fs-14 input-texto my-2">
                  Teléfono
                </Form.Label>
                <Form.Control
                  className="mb-2 input-style"
                  type="text"
                  required
                  name="cel"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su número de WhatsApp completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>
        </div>
        <div className="d-flex mt-3 centrado padding-wsp">
          <Button
            className="boton-contacto-wsp border-0"
            size="sm"
            type="submit"
          >
            <div className="d-flex flex-row justify-content-center">
              <Image className="icono-wsp mx-2" src={wsp} fluid alt="iconos" />
              <h6 className="fs-20 peso-700 mt-1"> Habla con un asesor</h6>
            </div>
          </Button>
        </div>
      </Form>
    </div>
  );
}
