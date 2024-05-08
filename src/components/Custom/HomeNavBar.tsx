import { Link } from 'react-router-dom';
import routes from '../../navigation/routes';
import { IconParkOutlineHamburgerButton } from './Hamburger';
import AppLogo from '../AppLogo';
import { useState } from 'react';

const navData = [
  {
    title: 'Our Services',
    route: '#',
  },
  {
    title: 'Why Choose Us',
    route: '#',
  },
  {
    title: 'Contact Us',
    route: '#',
  },
  {
    title: 'Become an Agent',
    route: '#',
  },
];

const HomeNavBar = (): JSX.Element => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <header className="fixed top-0 z-20 w-full bg-white py-1 text-black-2 shadow-lg shadow-appPurple100/10">
      <div
        id="navOverlay"
        onClick={() => setVisibility(false)}
        className={`fixed inset-0 z-40 -translate-x-full cursor-pointer bg-appPurple100/30 backdrop-blur-md transition-all duration-300 lg:-translate-x-full ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      ></div>

      <nav
        id="navContent"
        className={`fixed inset-0 z-50 w-[80%] -translate-x-full rounded-r-3xl bg-white px-5 transition-all duration-200 sm:w-[70%] lg:-translate-x-full ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        <header className="flex items-center justify-between py-5">
          <AppLogo />

          <button
            onClick={() => setVisibility(false)}
            className="ml-auto text-4xl text-appPurple100 md:hidden"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g stroke="currentColor" stroke-linecap="round" stroke-width="2">
                <path
                  fill="currentColor"
                  fill-opacity="0"
                  stroke-dasharray="60"
                  stroke-dashoffset="60"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="60;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.8s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                </path>
                <path
                  fill="none"
                  stroke-dasharray="8"
                  stroke-dashoffset="8"
                  d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="8;0"
                  />
                </path>
              </g>
            </svg>
          </button>
        </header>

        {/* MOBILE NAV STARTS */}

        <div className="pt-10">
          <ul className="flex flex-col  items-start gap-y-10 text-base">
            {navData.map(({ route, title }, key) => (
              <li
                key={key}
                className=" text-base font-medium transition-all duration-300 hover:text-appPurple100"
              >
                <Link onClick={() => setVisibility(false)} to={route}>
                  {title}
                </Link>
              </li>
            ))}

            <li className="-mb-1 mt-5 text-base font-medium transition-all duration-300 hover:text-appPurple100">
              <Link to={routes.LOGIN_PAGE}>Login</Link>
            </li>
            <li className=" text-base font-medium transition-all duration-300 hover:text-appPurple100">
              <Link to={routes.REGISTER_PAGE}>
                <button
                  className="rounded-lg border border-appDark200 bg-appDark100 p-3 text-sm font-medium text-white shadow-navShadow transition-all duration-300 hover:bg-appPurple100 md:p-4"
                  type="button"
                >
                  Get started — It's free
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* MOBILE NAV ENDS */}
      </nav>

      <nav className="app-container mx-auto flex items-center justify-between gap-7 2xl:px-0">
        <span className="py-4 lg:py-0">
          <Link to={routes.HOME_PAGE}>
            <AppLogo />
          </Link>
        </span>

        <ul className="hidden flex-1 items-center justify-around pt-2 lg:flex">
          {navData.map(({ route, title }, key) => (
            <li
              key={key}
              className="pb-6 pt-4 text-base font-medium transition-all duration-300 hover:text-appPurple100"
            >
              <Link to={route}>{title}</Link>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-3 lg:flex">
          <li>
            <Link
              to={routes.LOGIN_PAGE}
              className="text-base font-medium transition-all duration-300 hover:text-appPurple100"
            >
              Login
            </Link>
          </li>

          <Link to={routes.REGISTER_PAGE}>
            <button
              className="rounded-lg border border-appDark200 bg-appDark100 p-4 text-sm font-medium text-white shadow-navShadow transition-all duration-300 hover:bg-appPurple100"
              type="button"
            >
              Get started — It's free
            </button>
          </Link>
        </ul>

        <button
          onClick={() => setVisibility(true)}
          className="text-blue-950 cursor-pointer text-4xl duration-300 ease-in-out lg:hidden"
          type="button"
        >
          <IconParkOutlineHamburgerButton />
        </button>
      </nav>
    </header>
  );
};

export default HomeNavBar;
