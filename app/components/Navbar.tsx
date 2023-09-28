'use client';
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const openNavbar = () => {
    setNavbarOpen(true)
    document.body.classList.add('overflow-hidden')
  }

  const closeNavbar = () => {
    setNavbarOpen(false)
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative py-6 bg-white z-40">
        <div className="container px-4 mx-auto">
          <div className="flex items-center relative">
            <a className="inline-block text-lg font-bold" href="/">
              <img className="h-6" src="/logo.png" alt="Sabor en la Oficina" width="auto" />
            </a>
            <div className="xl:hidden ml-auto">
              <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200" onClick={openNavbar}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12">
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium whitespace-nowrap" href="#nuestra-comida">Nuestra comida</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium whitespace-nowrap" href="#nosotros">Nosotros</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium whitespace-nowrap" href="#testimonios">Testimonios</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium whitespace-nowrap" href="#precios">Precios</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium whitespace-nowrap" href="#como-funciona">Cómo funciona</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium whitespace-nowrap" href="#faqs">FAQs</a></li>
            </ul>
            <div className="hidden xl:block ml-auto">
              <div className="flex items-center">
                <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300" href="https://cq85zpm1tqm.typeform.com/to/QecUfyDU" target="_blank">
                  <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Apuntarme</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${navbarOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'} bg-black bg-opacity-25 fixed left-0 top-0 w-full h-full z-40`} onClick={closeNavbar}></div>
      <div className={`${navbarOpen ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-full'} transition navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <a className="mr-auto text-2xl font-medium leading-none" href="#">
              <img className="h-6" src="/logo.png" alt="" width="auto" />
            </a>
            <button className="navbar-close" onClick={closeNavbar}>
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mb-2">
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#nuestra-comida">Nuestra comida</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#nosotros">Nosotros</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#testimonios">Testimonios</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#precios">Precios</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#como-funciona">Cómo funciona</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#faqs">FAQs</a></li>
            </ul>
            <div className="py-8 px-6 mb-6 border-t border-b border-gray-200">
              <a className="flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600" href="https://cq85zpm1tqm.typeform.com/to/QecUfyDU" target="_blank">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z" fill="currentColor"></path>
                </svg>
                <span className="ml-3">Apuntarme</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
