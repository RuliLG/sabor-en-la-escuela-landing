import Navbar from './components/Navbar'
import CountdownComponent from './components/Countdown'

export default function Home() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <Navbar />
    <div className="">
      <section className="relative pb-24 lg:pb-40 overflow-hidden">
        <img className="hidden lg:block absolute top-0 left-0 w-32 md:w-auto z-10" src="/saturn-assets/images/headers/star-header-dark.png" alt="" />
        <img className="absolute top-0 left-1/2 transform -translate-x-1/2" src="/saturn-assets/images/headers/light-blue-left.png" alt="" />
        <img className="absolute top-0 right-0" src="/saturn-assets/images/headers/orange-light-right.png" alt="" />
        <div className="hidden lg:block absolute top-0 left-0 md:w-5/12 xl:w-4/12 -ml-5 h-full bg-gray-900"></div>
        <div className="h-60"></div>
        <div className="relative container px-4 mx-auto z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <img className="block h-112 rounded-3xl object-cover md:h-150 w-full" src="/food115.jpeg" alt="" />
                </div>
              </div>
              <div className="w-full lg:w-3/5 px-4">
                <div className="max-w-md lg:max-w-2xl mx-auto lg:mr-0">
                  <div className="max-w-2xl">
                    <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-8xl font-bold text-gray-900 mb-8 sm:mb-14">
                      <span>Comer sano en la oficina</span>
                      <span className="font-serif italic"> nunca fue tan fácil</span>
                    </h1>
                  </div>
                  <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
                    <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                      <svg width="84" height="10" viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <div className="max-w-md space-y-6">
                      <p className="md:text-xl text-gray-600 font-semibold">Comer sano en el trabajo ya no es un reto. Con nuestro servicio, puedes disfrutar de comidas equilibradas y disponer de tiempo adicional para dedicarlo a lo que más te importa.</p>
                      <p className="md:text-xl text-gray-600 font-semibold">Disponible en Gran Canaria, zona Minilla, 7 Palmas y Guanarteme.</p>
                    </div>
                  </div>
                  <div className="sm:flex items-center">
                    <a className="relative group inline-block w-full sm:w-auto py-4 px-6 text-white font-semibold bg-orange-900 rounded-md overflow-hidden" href="#apuntarme">
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <div className="relative flex items-center justify-center">
                        <span className="mr-4">Apuntarme a la lista de espera</span>
                        <span>
                          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z" fill="#FFF2EE"></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" id="nuestra-comida">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-24">
              <span className="font-serif italic">Cómo</span>
              <span> lo hacemos</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 lg:pb-10 mb-16 lg:mb-0">
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-blue-100 rounded-full">
                    <img src="/saturn-assets/images/features/icon-element.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Comida saludable</h3>
                    <span className="text-sm text-gray-400">Nuestra comida casera se prepara con ingredientes frescos y saludables, para que disfrutes de comidas deliciosas y equilibradas.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-orange-100 rounded-full">
                    <img src="/saturn-assets/images/features/icon-hierarchy.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Variedad de menús</h3>
                    <span className="text-sm text-gray-400">Ofrecemos una amplia gama de opciones en nuestro menú para satisfacer todos los gustos y preferencias, desde platos tradicionales hasta opciones vegetarianas y veganas.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-gray-300 rounded-full">
                    <img src="/saturn-assets/images/features/icon-school-bag.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">De la cocina a tu mesa</h3>
                    <span className="text-sm text-gray-400">Recibe tus comidas directamente en la oficina, calientes y listas para disfrutar, sin demoras ni complicaciones.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-red-200 rounded-full">
                    <img src="/saturn-assets/images/features/icon-robot.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Sin preparación ni limpieza</h3>
                    <span className="text-sm text-gray-400">Nos encargamos de todo, desde la cocina hasta la entrega, para que puedas concentrarte en tu trabajo sin preocupaciones.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-yellow-200 rounded-full">
                    <img src="/saturn-assets/images/features/icon-cam.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Sabor auténtico</h3>
                    <span className="text-sm text-gray-400">Cada plato es cocinado con el cariño y la atención que se encuentra en casa, para brindarte el sabor genuino de la comida casera.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-green-200 rounded-full">
                    <img src="/saturn-assets/images/features/icon-flask.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Adaptado a tus gustos</h3>
                    <span className="text-sm text-gray-400">Ajustamos nuestros menús para satisfacer tus preferencias personales, para que cada comida sea justo como te gusta.</span>
                  </div>
                </div>
                <div className="flex items-start justify-center md:col-span-2 lg:col-span-3 border border-green-100 p-8 rounded-lg bg-green-50">
                  <div className="max-w-2xl text-center">
                    <h3 className="text-xl font-semibold">Zona 7 Palmas, La Minilla, Guanarteme</h3>
                    <span className="text-sm text-green-900">Por el momento repartimos en la zona de 7 Palmas, La Minilla y la capital Gran Canaria. ¡No dudes en apuntarte a la lista de espera aún estando en otra zona!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-20 lg:pt-24 overflow-hidden" id="nosotros">
        <img className="absolute bottom-0 left-0" src="/saturn-assets/images/content/light-blue-left.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md md:max-w-lg mx-auto lg:mx-0">
                  <h2 className="font-heading text-4xl xs:text-6xl md:text-6xl font-bold text-gray-900 mb-12">
                    <span className="block">Te ayudamos a tener
                    <span className="font-serif italic"> más horas al día</span></span>
                  </h2>
                  <ul className="mb-6">
                    <li className="flex mb-6 items-center">
                      <img className="w-6 h-6 mr-4" src="/saturn-assets/images/content/check-green.svg" alt="" />
                      <span className="text-base xs:text-lg font-semibold text-gray-900">Equilibra tus responsabilidades laborales con una alimentación nutritiva</span>
                    </li>
                    <li className="flex mb-6 items-center">
                      <img className="w-6 h-6 mr-4" src="/saturn-assets/images/content/check-green.svg" alt="" />
                      <span className="text-base xs:text-lg font-semibold text-gray-900">Recupera horas para compartir con tu familia y amigos</span>
                    </li>
                    <li className="flex items-center">
                      <img className="w-6 h-6 mr-4" src="/saturn-assets/images/content/check-green.svg" alt="" />
                      <span className="text-base xs:text-lg font-semibold text-gray-900">Simplifica tu vida en la oficina y mejora tu bienestar personal</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-md md:max-w-lg mx-auto lg:mr-0">
                  <p className="text-lg text-gray-700 mb-5">La vida en la oficina puede ser una vorágine interminable de tareas y reuniones, lo que a menudo hace que <strong>la comida saludable sea un lujo inalcanzable</strong>. Pasar largas horas en el trabajo y luego lidiar con la preparación de comidas puede resultar agotador y poco atractivo. Además, optar por comer fuera de la oficina a diario no solo es costoso, sino que a menudo significa sacrificar la <strong>calidad de la comida</strong>.</p>
                  <p className="text-lg text-gray-700 mb-5">En <em>Sabor en la Oficina</em>, hemos encontrado la solución para que disfrutes de comida saludable en la oficina sin tener que gastar tu valioso tiempo en la cocina. Imagina saborear <strong>platos caseros y nutritivos cada día</strong> laboral, sin comprometer la calidad ni tu bienestar. Con nuestro servicio, <strong>la comida sana y deliciosa es una realidad</strong>.</p>
                  <p className="text-lg text-gray-700 mb-8">Al liberarte de la preocupación por la comida en la oficina, tendrás <strong>más tiempo para dedicarlo a lo que realmente importa</strong>: tu familia, amigos y momentos de calidad. <em>Sabor en la Oficina</em> no solo es una solución para tu alimentación en el trabajo, sino también una forma de <strong>recuperar tu tiempo libre y disfrutar de la vida</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 overflow-hidden bg-gray-900" id="testimonios">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg lg:max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-18 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="font-heading text-4xl xs:text-6xl font-bold text-gray-50">
                    <span>Las reacciones más</span>
                    <span className="font-serif italic"> sinceras</span>
                  </h2>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-lg lg:ml-auto">
                  <p className="text-gray-300">Estamos muy orgullosos de las (graciosas) reacciones de nuestros clientes cuando prueban nuestras comidas la primera vez (y la segunda, y la tercera...) 🤩</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-16 lg:mb-12 items-center">
              <div className="relative w-full lg:w-1/2 pb-16 lg:pb-0 px-4 mb-12 lg:mb-0">
                <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                <div className="max-w-sm">
                  <img className="block mb-6" src="/saturn-assets/images/testimonials/quote-white.svg" alt="" />
                  <h5 className="text-xl font-semibold text-white mb-10">¡Bendito sea tu padre!</h5>
                  <p className="text-lg text-gray-300 mb-6">¡Nunca había probado algo tan rico! Todavía sigo soñando con esa salsa de reducción al vino tinto 🤤</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-sm lg:mx-auto">
                  <img className="block mb-6" src="/saturn-assets/images/testimonials/quote-white.svg" alt="" />
                  <h5 className="text-xl font-semibold text-white mb-10">¿No le puedo contratar?</h5>
                  <p className="text-lg text-gray-300 mb-6">¡Qué bien que cocina tu padre! Pregúntale si puedo contratarlo para que cocine para mí todos los días 🤩</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gray-50" id="precios">
        <img className="absolute top-0 left-0 -ml-32 md:-ml-0" src="/saturn-assets/images/pricing/circle-left-star.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto mb-20 text-center">
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span>Comer en la oficina</span>
              <span className="font-serif italic"> a buen precio</span>
            </h2>
            <p className="text-2xl text-center text-gray-600">Aprovecha y únete a la lista de espera <strong>antes del 15 de Octubre</strong> y tendrás descuento <strong>permanente</strong> después de nuestra apertura a finales de Noviembre.</p>
          </div>
          <CountdownComponent />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="max-w-md md:max-w-none mx-auto px-12 py-8 mb-6 bg-white rounded-3xl shadow-lg">
              <div className="md:flex items-center justify-between">
                <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4">Menú semanal</h3>
                  <p className="text-gray-500">1 primero y 1 segundo cada día, de lunes a viernes durante una semana.</p>
                </div>
                <div className="text-right">
                  <span className="block text-5xl font-bold text-gray-900 mb-4"><span className="line-through text-gray-500 text-4xl">40</span>&nbsp;30€</span>
                  <a className="inline-block py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200" href="#apuntarme">Apuntarme</a>
                </div>
              </div>
            </div>
            <div className="max-w-md md:max-w-none mx-auto px-12 py-8 mb-6 bg-white rounded-3xl shadow-lg">
              <div className="md:flex items-center justify-between">
                <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                  <h5 className="text-2xl font-semibold mb-4">Menú mensual</h5>
                  <p className="text-gray-500">1 primero y 1 segundo cada día, de lunes a viernes durante todo un mes.</p>
                </div>
                <div className="text-right">
                  <span className="block text-5xl font-bold text-gray-900 mb-4"><span className="line-through text-gray-500 text-4xl">150</span>&nbsp;100€</span>
                  <a className="inline-block py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200" href="#apuntarme">Apuntarme</a>
                </div>
              </div>
            </div>
            <div className="max-w-md md:max-w-none mx-auto px-12 py-8 bg-white rounded-3xl shadow-lg">
              <div className="md:flex items-center justify-between">
                <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                  <h5 className="text-2xl font-semibold mb-4">Descuento para grupos</h5>
                  <p className="text-gray-500">Si pedís un menú semanal o mensual más de 5 personas de la misma oficina, tendréis un descuento de un 15% adicional</p>
                </div>
                <div className="text-right">
                  <span className="block text-5xl font-bold text-gray-900 mb-4">15%</span>
                  <a className="inline-block py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200" href="#apuntarme">Apuntarme</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 overflow-hidden" id="como-funciona">
        <img className="absolute top-0 left-0" src="/saturn-assets/images/features/star-left.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span>Cómo</span>
              <span className="font-serif italic"> funciona</span>
            </h2>
            <p className="max-w-md mx-auto text-lg text-gray-500">Intentamos hacer un proceso simple y rápido para .</p>
          </div>
          <div className="max-w-7xl mx-auto px-8 py-18 xs:px-12 sm:p-24 bg-orange-50 rounded-4xl">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                <div className="lg:max-w-sm">
                  <div className="flex items-center border-b border-gray-200 border-opacity-50 py-4">
                    <div className="flex flex-shrink-0 w-15 h-15 mr-6 my-6 items-center justify-center bg-red-100 rounded-full text-3xl font-bold ">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Accede a nuestro menú online</h3>
                      <span className="text-sm text-gray-400">Accesible siempre en nuestra plataforma online de pedidos.</span>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-200 border-opacity-50 py-4">
                    <div className="flex flex-shrink-0 w-15 h-15 mr-6 my-6 items-center justify-center bg-green-100 rounded-full text-3xl font-bold ">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Selecciona tu menú</h3>
                      <span className="text-sm text-gray-400">Elige qué platos quieres cada día de la semana, y si requieres opción vegetariana, vegana o si tienes alguna alergia.</span>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-200 border-opacity-50 py-4">
                    <div className="flex flex-shrink-0 w-15 h-15 mr-6 my-6 items-center justify-center bg-blue-100 rounded-full text-3xl font-bold ">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Realiza el pago</h3>
                      <span className="text-sm text-gray-400">Realiza el pago online y, si lo requieres, descarga la factura para tu empresa.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
                <div className="flex flex-col h-full justify-between lg:max-w-md ml-auto">
                  <div className="mb-12">
                    <h3 className="text-3xl md:text-5xl font-bold mb-5">
                      <span>¡Apúntate a la lista de espera!</span>
                    </h3>
                    <p className="text-gray-900">Estamos preparando nuestro local en la zona de La Minilla y abriremos a finales de Noviembre.</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between">
                    <a className="relative group inline-block w-full sm:w-auto py-4 px-6 text-orange-50 font-semibold bg-orange-900 rounded-full overflow-hidden" href="https://cq85zpm1tqm.typeform.com/to/QecUfyDU" target="_blank">
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <div className="relative flex items-center justify-center">
                        <span className="mr-2">Apuntarme</span>
                        <span>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9199 0.62C12.8185 0.375651 12.6243 0.181475 12.3799 0.0799999C12.2597 0.028759 12.1306 0.00157999 11.9999 0H1.99994C1.73472 0 1.48037 0.105357 1.29283 0.292893C1.1053 0.48043 0.999939 0.734784 0.999939 1C0.999939 1.26522 1.1053 1.51957 1.29283 1.70711C1.48037 1.89464 1.73472 2 1.99994 2H9.58994L1.28994 10.29C1.19621 10.383 1.12182 10.4936 1.07105 10.6154C1.02028 10.7373 0.994141 10.868 0.994141 11C0.994141 11.132 1.02028 11.2627 1.07105 11.3846C1.12182 11.5064 1.19621 11.617 1.28994 11.71C1.3829 11.8037 1.4935 11.8781 1.61536 11.9289C1.73722 11.9797 1.86793 12.0058 1.99994 12.0058C2.13195 12.0058 2.26266 11.9797 2.38452 11.9289C2.50638 11.8781 2.61698 11.8037 2.70994 11.71L10.9999 3.41V11C10.9999 11.2652 11.1053 11.5196 11.2928 11.7071C11.4804 11.8946 11.7347 12 11.9999 12C12.2652 12 12.5195 11.8946 12.707 11.7071C12.8946 11.5196 12.9999 11.2652 12.9999 11V1C12.9984 0.869323 12.9712 0.740222 12.9199 0.62V0.62Z" fill="#FFF2EE"></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" id="apuntarme">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-28 rounded-4xl bg-orange-800 overflow-hidden">
            <img className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full object-cover" src="/saturn-assets/images/cta/circle-bg.svg" alt="" />
            <div className="relative text-center">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-400 mb-6">Apúntate a la lista de espera</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
                <span>Reserva tu comida por tiempo</span>
                <span className="font-serif italic"> limitado</span>
              </h2>
              <a className="relative group inline-block w-full sm:w-auto py-4 px-6 text-orange-900 hover:text-white font-semibold bg-white rounded-md overflow-hidden transition duration-300" href="https://cq85zpm1tqm.typeform.com/to/QecUfyDU" target="_blank">
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-110 transition duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <span className="mr-4">Apuntarme a la lista de espera</span>
                  <span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50" id="faqs">
        <img className="absolute top-0 left-0 mt-44" src="/saturn-assets/images/faq/light-blue-left.png" alt="" />
        <img className="absolute top-0 right-0 mt-10" src="/saturn-assets/images/faq/star-right.svg" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
                <span>Preguntas</span>
                <span className="font-serif italic"> frecuentes</span>
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-8">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Dónde abrirán el local?</h4>
                  <p className="text-gray-500 mb-4">Vamos a comenzar con el primer local en la zona de La Minilla, en Gran Canaria.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Qué zonas de reparto habrá?</h4>
                  <p className="text-gray-500 mb-4">En un principio se podrá repartir a la zona de La Minilla, 7 Palmas y Guanarteme.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Se podrá recoger la comida?</h4>
                  <p className="text-gray-500 mb-4">Sí, también ofreceremos la posibilidad de recoger la comida congelada en cualquier momento.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Hacen comida vegana?</h4>
                  <p className="text-gray-500 mb-4">¡Sí! Tenemos en cuenta todas las preferencias alimenticias y alergias.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Qué experiencia tienen?</h4>
                  <p className="text-gray-500 mb-4">Nuestro cocinero tiene más de 30 años de experiencia en cocina, y la verdad que no se le da nada mal :)</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full max-w-xs mx-auto md:max-w-none px-6 py-9 md:pl-9 md:pr-12 bg-white rounded-3xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">¿Hay algún tipo de permanencia?</h4>
                  <p className="text-gray-500 mb-4">No, ninguna. Puedes probar nuestra comida un día o una semana sin ningún tipo de compromiso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <img className="absolute top-0 left-0" src="/saturn-assets/images/footers/blue-light-left.png" alt="" />
        <img className="absolute bottom-0 left-1/2" src="/saturn-assets/images/footers/orange-light-bottom.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="pb-8 mb-15 border-b border-gray-100 text-center">
              <a className="inline-block" href="#">
                <img className="h-8 md:h-15" src="/logo.png" alt="" />
              </a>
            </div>
            <div className="mt-15 text-center">
              <span className="text-gray-500">© 2023 Sabor en la Oficina. Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
</div>
  )
}
