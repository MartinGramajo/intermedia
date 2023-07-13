import React from "react";
import { Button, Image } from "react-bootstrap";
import mercado from "../../assets/img/mercadopago.png";
import { Link } from "react-router-dom";
import "./pagar.css";

export const MercadoPagoHosting = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="mercado-carta">
          <div className="content-mercado-carta ">
            <div className="text-center">
              <Image
                className="mercado-logo "
                src={mercado}
                fluid
                alt="iconos"
              />
            </div>
            <div className="container">
              <h2 className="peso-500 fs-14 ms-3">Detalle de compra</h2>
            </div>
            <div className=" container d-flex justify-content-between ">
              <div className="mx-3">
                <h2 className="peso-700 fs-16">Web Hosting</h2>
              </div>
              <div className="mx-3">
                <h2 className="peso-500 fs-16">$968</h2>
              </div>
            </div>
            <hr />
            <div className=" container d-flex justify-content-between ">
              <div className="mx-3">
                <h2 className="peso-700 fs-16">Total</h2>
              </div>
              <div className="mx-3">
                <h2 className="peso-800 fs-16 ">$968</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="boton-contacto-mercado border-0 "
                as={Link}
                to="https://mpago.la/1qVBFXS"
                target="_blank"
                size="sm"
                type="submit"
              >
                <div className="d-flex align-items-center justify-content-center">
                  <span className="fs-16 peso-800 mt-2">PAGAR</span>{" "}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
