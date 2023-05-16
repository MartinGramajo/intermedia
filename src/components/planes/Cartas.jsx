import React from "react";
import { Button, Image } from "react-bootstrap";
import vps from "../../assets/img/vps.png";
import web from "../../assets/img/web.png";
import dominio from "../../assets/img/dominios.png";

export default function Cartas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 py-4">
          <div className="d-flex justify-content-center">
            <div className="cartas">
              <div className="text-center">
                <Image className="" src={vps} fluid alt=" vps" />
              </div>
              <div className="text-center ">
                <h3>VPS</h3>
                <h5>
                  Servidores Privados Virtuales SSD <br /> Autonomía +
                  Performance + SSD
                </h5>
              </div>
              <div className="text-center">
                <h3 className="azul-precio">ARS 5700</h3>
                <h6>Desde ARS 5700 x mes + iva</h6>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="btn-precio"> COMPRAR </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 py-4">
          <div className="d-flex justify-content-center">
            <div className="cartas">
              <div className="text-center">
                <Image className="" src={web} fluid alt=" vps" />
              </div>
              <div className="text-center">
                <h3>Web Hosting</h3>
                <h5 className="pb-4">Soporte + Seguridad + Asesoramiento</h5>
              </div>
              <div className="text-center">
                <h3 className="azul-precio">ARS 500</h3>
                <h6>Planes desde ARS 500 x mes + iva x el primer año</h6>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="btn-precio"> COMPRAR </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 py-4">
          <div className="d-flex justify-content-center">
            <div className="cartas">
              <div className="text-center">
                <Image className="" src={dominio} fluid alt=" vps" />
              </div>
              <div className="text-center">
                <h3>Dominios</h3>
                <h5>
                  Registrá tu dominio.
                  <br /> Nombre + Dominio + Clientes en un click
                </h5>
              </div>
              <div className="text-center">
                <h3 className="azul-precio">ARS 2200</h3>
                <h6>Desde ARS 2200 + iva x año</h6>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="btn-precio"> COMPRAR </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
