import React from "react";
import "./pagar.css";
import FormWsp from "./FormWsp";
import { MercadoPago } from "./MercadoPago";

export const PagarContenido = () => {
  return (
    <div className="container">
      <div className="d-none d-md-block">
        <h1 className="peso-500-italic fs-32 py-5 text-center">
          Una vez de completado el pago un representante se comunicará <br />{" "}
          contigo para asistirte en el proceso de migración
        </h1>
      </div>
      <div className="d-md-none d-block">
        <h1 className="peso-500-italic fs-16 py-5 text-center">
          Una vez de completado el pago un <br /> representante se comunicará{" "}
          <br /> contigo para asistirte <br />
          en el proceso de migración
        </h1>
      </div>
      <div className="row py-5">
        <div className="col-12 col-lg-6">
          <FormWsp />
        </div>
        <div className="col-12 col-lg-6">
          <MercadoPago />
        </div>
      </div>
    </div>
  );
};
