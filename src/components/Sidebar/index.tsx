import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppLogo from '../AppLogo';
import { sidebarLinks } from '../../navigation/sidebar';
import ArrowUp from '../SVGs/ArrowUp';
import SidebarLinkGroup from './SidebarLinkGroup';
import useLogout from '../../hooks/useLogout';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const { handleLogout } = useLogout();

  return (
    <aside
      ref={sidebar}
      className={`absolute  left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center  justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink className="block rounded-md" to="/">
          <AppLogo />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 p-4 pt-0  lg:px-6">
          {/* <!-- Menu Group --> */}
          {sidebarLinks(pathname).map((data, index) => {
            if (!data) return;
            const {
              title,
              otherLinks,
              route,
              groupCondition,
              singleItemCondition,
              sectionTitle,
              badge1,
              badge2,
              groupIcon,
              groupTitle,
            } = data;

            return (
              <dl key={index}>
                {!!sectionTitle && (
                  <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                    {sectionTitle}
                  </h3>
                )}

                <ul className="mb-6 flex flex-col gap-1.5">
                  {!!otherLinks && otherLinks.length > 0 ? (
                    <SidebarLinkGroup activeCondition={!!groupCondition}>
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <button
                              type="button"
                              className={`group relative flex w-full items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                !!groupCondition && 'bg-graydark dark:bg-meta-4'
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {groupIcon}
                              {groupTitle}
                              <ArrowUp isOpen={open} />
                            </button>
                            {/* <!-- Dropdown Menu Start --> */}
                            <div
                              className={`translate transform overflow-hidden ${
                                !open && 'hidden'
                              }`}
                            >
                              <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                {otherLinks.map(
                                  ({ title, route, badge1, badge2 }, key) => (
                                    <li key={key}>
                                      <NavLink
                                        to={route}
                                        className={({ isActive }) =>
                                          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                          (isActive && '!text-white')
                                        }
                                      >
                                        {title}
                                        {!!badge2 && (
                                          <span className="absolute right-14 top-1/2 -translate-y-1/2 rounded bg-primary px-2.5 py-1 text-xs font-medium text-white">
                                            {badge2}
                                          </span>
                                        )}
                                        {!!badge1 && (
                                          <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                                            {badge1}
                                          </span>
                                        )}
                                      </NavLink>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            {/* <!-- Dropdown Menu End --> */}
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                  ) : (
                    <li>
                      <NavLink
                        to={route}
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          !!singleItemCondition && 'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        {groupIcon}
                        {title}

                        {!!badge2 && (
                          <span className="absolute right-14 top-1/2 -translate-y-1/2 rounded bg-primary px-2.5 py-1 text-xs font-medium text-white">
                            {badge2}
                          </span>
                        )}
                        {badge1 && (
                          <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                            {badge1}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  )}
                </ul>
              </dl>
            );
          })}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      <div className="flex flex-1 items-end  px-6  py-10">
        <button
          className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          onClick={handleLogout}
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
              fill=""
            />
            <path
              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
              fill=""
            />
          </svg>
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
