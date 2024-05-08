import FAQComponent from '../components/Custom/FAQComponent';
import HomeNavBar from '../components/Custom/HomeNavBar';
import HomePageIcon1 from '../components/Custom/HomePageIcon1';

const HomePage = (): JSX.Element => {
  return (
    <div className="text-black-2">
      <HomeNavBar />
      {/* <!-- NAV ENDS -->
  
      <!-- HERO STARTS --> */}
      <main className="flex min-h-screen flex-col bg-appLight100 pt-8 text-black-2">
        <section className="mx-auto grid h-full max-w-[100rem] flex-1 gap-y-10 pl-5 md:grid-cols-2">
          <div className="flex h-full flex-col justify-center pr-5 pt-24 md:pr-0 md:pt-0 xl:pl-24">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Make Payment for Anything, Anytime
            </h1>
            <h2 className="mb-16 mt-8 max-w-[34rem] text-base font-extralight md:text-lg lg:text-xl">
              Whether you need to pay for electricity, airtime, education, cable
              TV, data bundles, or anything else, we have you covered.
            </h2>

            <div className="flex items-center gap-3">
              <a
                className="transition-all duration-300 hover:scale-105 active:scale-95"
                href="#"
              >
                <img
                  src="./assets/google-play-store.svg"
                  alt="google-play-store"
                />
              </a>
              <a
                className="transition-all duration-300 hover:scale-105 active:scale-95"
                href="#"
              >
                <img src="./assets/apple-app-store.svg" alt="apple-store" />
              </a>
            </div>
          </div>
          <div className="flex w-full items-end justify-end">
            <img
              className="w-full md:max-w-[39rem]"
              src="./assets/hero.png"
              alt=""
            />
          </div>
        </section>
      </main>

      <section className="mx-auto max-w-[100rem] bg-black px-5 py-12 text-white">
        <ul className="mx-auto flex max-w-[57.5rem] flex-col items-center justify-between gap-x-9 gap-y-14 sm:flex-row">
          <li className="flex flex-col justify-center">
            <data
              className="mb-2 text-center text-3xl font-bold sm:text-left md:text-4xl lg:text-5xl"
              value="40+"
            >
              40+
            </data>
            <p className="text-sm font-light md:text-base lg:text-lg">
              Service Providers
            </p>
          </li>
          <li className="flex flex-col justify-center">
            <data
              className="mb-2 text-center text-3xl font-bold sm:text-left md:text-4xl lg:text-5xl"
              value="120+"
            >
              120+
            </data>
            <p className="text-sm font-light md:text-base lg:text-lg">
              Transactions Completed
            </p>
          </li>
          <li className="flex flex-col justify-center">
            <data
              className="mb-2 text-center text-3xl font-bold sm:text-left md:text-4xl lg:text-5xl"
              value="1.3k+"
            >
              1.3k+
            </data>
            <p className="text-sm font-light md:text-base lg:text-lg">
              Happy Users
            </p>
          </li>
        </ul>
      </section>
      {/* <!-- ANALYTICS ENDS -->
  
      <!-- BEST CHOICE STARTS --> */}
      <section className="app-container mb-32 mt-36">
        <h3 className="max-w-[40rem] text-3xl font-bold text-appDark300 md:text-4xl lg:text-5xl">
          The Best Choice for All Your Digital Payments
        </h3>

        <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3">
          <li className="h-full rounded-2xl bg-appPurple100 px-5 py-6 md:px-6 md:py-8 lg:px-7 lg:py-10">
            <h4 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              Effortless Bill <br />
              Payments
            </h4>
            <p className="mt-3 max-w-[19rem] text-base font-normal text-appGray100">
              Pay all your bills in one place with just a few clicks.
            </p>
          </li>
          <li className="h-full rounded-2xl bg-appLight200 px-5 py-6 md:px-6 md:py-8 lg:px-7 lg:py-10">
            <h4 className="text-lg font-bold text-appDark300 md:text-xl lg:text-2xl">
              Buy/Sell your <br />
              Giftcards
            </h4>
            <p className="text-appGray200 mt-3 max-w-[20rem] text-base font-normal">
              Our purchasing process is quick and secure. Your transactions are
              protected by the latest encryption technology
            </p>
          </li>
          <li className="h-full rounded-2xl bg-appDark300 px-5 py-6 md:px-6 md:py-8 lg:px-7 lg:py-10">
            <h4 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              Direct Purchase from <br />
              Digital Platforms
            </h4>
            <p className="mt-3 max-w-[19rem] text-base font-normal text-appGray100">
              Easily buy Zelle, CashApp and PayPal from our app
            </p>
          </li>
        </ul>
      </section>

      <figure className="app-container">
        <img src="./assets/dashboard.png" className="mx-auto" alt="" />
      </figure>

      <section className="app-container mt-44">
        <h4 className="mb-3 text-center text-2xl md:text-3xl lg:text-4xl">
          Over <span className="text-appRed100">30+</span> service providers{' '}
          <br />
          brands connected to Semibill
        </h4>
        <p className="text-center text-base font-normal">
          making the lives of users much easier
        </p>

        <div className="my-10 grid w-full grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          <div className="flex items-center justify-center rounded-lg bg-[#fde6e8] px-2 py-3">
            <img
              src="./assets/companies/airtel.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#fff9e6] px-2 py-3">
            <img src="./assets/companies/mtn.svg" alt="" className="w-[3rem]" />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#eef8ee] px-2 py-3">
            <img src="./assets/companies/glo.png" alt="" className="w-[3rem]" />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#e6f1ee] px-2 py-3">
            <img
              src="./assets/companies/9mobile.png"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#fef0e6] px-2 py-3">
            <img
              src="./assets/companies/smile.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f2f6f3] px-2 py-3">
            <img
              src="./assets/companies/jamb.png"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#e8f8ee] px-2 py-3">
            <img
              src="./assets/companies/bet9ja.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f9edf3] px-2 py-3">
            <img
              src="./assets/companies/Showmax.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#fef8f2] px-2 py-3">
            <img
              src="./assets/companies/ikejaElectric.png"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#fef1ea] px-2 py-3">
            <img
              src="./assets/companies/spectranet.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#e6ecfd] px-2 py-3">
            <img
              src="./assets/companies/Nairabet-Logo.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f9e8ed] px-2 py-3">
            <img
              src="./assets/companies/iroko_tv.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>

          <div className="flex w-full items-center justify-center rounded-lg bg-[#f2f2f2] px-2 py-3">
            <img
              src="./assets/companies/betway.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#e6f5fc] px-2 py-3">
            <img
              src="./assets/companies/DSTV.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#fce6e8] px-2 py-3">
            <img
              src="./assets/companies/GOtv.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f2f2f7] px-2 py-3">
            <img
              src="./assets/companies/AEDC-BRAND-667x400-removebg-preview.png"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#fff9e6] px-2 py-3">
            <img src="./assets/companies/mtn.svg" alt="" className="w-[3rem]" />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#eef8ee] px-2 py-3">
            <img src="./assets/companies/glo.png" alt="" className="w-[3rem]" />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f2f2f2] px-2 py-3">
            <img
              src="./assets/companies/betway.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f9edf3] px-2 py-3">
            <img
              src="./assets/companies/Showmax.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f2f2f2] px-2 py-3">
            <img
              src="./assets/companies/betway.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-[#fde6e8] px-2 py-3">
            <img
              src="./assets/companies/airtel.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#e8f8ee] px-2 py-3">
            <img
              src="./assets/companies/bet9ja.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-lg bg-[#f9edf3] px-2 py-3">
            <img
              src="./assets/companies/Showmax.svg"
              alt=""
              className="w-[3rem]"
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-32 max-w-[100rem] bg-appDark400 text-white">
        <div className="app-container py-36">
          <h4 className="mb-10 max-w-80 text-4xl font-bold">
            What you can do with Semibill
          </h4>
          <img
            src="./assets/radial.svg"
            className="absolute right-0 top-0 hidden opacity-10 lg:block xl:opacity-70"
            alt=""
          />

          <ul className="flex max-w-5xl flex-wrap items-center gap-x-3 gap-y-6">
            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Cable TV Subscription </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Airtime Topup </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Book Flights </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Pay For Electricity Bills </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Purchase Giftcards </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Sort Educational Expenses </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Data Bundle Top-up </span>
            </li>

            <li className="to-[ rgba(102, 26, 198, 0.04)]/20 flex items-center gap-x-3 rounded-full border border-appPurple100/60 bg-gradient-to-br from-[#4a505e]/20 via-appDark400 px-5 py-4 text-sm text-appGray300 sm:text-base">
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_9162)">
                  <g clip-path="url(#clip1_3_9162)">
                    <path
                      d="M9.75 5.46997L11.7356 12.4844L18.75 14.47L11.7356 16.4556L9.75 23.47L7.76444 16.4556L0.75 14.47L7.76444 12.4844L9.75 5.46997Z"
                      fill="#EE312B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_9162">
                    <rect
                      width="19"
                      height="28"
                      fill="white"
                      transform="translate(0.25 0.469971)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3_9162">
                    <rect
                      width="19"
                      height="18"
                      fill="white"
                      transform="translate(0.25 5.46997)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span> Sport Betting </span>
            </li>
          </ul>
        </div>
      </section>

      {/* <!--What you can do with Semibill ENDS -->
  
      <!-- STEPS TO ENJOY STARTS --> */}
      <figure className="app-container mb-52 mt-48 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
        <img src="./assets/mobile-mock-up.png" alt="mobile-mock-up" />

        <figcaption className="pt-20">
          <h3 className="mb-5 text-3xl font-normal md:text-4xl lg:text-5xl">
            3 Simple Steps to Enjoy Semibill
          </h3>
          <ul className="flex flex-col gap-y-5">
            <li className="flex gap-3">
              <data
                className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-black-2 text-black-2"
                value="1"
              >
                1
              </data>
              <dl>
                <dt className="text-base font-normal sm:text-lg">
                  Download and Install the App
                </dt>
                <dd className="max-w-md text-sm font-light sm:text-base">
                  Visit your app store, search for "CheapMoney" and download and
                  install the app on your mobile device.
                </dd>
              </dl>
            </li>

            <li className="flex gap-3">
              <data
                className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-black-2 text-black-2"
                value="2"
              >
                2
              </data>
              <dl>
                <dt className="text-base font-normal sm:text-lg">
                  Download and Install the App
                </dt>
                <dd className="max-w-[31rem] text-sm font-light sm:text-base">
                  Open the app and follow the quick and easy sign-up process.
                  All you need is your basic personal information.
                </dd>
              </dl>
            </li>

            <li className="flex gap-3">
              <data
                className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-black-2 text-black-2"
                value="3"
              >
                3
              </data>
              <dl>
                <dt className="text-base font-normal sm:text-lg">
                  Add Funds and Pay Bills
                </dt>
                <dd className="max-w-[31rem] text-sm font-light sm:text-base">
                  Once you're signed in, you can add funds to your account and
                  start paying your bills. It's that simple!
                </dd>
              </dl>
            </li>
          </ul>

          <button
            type="button"
            className="my-5 flex items-center gap-5 rounded-full bg-black px-5 py-3 text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span> Get the app </span>

            <svg
              width="23"
              height="9"
              viewBox="0 0 23 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_9402)">
                <g clip-path="url(#clip1_3_9402)">
                  <g clip-path="url(#clip2_3_9402)">
                    <path
                      d="M21.4365 4.78055C21.6057 4.61132 21.6057 4.33695 21.4365 4.16772L18.6788 1.41C18.5096 1.24077 18.2352 1.24077 18.066 1.41C17.8967 1.57923 17.8967 1.8536 18.066 2.02283L20.5173 4.47413L18.066 6.92544C17.8967 7.09466 17.8967 7.36903 18.066 7.53826C18.2352 7.70749 18.5096 7.70749 18.6788 7.53826L21.4365 4.78055ZM0.330078 4.90746L21.1301 4.90747V4.0408H0.330078L0.330078 4.90746Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3_9402">
                  <rect
                    width="22"
                    height="8"
                    fill="white"
                    transform="translate(0.330078 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_3_9402">
                  <rect
                    width="22"
                    height="8"
                    fill="white"
                    transform="translate(0.330078 0.5)"
                  />
                </clipPath>
                <clipPath id="clip2_3_9402">
                  <rect
                    width="22"
                    height="8"
                    fill="white"
                    transform="translate(0.330078 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </figcaption>
      </figure>
      {/*   
      <!-- STEPS TO ENJOY ENDS -->
  
      <!-- PEOPLE WHO TRADE STARTS -->
   */}
      <h3 className="mb-10 px-7 text-center text-3xl font-bold text-appDark300 md:text-4xl lg:text-5xl">
        People Who Trade with Semibill
      </h3>

      <section className="mx-auto max-w-[100rem] px-5">
        <ul className="flex w-full items-center gap-5 overflow-x-scroll pb-5">
          <li className="flex aspect-square h-full w-[18rem] flex-shrink-0 flex-col justify-between rounded-2xl bg-appLight200 px-5 py-7 md:w-[20rem] lg:w-[22rem]">
            <h5 className="text-sm sm:text-base">
              Semibill has completely changed my online shopping experience. I
              can shop from international websites without hassle, and the
              transaction process is smooth!
            </h5>

            <dl>
              <dt className="mb-1 text-sm font-medium">Tina Mbaka</dt>
              <dd className="text-sm font-normal">Content Marketer</dd>
            </dl>
          </li>

          <li className="flex aspect-square h-full w-[18rem] flex-shrink-0 flex-col justify-between rounded-2xl bg-appPurple400 px-5 py-7 md:w-[20rem] lg:w-[22rem]">
            <h5 className="text-sm text-white/80 sm:text-base">
              I useSemibill for all my online advertis-ing expenses. The instant
              notifications help me stay on top of my spending.
            </h5>

            <dl>
              <dt className="mb-1 text-sm font-medium text-appPurple500">
                Tina Mbaka
              </dt>
              <dd className="text-sm font-normal text-appPurple500">
                Content Marketer
              </dd>
            </dl>
          </li>

          <li className="flex aspect-square h-full w-[18rem] flex-shrink-0 flex-col justify-between rounded-2xl bg-appLight200 px-5 py-7 md:w-[20rem] lg:w-[22rem]">
            <h5 className="text-sm sm:text-base">
              Semibill has completely changed my online shopping experience. I
              can shop from international websites without hassle, and the
              transaction process is smooth!
            </h5>

            <dl>
              <dt className="mb-1 text-sm font-medium">Tina Mbaka</dt>
              <dd className="text-sm font-normal text-appPurple500">
                Content Marketer
              </dd>
            </dl>
          </li>

          <li className="flex aspect-square h-full w-[18rem] flex-shrink-0 flex-col justify-between rounded-2xl bg-appBlue200 px-5 py-7 md:w-[20rem] lg:w-[22rem]">
            <h5 className="text-sm text-white/80 sm:text-base">
              As a freelancer, I often need to purchase digital tools from
              abroad. CheapNaira makes these transactions effortless and secure.
              Plus, the no maintenance fee aspect is a real bonus!
            </h5>

            <dl>
              <dt className="mb-1 text-sm font-medium text-appBlue300">
                Marcus Olawale
              </dt>
              <dd className="text-sm font-normal text-appBlue300">
                Freelance Designer
              </dd>
            </dl>
          </li>

          <li className="flex aspect-square h-full w-[18rem] flex-shrink-0 flex-col justify-between rounded-2xl bg-appLight200 px-5 py-7 md:w-[20rem] lg:w-[22rem]">
            <h5 className="text-sm sm:text-base">
              Semibill has completely changed my online shopping experience. I
              can shop from international websites without hassle, and the
              transaction process is smooth!
            </h5>

            <dl>
              <dt className="mb-1 text-sm font-medium">Tina Mbaka</dt>
              <dd className="text-sm font-normal">Content Marketer</dd>
            </dl>
          </li>
        </ul>
      </section>

      <section className="mx-auto mb-20 mt-40 max-w-[100rem] bg-appGray400">
        <figure className="app-container grid grid-cols-1 place-items-center gap-x-10 gap-y-20 pb-20 pt-24 md:grid-cols-2">
          <figcaption className="flex flex-col items-center md:items-start">
            <h5 className="mb-16 max-w-lg text-center text-4xl font-bold md:text-start md:text-5xl lg:text-6xl">
              Download the Semibill App and enjoy effortless bill management
            </h5>

            <div className="flex items-center gap-3">
              <a
                className="transition-all duration-300 hover:scale-105 active:scale-95"
                href="#"
              >
                <img
                  src="./assets/google-play-store.svg"
                  alt="google-play-store"
                />
              </a>
              <a
                className="transition-all duration-300 hover:scale-105 active:scale-95"
                href="#"
              >
                <img src="./assets/apple-app-store.svg" alt="apple-store" />
              </a>
            </div>
          </figcaption>

          <div>
            <img src="./assets/barcode.svg" alt="bar-code" />
            <span className="mb-1 ml-16 mt-4 block">
              <HomePageIcon1 />
            </span>
            <p className="font-indieFlower text-4xl text-appBlue100">
              Scan to download app
            </p>
          </div>
        </figure>
      </section>

      <section className="app-container">
        <div className="relative overflow-hidden rounded-[3.125rem] bg-appDark500 px-5 py-10 text-white/90 md:p-16 lg:p-24">
          <div className="absolute -right-[20%] -top-[10%] hidden aspect-square h-[60%] rounded-full border-[0.625rem] border-appGray500 opacity-15 md:block lg:opacity-60"></div>
          <div className="absolute -right-[30%] top-[10%] hidden aspect-square h-[80%] rounded-full border-[0.625rem] border-appPurple300 opacity-15 md:block lg:opacity-60"></div>

          <h3 className="max-w-[25.5rem] text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h3>

          <FAQComponent
            title="Who owns Semibill?"
            isInitialOpened
            details="Lorem ipsum"
          />

          <FAQComponent
            title="How can I get the app?"
            details="LoremIs jsie kao a LoremIs jsie kao a LoremIs jsie kao a
                  LoremIs jsie kao a LoremIs jsie kao a LoremIs jsie kao a
                  LoremIs jsie kao a LoremIs jsie kao a"
          />

          <p className="mb-4 mt-32 text-base md:text-lg lg:text-xl">
            If you have any more questions or need clarity, you can reach out to
            us via
          </p>

          <p className="text-sm sm:text-base">
            <a target="_blank" href="tel:+2348179045442">
              +2348179045442
            </a>{' '}
            ,<a href="tel:+2349087482264">+2349087482264</a>
          </p>
        </div>
      </section>

      {/* <!--  FAQ ENDS --> */}

      <footer className="mx-auto mt-52 max-w-[100rem] rounded-t-[4rem] bg-black px-5 pb-6 pt-20 text-sm text-white/80 sm:text-base md:rounded-t-[6rem] lg:rounded-t-[7rem]">
        <ul className="app-container grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3 xl:grid-cols-6">
          <li>
            <svg
              width="139"
              height="43"
              viewBox="0 0 139 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M133.804 34.0533C133.783 33.4496 133.848 32.9515 133.644 32.4667C133.397 31.8788 133.153 31.3546 132.385 31.303C131.607 31.2506 131.034 31.5299 130.637 32.1775C130.285 32.7527 130.196 33.3946 130.198 34.0618C130.205 36.2167 130.167 38.3723 130.208 40.5265C130.226 41.4776 129.838 41.8579 128.918 41.8311C127.995 41.8043 127.071 41.8095 126.148 41.8266C125.324 41.8418 125.001 41.493 125.016 40.644C125.057 38.2203 125.067 35.7945 125.008 33.3715C124.985 32.4424 124.751 31.4842 123.573 31.3233C122.52 31.1794 121.789 31.8165 121.517 33.0527C121.451 33.351 121.433 33.6622 121.417 33.9687C121.4 34.2757 121.413 34.5842 121.413 34.892C121.413 36.7392 121.371 38.5876 121.429 40.433C121.463 41.5043 121.007 41.8888 119.995 41.8422C119.227 41.8069 118.453 41.7919 117.688 41.8524C116.608 41.9377 116.19 41.5609 116.221 40.4189C116.296 37.6886 116.244 34.955 116.25 32.2228C116.252 31.1066 116.296 29.9862 116.044 28.8894C115.791 27.787 116.256 27.4176 117.314 27.495C118.041 27.5483 118.778 27.534 119.506 27.4912C120.46 27.435 121.159 27.6279 120.942 29.1097C122.364 27.8813 123.675 27.1685 125.354 27.2043C127.065 27.2407 128.421 27.7986 129.356 29.1994C129.894 29.1103 130.139 28.7332 130.454 28.4693C131.966 27.2026 133.728 26.9597 135.563 27.3649C137.684 27.8332 138.915 29.7165 138.976 32.533C139.034 35.2254 138.966 37.9204 138.999 40.6138C139.01 41.5127 138.647 41.8722 137.77 41.8428C136.847 41.8118 135.922 41.8064 135 41.842C134.12 41.8758 133.77 41.5402 133.791 40.6258C133.841 38.472 133.806 36.3162 133.804 34.0533Z"
                fill="white"
              />
              <path
                d="M54.7263 16.676C54.7247 17.792 54.6899 18.7939 54.7311 19.7928C54.7673 20.6701 54.3577 20.9397 53.5442 20.9051C52.5838 20.8642 51.6188 20.8584 50.6588 20.9032C49.8204 20.9423 49.4891 20.6269 49.5031 19.7711C49.5397 17.5396 49.5132 15.3071 49.5145 13.0749C49.5148 12.574 49.464 12.0861 49.3608 11.5902C49.2177 10.9029 48.8709 10.4193 48.1826 10.36C47.4748 10.2991 46.7964 10.486 46.3984 11.1764C46.0639 11.7568 45.9396 12.384 45.9442 13.0574C45.9592 15.2509 45.9186 17.4452 45.9597 19.6381C45.9771 20.5648 45.6768 20.9907 44.703 20.9262C43.7445 20.8626 42.7789 20.8602 41.8181 20.8896C41.0293 20.9138 40.7146 20.6022 40.7248 19.8059C40.7528 17.6126 40.7325 15.4188 40.7315 13.2251C40.7313 12.7251 40.6715 12.2362 40.5919 11.7393C40.4645 10.9445 40.0666 10.4171 39.2933 10.3507C38.4627 10.2794 37.808 10.6786 37.4659 11.4824C37.2207 12.0582 37.1531 12.6617 37.1573 13.2871C37.1714 15.4037 37.1342 17.521 37.1756 19.6369C37.194 20.5772 36.8589 20.9687 35.8974 20.9083C34.939 20.8481 33.9724 20.8589 33.0124 20.9035C32.1988 20.9413 31.9397 20.5938 31.9464 19.8136C31.9717 16.8505 31.9491 13.887 31.9557 10.9236C31.9581 9.8846 31.9547 8.85146 31.7517 7.82325C31.6013 7.06201 31.9144 6.66138 32.7462 6.69654C33.5914 6.73228 34.442 6.7503 35.2851 6.69569C36.1759 6.63799 36.8241 6.80396 36.7653 8.0499C39.7495 5.79028 42.5593 5.36561 45.192 8.37256C45.6639 8.28189 45.908 7.84729 46.264 7.576C48.0268 6.23275 49.945 5.84153 52.0101 6.72609C54.2519 7.68636 54.5277 9.78293 54.6961 11.8289C54.8251 13.3964 54.7246 14.9827 54.7263 16.676Z"
                fill="white"
              />
              <path
                d="M0.236318 7.59002C0.244505 3.63306 2.89763 1.49527 6.57228 0.966998C9.25275 0.58164 11.9422 0.916862 14.4573 2.10872C15.7326 2.71301 15.8997 3.05647 15.3277 4.33033C14.9821 5.10009 14.7758 6.12659 14.1687 6.53542C13.4185 7.04062 12.7211 5.97078 11.9386 5.72966C10.432 5.26536 8.9584 4.71092 7.32994 5.16607C6.45602 5.41033 5.66922 5.75528 5.59379 6.74736C5.51276 7.81311 6.46173 8.00023 7.20359 8.26537C9.04749 8.92436 11.0258 9.10708 12.8399 9.90616C15.038 10.8743 16.4315 12.3292 16.413 14.8849C16.3944 17.4627 15.1425 19.2324 12.841 20.1649C8.7451 21.8244 4.70952 21.3144 0.770883 19.5157C0.0550082 19.1888 -0.230581 18.7128 0.208762 17.9575C0.69053 17.1294 0.712708 15.9081 1.51083 15.4455C2.35428 14.9566 3.16731 15.9594 4.01197 16.2455C5.61739 16.7891 7.23975 16.9357 8.90102 16.8331C9.31324 16.8076 9.73083 16.6683 10.1197 16.5148C10.6437 16.308 11.0902 15.9419 11.0913 15.3408C11.0923 14.751 10.6877 14.4014 10.1521 14.1483C8.67376 13.4498 7.04751 13.2914 5.50923 12.8182C4.84988 12.6153 4.18599 12.4124 3.55267 12.1425C1.58921 11.306 0.371072 9.89728 0.236318 7.59002Z"
                fill="white"
              />
              <path
                d="M39.8127 32.613C39.8134 29.1919 39.8416 25.886 39.7977 22.581C39.785 21.6256 40.1252 21.2568 41.0625 21.2982C41.9831 21.3388 42.9083 21.3295 43.8291 21.2891C44.7063 21.2507 45.0766 21.5807 45.0481 22.4964C44.9969 24.1476 45.0278 25.8016 45.0402 27.4543C45.043 27.8252 44.9352 28.215 45.2189 28.693C46.7824 27.1928 48.6838 26.8994 50.6577 27.3981C53.5739 28.1348 54.8631 30.3867 55.311 33.1158C55.7454 35.7626 55.2312 38.2489 53.2494 40.2482C51.2711 42.2441 48.3714 42.5856 45.9516 41.1226C45.7234 40.9846 45.4916 40.8526 45.1464 40.6505C45.0346 41.6464 44.4025 41.7767 43.5982 41.7275C42.7175 41.6737 41.8292 41.6804 40.9473 41.7241C40.0932 41.7663 39.7975 41.4032 39.8067 40.5694C39.8357 37.956 39.8145 35.3421 39.8127 32.613ZM46.2031 31.5905C44.5582 32.8547 44.9395 34.5957 45.1939 36.2451C45.3737 37.4106 46.2512 37.9861 47.4053 38.0707C48.5941 38.1578 49.3792 37.5356 49.842 36.5018C50.1923 35.7193 50.2702 34.8736 50.1895 34.0207C49.9697 31.6995 48.6411 30.8277 46.2031 31.5905Z"
                fill="white"
              />
              <path
                d="M58.3897 41.8238C56.4697 41.7725 56.4645 41.7725 56.4642 40.0204C56.4622 29.515 56.4615 19.0095 56.464 8.50402C56.4644 6.73372 56.4726 6.73322 58.2607 6.72632C58.9534 6.72364 59.6495 6.76727 60.3379 6.71235C61.3184 6.63412 61.7581 6.97686 61.6875 8.01592C61.6173 9.05016 61.6717 10.0929 61.6718 11.1319C61.673 20.6753 61.6746 30.2187 61.6751 39.7622C61.6751 41.7361 61.6732 41.7382 59.6517 41.8158C59.2674 41.8306 58.8822 41.8221 58.3897 41.8238Z"
                fill="white"
              />
              <path
                d="M87.0127 23.1207C90.7842 21.2486 94.4749 21.3163 98.1726 23.0911C99.1447 23.5577 99.5093 24.1398 98.8728 25.165C98.4304 25.8774 98.4473 27.0024 97.758 27.3823C96.9852 27.8083 96.2783 26.8403 95.5053 26.5704C94.1192 26.0867 92.7037 26.0076 91.2936 26.2598C89.6892 26.5467 88.7661 27.7002 88.2928 29.1632C87.7995 30.6881 87.8196 32.2996 88.1357 33.8427C88.7809 36.9924 91.0675 38.2549 94.4184 37.5237C95.5705 37.2722 96.489 36.5329 97.7597 36.1134C98.24 37.2201 98.7429 38.32 99.1927 39.4411C99.4102 39.983 98.9057 40.1805 98.5717 40.4037C96.8884 41.5286 94.9683 42.0092 93.0016 42.0433C89.775 42.0992 86.8685 41.2532 84.6759 38.6205C81.1556 34.3934 81.6519 26.2458 87.0127 23.1207Z"
                fill="white"
              />
              <path
                d="M99.8724 32.3824C100.959 29.0066 103.406 27.2722 106.893 27.2208C108.905 27.1911 110.778 27.4797 112.453 28.7118C115.009 30.5928 115.607 34.1063 114.678 37.314C113.88 40.0699 111.191 41.8885 108.17 41.9186C107.174 41.9285 106.173 42.0106 105.181 41.8076C100.833 40.9176 98.7309 36.6531 99.8724 32.3824ZM107.422 31.2233C106.535 31.2372 105.762 31.4636 105.24 32.2679C104.485 33.4327 104.475 35.8928 105.285 37.0068C105.873 37.8152 106.699 38.1888 107.698 38.0539C108.653 37.925 109.327 37.415 109.613 36.4565C109.962 35.2848 109.938 34.0994 109.676 32.9266C109.436 31.8572 108.699 31.3142 107.422 31.2233Z"
                fill="white"
              />
              <path
                d="M28.5703 20.4355C25.6565 21.4169 22.8949 21.3736 20.2565 19.8582C17.6647 18.3695 16.5156 15.0038 17.3768 11.5242C18.112 8.5537 20.7182 6.36596 23.6431 6.26399C28.0539 6.11022 30.7961 8.83939 30.8011 13.2728C30.8022 14.2409 30.4669 14.4594 29.604 14.443C27.6038 14.4047 25.6024 14.4322 23.6015 14.433C23.1872 14.4332 22.7729 14.433 22.3744 14.433C22.2443 15.985 23.06 16.9296 24.5335 17.081C25.9077 17.2223 27.2389 17.0381 28.436 16.3381C29.159 15.9153 29.483 16.1441 29.6948 16.8408C29.7506 17.0242 29.8334 17.1995 29.9037 17.3785C30.7509 19.5374 30.7509 19.5374 28.5703 20.4355ZM24.6613 10.0044C23.1349 10.042 22.6877 10.3742 22.5113 11.7123C23.7118 11.8538 24.8941 11.8818 26.1473 11.6757C26.1019 10.6977 25.5917 10.2704 24.6613 10.0044Z"
                fill="white"
              />
              <path
                d="M75.4627 27.9936C75.4585 32.189 75.4273 36.2692 75.4687 40.3487C75.479 41.371 75.1833 41.8129 74.1125 41.7965C73.152 41.7819 72.193 41.7983 71.2311 41.739C70.5545 41.6973 70.2841 41.429 70.2857 40.7472C70.2996 34.5888 70.3011 28.4304 70.2877 22.272C70.2863 21.6222 70.5192 21.3942 71.1701 21.4086C72.2069 21.4314 73.2471 21.3961 74.2828 21.3352C75.1099 21.2865 75.4861 21.5817 75.4697 22.4512C75.4355 24.2596 75.4614 26.0691 75.4627 27.9936Z"
                fill="white"
              />
              <path
                d="M68.5865 22.7534C68.5856 28.6621 68.564 34.4637 68.6013 40.2649C68.6082 41.3377 68.3048 41.8198 67.1704 41.743C66.2555 41.681 65.3302 41.7853 64.4093 41.796C63.7221 41.804 63.3689 41.5089 63.3708 40.7538C63.387 34.6066 63.3875 28.4593 63.3687 22.3121C63.3664 21.571 63.6993 21.3977 64.3542 21.4199C65.352 21.4537 66.3564 21.4901 67.3494 21.4142C68.3155 21.3403 68.7125 21.6941 68.5865 22.7534Z"
                fill="white"
              />
              <path
                d="M82.3849 37.9748C82.3789 38.9682 82.3754 39.8519 82.3646 40.7356C82.3569 41.364 82.0812 41.7747 81.409 41.7803C80.1809 41.7907 78.9525 41.7847 77.7244 41.7718C77.0386 41.7647 76.7994 41.3616 76.8109 40.719C76.8302 39.6434 76.8348 38.5671 76.8238 37.4914C76.8164 36.7616 77.1458 36.4537 77.8778 36.4738C78.9145 36.5024 79.9563 36.5324 80.9892 36.4622C82.0579 36.3896 82.4894 36.8301 82.3849 37.9748Z"
                fill="white"
              />
              <path
                d="M60.1663 4.9097C59.2891 4.86642 58.5239 4.86785 57.762 5.02968C57.0557 5.17973 56.6602 4.85427 56.5603 4.15187C56.4022 3.03993 56.4901 1.92456 56.5341 0.811559C56.5566 0.24279 56.941 0.0170394 57.4698 0.011908C58.2388 0.00444362 59.0087 -0.0116202 59.777 0.013797C61.0815 0.0569412 61.5022 0.443871 61.6093 1.72255C61.6605 2.33407 61.619 2.95278 61.6423 3.56736C61.6787 4.52654 61.2911 5.03546 60.1663 4.9097Z"
                fill="#FDCD01"
              />
            </svg>
          </li>

          <li>
            <span className="font-bold">SemiBill</span> is a leading payment
            service provider that enables users to easily and securely pay for
            various bills and subscriptions, including electricity, internet,
            airtime, data bundles, educational bills, cable TV, and more.
          </li>

          <li className="flex flex-col gap-y-3">
            <strong>Services</strong>
            <a href="#">Data bundle purchases</a>
            <a href="#">Mobile airtime top-ups</a>
            <a href="#"> Education bill payments</a>
            <a href="#"> Betting services</a>
            <a href="#">Cable TV subscriptions </a>
            <a href="#"> Utility Payment</a>
          </li>

          <li className="flex flex-col gap-y-3">
            <strong>Company</strong>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#"> Terms of Use</a>
            <a href="#"> Contact Us</a>
          </li>

          <li className="flex flex-col gap-y-3">
            <strong>Info</strong>
            <a href="tel:+2349075992464">(+234) 907 599 2464</a>
          </li>
          <li className="flex flex-col gap-y-3">
            <strong>Follow us</strong>
            <a href="tel:+2349075992464">(+234) 907 599 2464</a>
          </li>
        </ul>

        <ul className="mt-12 flex items-center justify-center border-t border-appGray600 py-7 sm:justify-between">
          <li className="flex items-center text-appGray700">
            &copy; 2024 SemiBill All rights reserved.
          </li>

          <li className="hidden items-center gap-6 sm:flex">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
