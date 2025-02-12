const footerTemplate = document.createElement('template');

var urlIndexHtml = '/index.html';
var urlImageLogoHtml = '/assets/images/logo-con-fondo/foto-perfil-gs_controles.jpg';
var urlSearchHtml = '/assets/pages/search/search.html';
var urlConstructionHtml = '/assets/pages/underconstruction/underconstruction.html';
var urlProductsHtml = '/assets/pages/products/allproducts.html';

footerTemplate.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <footer class="footer">
        <div class="footer_menu">
            <img class="logo_image" alt="GS Controles" title="GS Controles">
            <div class="menu_buscador">
                <div class="menu">
                    <nav>
                        <ul class="menu_list">
                            <li><a href="${urlIndexHtml}" title="Página Principal">Inicio</a></li>
                            <li class="submenu"><a href="${urlProductsHtml}" title="Productos">Productos</a></li>
                            <li><a href="${urlIndexHtml}#woweare" title="Ingresa para conocer más de nuestra empresa">Quienes Somos</a></li>
                            <li><a href="${urlIndexHtml}#contact" title="Para saber más o para consultas, puedes ponerte en contacto con nosotros">Contacto</a></li>
                            <li>
                                <div class="buscador_menu">
                                    <a class="input_icon_menu" href="${urlSearchHtml}" rel="noopener noreferrer" aria-label="Buscar productos" title="Busca el control remoto con la marca de tu electrodoméstico">
                                        <i class="bi_menu bi-search_menu">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi_menu bi-search_menu" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="footer_contact_menu">
                <ul class="menu">
                    <li class="menu_item">
                        <a class="menu_link" href="${urlConstructionHtml}" rel="noopener noreferrer" alt="Mándenos un WhatsApp" title="Mándenos Un WhatsApp">
                            <i class="bi bi-whatsapp"></i> +54 9 3426138796
                        </a>
                    </li>
                    <li class="menu_item">
                        <a class="menu_link" href="${urlConstructionHtml}" rel="noopener noreferrer" alt="Llámenos" title="Llámenos">
                            <i class="bi bi-telephone"></i> +54 9 3426138796
                        </a>
                    </li>
                    <li class="menu_item menu_link" alt="Nuestra Dirección" title="Nuestra Dirección">
                        <i class="bi bi-geo-alt"></i> Matheu 2420 - Santa Fe Capital - Argentina
                    </li>
                    <li class="menu_item">
                        <a class="menu_link" href="${urlConstructionHtml}" rel="noopener noreferrer" alt="Mándenos un E-Mail" title="Mándenos Un E-Mail">
                            <i class="bi bi-envelope"></i> gscontroles@gmail.com
                        </a>
                    </li>
                    <li class="menu_item">
                        <a class="menu_link" href="${urlConstructionHtml}" rel="noopener noreferrer" alt="Nuestro Facebook" title="Nuestro Facebook">
                            <i class="bi bi-facebook"></i> @gscontroles
                        </a>
                    </li>
                    <li class="menu_item">
                        <a class="menu_link" href="${urlConstructionHtml}" rel="noopener noreferrer" alt="Nuestro Instagram" title="Nuestro Instagram">
                            <i class="bi bi-instagram"></i> @gs.controles
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="derechos">
            <p>Desarrollado Por &lt;/DataCodeLabs&gt; - Database & Web Development | 2025</p>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const reset = document.querySelector('link[href*="reset"]');
        const logo = document.querySelector('link[href*="logo"]');
        const inputs = document.querySelector('link[href*="inputs"]');
        const buttons = document.querySelector('link[href*="buttons"]');
        const responsive = document.querySelector('link[href*="responsive"]');
        const shadowRoot = this.attachShadow({ mode: 'open' });

        [fontAwesome, reset, logo, inputs, buttons, responsive].forEach(link => {
            if (link) {
                shadowRoot.appendChild(link.cloneNode());
            }
        });

        const style = document.createElement('style');
        style.textContent = `
            @import url('/assets/css/style.css');
            
            .montserrat-alternates-regular {
                font-family: "Montserrat Alternates", serif;
                font-weight: 400;
                font-style: normal;
            }
            
            .footer {
                background-color: rgba(105, 117, 101, 0.9);
                border-top: 0.15rem solid var(--color-fifth);
                font-family: "Montserrat Alternates", sans-serif;
            }
        
            .footer_menu {
                align-items: center;
                border-top: 5rem var(--color-fifth);
                display: flex;
                gap: 5rem;
                justify-content: space-around;
                margin: 0;
                padding: 0.8rem 0;
            }
        
            .navegacion {
                align-items: center;
                display: flex;
                justify-content: space-around;
                margin: 0 1rem;
                padding: 0.1rem 0;
            }
        
            .logo_image {
                border-radius: 1rem;
                content: url(${urlImageLogoHtml});
                display: flex;
                width: 15%;
            }
        
            .menu_buscador {
                display: flex;
                gap: 0.4rem;
            }
        
            .menu_list {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                justify-content: center;
                list-style: none;
            }
        
            .menu_list li {
                margin: 0 0.5rem;
            }
        
            .menu_list a {
                color: var(--color-primary);
                cursor: pointer;
                display: block;
                font-size: 1.1rem;
                padding: 0.4rem 1rem;
                text-decoration: none;
                transition: all 1s;
            }
        
            .menu_list a:hover {
                color: var(--color-fifth);
                transform: scale(1.1); /* Aumenta el tamaño del texto */
                transition: all 1.2s;
            }
        
            /* search */
            .buscador_menu {
                align-items: center;
                border-radius: 1rem;
                display: flex;
                padding-right: 1rem;
                position: relative;
            }
        
            .bi_menu, .bi_modal {
                cursor: pointer;
            }
        
            .bi-search_menu {
                cursor: pointer;
                font-size: 1.2rem; /* Aumenta el tamaño del ícono */
                font-weight: 900; /* Añade peso al ícono */
            }
        
            .bi-search_menu svg {
                height: 1.2rem; /* Ajusta la altura del SVG */
                stroke-width: 4; /* Aumenta el grosor del trazo */
                width: 1.2rem; /* Ajusta el ancho del SVG */
            }
            
            .menu {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .menu_item {
                font-size: 1.1rem;
                transition: all 1s;
            }
            
            .menu_item:hover {
                transform: scale(1.1);
            }
            
            .menu_link {
                color: var(--color-primary);
                text-decoration: none;
                transition: all 1s;
            }
            
            .menu_link:hover {
                color: var(--color-fifth);
                transform: scale(1.1); /* Aumenta el tamaño del texto */
                transition: all 1.2s;
            }
            
            .bi {
                font-size: 1.3rem;
                font-weight: bold;
                padding: 0.5rem;
            }
            
            .derechos {
                background-color: var(--color-secondary);
                border-top: 0.15rem solid var(--color-fourth);
                bottom: 0;
                font-family: "Montserrat Alternates", sans-serif;
                font-size: 0.9em;
                font-weight: 500;
                padding: 10px;
                text-align: center;
            }
        
            p {
                font-family: "Montserrat Alternates", sans-serif;
            }
            
            /* Media queries para dispositivos medianos y pequeños */
            @media (max-width: 768px) {
                .footer_menu {
                    flex-direction: column;
                    gap: 2rem;
                }

                .logo_image {
                    width: 30%; /* Ajustar el tamaño del logo en dispositivos medianos */
                    margin-bottom: 1rem;
                }

                .menu_list {
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }

                .menu_list li {
                    margin: 0.5rem 0;
                }

                .menu_list a {
                    text-align: center;
                    width: 100%;
                }

                .buscador_menu {
                    width: 100%;
                    justify-content: center;
                }
            }

            @media (max-width: 450px) {
                .footer_menu {
                    gap: 1rem;
                }

                .logo_image {
                    width: 50%; /* Ajustar el tamaño del logo en dispositivos muy pequeños */
                    margin-bottom: 1rem;
                }

                .menu_list a {
                    font-size: 1rem; /* Ajustar el tamaño del texto en el menú */
                }

                .derechos {
                    font-size: 0.8em; /* Ajustar el tamaño del texto en la sección de derechos */
                }
            }
        `;
        shadowRoot.appendChild(style);
        
        shadowRoot.appendChild(footerTemplate.content);
    }
}
customElements.define('footer-component', Footer);