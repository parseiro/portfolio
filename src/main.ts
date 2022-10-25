import "./scss/style.scss";
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  
      <header class="font-display flex flex-col">
        <nav
          class="container mx-auto flex flex-row items-center justify-between rounded border-gray-200 bg-white text-lg"
        >
          <span class="inline text-5xl font-bold leading-[3.75rem] text-g12">
            Leonardo
          </span>
          <!--      <ul class="flex flex-wrap items-center justify-between">
        <li class="mr-auto">
          <h1 class="logotipo font-bold inline text-5xl leading-[3.75rem]">
            Leonardo
          </h1>
        </li>
        <li class="btn ml-auto">Experiência</li>
        <li class="btn">Formação</li>
        <li class="btn">Contato</li>
      </ul>-->

          <button
            aria-controls="navbar-default"
            aria-expanded="false"
            class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
            data-collapse-toggle="navbar-default"
            type="button"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full sm:block sm:w-auto" id="navbar-default">
            <ul
              class="mt-4 flex flex-col rounded-lg border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:mt-0 sm:flex-row sm:space-x-8 sm:border-0 sm:bg-white sm:text-sm sm:font-medium sm:dark:bg-gray-900"
            >
              <li>
                <a aria-current="page" class="navbar-item" href="#produtos"
                  >Experiência</a
                >
              </li>
              <li>
                <a class="navbar-item" href="#formacao">Formação</a>
              </li>
              <li>
                <a class="navbar-item" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          class="border-1 mt-20 grid grid-cols-12 items-center overflow-hidden border-solid border-red-700"
        >
          <img
            alt="Homem de casaco azul e camisa branca, de braços cruzados"
            class="h-88 col-span-4 col-start-1 rounded object-cover"
            src="src/img/JX3A6225.jpg"
          />

          <div class="col-span-5 col-start-6">
            <h1 class="text-display text-6xl font-bold text-g12">
              Desenvolvedor Full Stack
            </h1>
            <h2 class="localizacao font-display text-2xl font-medium">
              Localização: Curitiba, Brasil
            </h2>
          </div>
          <!--<div class="col-span-2"></div>-->
        </div>
      </header>

      <main
        class="container mt-36 grid grid-cols-12 grid-rows-1 gap-y-10 border-red-300"
        id="experiencia"
      >
        <div class="col-span-5"></div>
        <p
          class="text-caption col-span-7 text-2xl font-medium leading-8 text-g9"
        >
          I develop small projects using
          <span class="font-bold"
            >HTML, CSS, Javascript, Angular, Java,
            <span class="whitespace-nowrap">Spring Boot.</span></span
          >
        </p>

        <div class="coluna-quando">
          <div class="font-display color-g7 text-left text-4xl">Portfolio</div>
          2022
        </div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Leitões Grill</div>
            <div class="card-text">
              <a
                class="card-text underline"
                href="https://parseiro.github.io/leitoesGrill/dist"
                >This website</a
              >
              was made as a newer version
              <a
                class="card-text underline"
                href="https://deliciasdacarn8.wixsite.com/meusite/"
                >of this masterpiece</a
              >. This was an academic project.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML & CSS</li>
              <li class="caixinha">Tailwind</li>
              <li class="caixinha">Flowbite</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2022</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Dognelson</div>
            <div class="card-text">
              Cats and dogs
              <a href="https://parseiro.github.io/dognelson/"
                >adoption fair website</a
              >
              and its
              <a href="https://github.com/parseiro/dognelson">source code</a>.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML & CSS</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2022</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">GFT Bootcamp</div>
            <div class="card-text">
              <a href="https://github.com/parseiro/spring-gft-starter-leonardo"
                >This</a
              >
              was my solution to the final challenge of GFT Starter 5 bootcamp.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">Java</li>
              <li class="caixinha">Spring Boot</li>
              <li class="caixinha">Feign</li>
              <li class="caixinha">REST API</li>
              <li class="caixinha">Swagger</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2022</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Store Example</div>
            <div class="card-text">
              <a href="https://github.com/parseiro/store-jhipster-example"
                >Project</a
              >
              made using JHipster.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML & CSS</li>
              <li class="caixinha">Java</li>
              <li class="caixinha">Angular</li>
              <li class="caixinha">Spring Boot</li>
              <li class="caixinha">JHipster</li>
              <li class="caixinha">PostgreSQL</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2022</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Dengue Utility</div>
            <div class="card-text">
              <a href="https://dengue.vilelapinheiro.com/#/patientEdit"
                >Frontend real-life project</a
              >
              and its
              <a
                href="https://github.com/parseiro/calculadora-hidratacao-na-dengue"
                >source code</a
              >
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML & CSS</li>
              <li class="caixinha">Javascript</li>
              <li class="caixinha">Typescript</li>
              <li class="caixinha">Angular</li>
              <li class="caixinha">Angular Material</li>
              <li class="caixinha">Bootstrap</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2022</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Social Network Wall</div>
            <div class="card-text">
              <a href="https://github.com/parseiro/social-network-wall">This</a>
              was an academic project for a social network.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML & CSS</li>
              <li class="caixinha">Javascript</li>
              <li class="caixinha">Typescript</li>
              <li class="caixinha">Angular</li>
              <li class="caixinha">Angular Material</li>
              <li class="caixinha">Bootstrap</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2022</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Agenda</div>
            <div class="card-text">
              Academic
              <a href="https://github.com/parseiro/Primeiro-projeto-android/"
                >Android app</a
              >
              (source code and print screens available).
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">Android Studio</li>
              <li class="caixinha">Java</li>
              <li class="caixinha">Kotlin</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2021</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Agenda</div>
            <div class="card-text">
              This is an academic and
              <a href="https://github.com/parseiro/SwingClientServer"
                >desktop project</a
              >
              using Swing and TCP/IP.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">Java</li>
              <li class="caixinha">Swing</li>
              <li class="caixinha">TCP/IP</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2021</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Pílulas do SUS</div>
            <div class="card-text">Healthcare blog</div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML & CSS</li>
              <li class="caixinha">Figma</li>
              <li class="caixinha">Javascript</li>
              <li class="caixinha">Instagram</li>
              <li class="caixinha">PHP</li>
              <li class="caixinha">Wordpress</li>
              <li class="caixinha">Facebook</li>
              <li class="caixinha">Author</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2008-2009</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Handy Systems</div>
            <div class="card-text">
              Múltiplos sistemas pequenos envolvendo e-commerce.
            </div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">HTML</li>
              <li class="caixinha">PHP</li>
              <li class="caixinha">Linux</li>
              <li class="caixinha">MySQL</li>
              <li class="caixinha">Excel</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2007</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Sascar</div>
            <div class="card-text">Vehicle tracker, personal tracker</div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">Embedded C</li>
              <li class="caixinha">TCP/IP</li>
              <li class="caixinha">Microcontroler</li>
              <li class="caixinha">GPS</li>
              <li class="caixinha">3G modem</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2006-2007</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Siemens VDO Guarulhos</div>
            <div class="card-text">Vehicle tracker</div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">Embedded C</li>
              <li class="caixinha">TCP/IP</li>
              <li class="caixinha">Microcontroler</li>
              <li class="caixinha">GPS</li>
              <li class="caixinha">3G modem</li>
              <li class="caixinha">Satellite</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2004-2005</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Conectway</div>
            <div class="card-text">Provedor de internet</div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">IT and Telecom Technician</div>
            <ul class="caixinhas">
              <li class="caixinha">Redes</li>
              <li class="caixinha">Suporte</li>
              <li class="caixinha">Linux</li>
              <li class="caixinha">Servidores</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">1993-2006</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Datamídia Informática</div>
            <div class="card-text">Montagem e venda de computadores</div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Técnico TI e Telecom</div>
            <ul class="caixinhas">
              <li class="caixinha">Assembly</li>
              <li class="caixinha">Installation</li>
              <li class="caixinha">Sales</li>
              <li class="caixinha">Support</li>
            </ul>
          </div>
        </div>

        <div class="coluna-quando">2000-2001</div>
        <div class="caixa-experiencia">
          <div class="primeira-coluna">
            <div class="card-title">Bedrock IRC Server</div>
            <div class="card-text">Servidor de IRC</div>
          </div>
          <div class="segunda-coluna">
            <div class="job-title">Developer</div>
            <ul class="caixinhas">
              <li class="caixinha">C</li>
              <li class="caixinha">TCP/IP</li>
              <li class="caixinha">MySQL</li>
              <li class="caixinha">FreeBSD</li>
            </ul>
          </div>
        </div>
      </main>
      

`;

