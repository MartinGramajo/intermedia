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
                to="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/9deab03e-9afe-4033-acdd-1f1b3e56beeb/payment-option-form/?preference-id=180375511-3e3e8ea4-be07-4efb-b4f9-60c5966e4d1d&router-request-id=42fc1570-9f84-48e3-a35c-fb795b4c1050&source=link&p=77d45018d44de1d89562ab5f77cbd2c7#/"
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
