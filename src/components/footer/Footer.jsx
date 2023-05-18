import React from "react";
import "./footer.css";
import { Image } from "react-bootstrap";
import facebook from "../../assets/img/Facebook.png";
import instagram from "../../assets/img/Instagram.png";

export const Footer = () => {
  return (
    <div className="footer-bg mt-auto">
      <div className="d-none d-md-block">
        <div className="container-fluid">
          <div className="d-flex justify-content-evenly text-white">
            <div className="py-5">
              <div className="pb-4">
                <h4 className="pb-2 peso-700 fs-28">Ubicacion</h4>
                <p className="peso-500 fs-16">
                  Tronador 3430 1B <br />
                  Edificio Tronador 3 <br />
                  1430 Buenos Aires
                </p>
              </div>

              <div>
                <h4 className="pb-2 peso-700 fs-28">Datos de contacto</h4>
                <p className="peso-500 fs-16">
                  Tel.: (54-11) 5032-9999 <br />
                  ventas@intermediasp.com
                </p>
              </div>
            </div>
            <div className="py-5">
              <div className="pb-4">
                <h4 className="pb-2 peso-700 fs-28">Compañía</h4>
                <p className="peso-500 fs-16">
                  Nosotros <br />
                  Normas de uso <br />
                  Programa de Afiliados
                </p>
              </div>
              <div>
                <h4 className="pb-2 peso-700 fs-28">Ayuda</h4>
                <p className="peso-500 fs-16">
                  Contacto <br /> Área de clientes <br /> Webmail <br /> Factura
                  online
                </p>
              </div>
            </div>
            <div className="py-5">
              <div className="pb-4">
                <h4 className="pb-2 peso-700 fs-28">Servicios</h4>
                <p className="peso-500 fs-16 ">
                  Hosting Compartido <br /> Hosting Prestashop <br /> Hosting
                  WordPress <br /> Hosting Magento <br /> Hosting Reseller{" "}
                  <br /> VPS <br /> Dominios <br /> Certificados SSL
                </p>
              </div>
              <div>
                <h4 className="pb-2 peso-700 fs-28">Área soporte</h4>
                <p className="peso-500 fs-16">Guías prácticas</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="iconos-redes mx-2"
                src={facebook}
                fluid
                alt="iconos"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="iconos-redes mx-2"
                src={instagram}
                fluid
                alt="iconos"
              />
            </a>
          </div>
          <div className="text-center text-white pt-2 pb-5">
            <p className="peso-500 fs-16">
              IntermediaSP “es marca de Interdotnet Argentina SA”
            </p>
          </div>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="d-flex justify-content-center text-center text-white">
          <div className="pt-5 pb-4">
            <div className="pb-4">
              <h4 className="pb-2 fs-16 peso-800">Ubicación</h4>
              <p className="peso-500 fs-14">
                Tronador 3430 1B <br />
                Edificio Tronador 3 <br />
                1430 Buenos Aires
              </p>
            </div>
            <div>
              <h4 className="pb-2 fs-16 peso-800">Datos de contacto</h4>
              <p className="peso-500 fs-14">
                Tel.: (54-11) 5032-9999 <br />
                ventas@intermediasp.com
              </p>
            </div>
            <div className="text-center pt-4 ">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="iconos-redes mx-2"
                  src={facebook}
                  fluid
                  alt="iconos"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="iconos-redes mx-2"
                  src={instagram}
                  fluid
                  alt="iconos"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between text-white">
            <div>
              <div className="pb-4">
                <h4 className="pb-3 fs-16 peso-800">Compañía</h4>
                <p className="peso-500 fs-14">
                  Nosotros <br />
                  Normas de uso <br />
                  Programa de Afiliados
                </p>
              </div>
              <div className="pb-5">
                <h4 className="pb-3 fs-16 peso-800">Ayuda</h4>
                <p className="peso-500 fs-14">
                  Contacto <br /> Área de clientes <br /> Webmail <br /> Factura
                  online
                </p>
              </div>
            </div>
            <div>
              <div className="pb-4 texto-direccion">
                <h4 className="pb-2 fs-16 peso-800">Servicios</h4>
                <p className="peso-500 fs-14 mb-4">
                  Hosting Compartido <br /> Hosting Prestashop <br />
                </p>
                <p className="peso-500 fs-14 ">
                  Hosting Magento <br /> Hosting Reseller <br /> VPS <br />{" "}
                  Dominios <br /> Certificados SSL
                </p>
              </div>
              <div className="pb-4 texto-direccion">
                <h4 className="pb-2 fs-16 peso-800">Área soporte</h4>
                <p className="peso-500 fs-14">Guías prácticas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white py-4">
          <h6 className="pb-4">
            IntermediaSP “es marca de Interdotnet Argentina SA”
          </h6>
        </div>
      </div>
    </div>
  );
};
