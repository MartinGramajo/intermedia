import React from "react";
import { Button, Image } from "react-bootstrap";
import mercado from "../../assets/img/mercadopago.png";
import { Link } from "react-router-dom";
import "./pagar.css";

export const MercadoPagoDominio = () => {
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
                <h2 className="peso-700 fs-16">Dominio</h2>
              </div>
              <div className="mx-3">
                <h2 className="peso-500 fs-16">$6.655</h2>
              </div>
            </div>
            <hr />
            <div className=" container d-flex justify-content-between ">
              <div className="mx-3">
                <h2 className="peso-700 fs-16">Total</h2>
              </div>
              <div className="mx-3">
                <h2 className="peso-800 fs-16 ">$6.655</h2>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="boton-contacto-mercado border-0 "
                as={Link}
                to="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/f70534f5-f4bf-4cea-b379-084f67f109cf/payment-option-form/?preference-id=180375511-5da261b3-91b3-4d34-a939-f52b21fe447e&router-request-id=fa11ebac-a6ce-4c8c-ab3a-fd7d172f171e&source=link&p=77d45018d44de1d89562ab5f77cbd2c7#/"
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
