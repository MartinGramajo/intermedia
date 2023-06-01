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
          <div className="d-flex justify-content-evenly text-white text-decoration-none">
            <div className="py-5">
              <div className="pb-4">
                <h4 className="pb-2 peso-700 fs-28">Ubicación</h4>
                <p className="peso-500 fs-16">
                  Tronador 3430 1B <br />
                  Edificio Tronador 3 <br />
                  1430 Buenos Aires
                </p>
              </div>

              <div>
                <h4 className="pb-2 peso-700 fs-28">Datos de contacto</h4>
                <div className="peso-500 fs-16">
                  <a className="text-white text-decoration-none  " href="">
                    Tel.: +54 9 11 3369-0586 <br />
                  </a>

                  <a className="text-white text-decoration-none " href="">
                    ventas@intermediasp.com
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="pb-4">
                <h4 className="pb-2 peso-700 fs-28">Compañía</h4>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/compania/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nosotros
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/normas-de-uso/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Normas de uso
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/programa-de-afiliados/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Programa de Afiliados
                  </a>
                </div>
              </div>
              <div>
                <h4 className="pb-2 peso-700 fs-28">Ayuda</h4>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/contacto/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contacto
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/whmcs/index.php?rp=/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Área de clientes
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/ingresar-webmail/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Webmail
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://fc.ar.inter.net/get.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Factura online
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="pb-4">
                <h4 className="pb-2 peso-700 fs-28">Servicios</h4>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/web-hosting-compartido/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting Compartido
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/web-hosting-compartido/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting Prestashop
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/hosting-wordpress/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting WordPress
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/web-hosting-compartido/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting Magento
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/hosting-reseller/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting Reseller
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/hosting-dedicado-cloud-servers-hd-ssd-vps/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VPS
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/dominios/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dominios
                  </a>
                </div>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/certificados/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificados SSL
                  </a>
                </div>
              </div>
              <div>
                <h4 className="pb-2 peso-700 fs-28">Área soporte</h4>
                <div className="peso-500 fs-16">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/soporte/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guías prácticas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <a
              href="https://www.facebook.com/intermediasp/"
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
              href="https://www.instagram.com/intermediasp/"
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
          <div className="text-center text-white text-decoration-none pt-2 pb-5">
            <p className="peso-500 fs-16">
              IntermediaSP “es marca de Interdotnet Argentina SA”
            </p>
          </div>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="d-flex justify-content-center text-center text-white text-decoration-none">
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
              <div className="peso-500 fs-14">
                <a className="text-white text-decoration-none" href="">
                  Tel.: +54 9 11 3369-0586 <br />
                </a>

                <a className="text-white text-decoration-none" href="">
                  ventas@intermediasp.com
                </a>
              </div>
            </div>
            <div className="text-center pt-4 ">
              <a
                href="https://www.facebook.com/intermediasp/"
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
                href="https://www.instagram.com/intermediasp/"
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
          <div className="d-flex justify-content-between text-white text-decoration-none">
            <div>
              <div className="pb-4">
                <h4 className="pb-3 fs-16 peso-800">Compañía</h4>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/compania/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nosotros
                  </a>
                </div>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/normas-de-uso/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Normas de uso
                  </a>
                </div>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/programa-de-afiliados/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Programa de Afiliados
                  </a>
                </div>
              </div>
              <div className="pb-5">
                <h4 className="pb-3 fs-16 peso-800">Ayuda</h4>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/contacto/?id="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contacto
                  </a>
                </div>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/whmcs/index.php?rp=/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Área de clientes
                  </a>
                </div>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/ingresar-webmail/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Webmail
                  </a>
                </div>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://fc.ar.inter.net/get.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Factura online
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-4 texto-direccion">
                <h4 className="pb-2 fs-16 peso-800">Servicios</h4>
                <div>
                  <div className="peso-500 fs-16">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/web-hosting-compartido/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosting Compartido
                    </a>
                  </div>
                  <div className="peso-500 fs-14 mb-4">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/web-hosting-compartido/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosting Prestashop
                    </a>
                  </div>
                </div>
                <div>
                  <div className="peso-500 fs-14">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/hosting-wordpress/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosting WordPress
                    </a>
                  </div>
                  <div className="peso-500 fs-14">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/web-hosting-compartido/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosting Magento
                    </a>
                  </div>
                  <div className="peso-500 fs-14">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/hosting-reseller/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hosting Reseller
                    </a>
                  </div>
                  <div className="peso-500 fs-14">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/hosting-dedicado-cloud-servers-hd-ssd-vps/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VPS
                    </a>
                  </div>
                  <div className="peso-500 fs-14">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/dominios/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dominios
                    </a>
                  </div>
                  <div className="peso-500 fs-14">
                    <a
                      className="text-white text-decoration-none"
                      href="https://www.intermediasp.com/certificados/?id="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificados SSL
                    </a>
                  </div>
                </div>
              </div>
              <div className="pb-4 texto-direccion">
                <h4 className="pb-2 fs-16 peso-800">Área soporte</h4>
                <div className="peso-500 fs-14">
                  <a
                    className="text-white text-decoration-none"
                    href="https://www.intermediasp.com/soporte/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guías prácticas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-decoration-none py-4">
          <h6 className="pb-4">
            IntermediaSP “es marca de Interdotnet Argentina SA”
          </h6>
        </div>
      </div>
    </div>
  );
};
