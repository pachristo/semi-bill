import { useState } from 'react';

interface Props {
  title: string;
  details: string;
  isInitialOpened?: boolean;
}

const FAQComponent = ({
  details,
  title,
  isInitialOpened,
}: Props): JSX.Element => {
  const [isVisible, setVisibility] = useState(!isInitialOpened);

  return (
    <dl
      onClick={() => setVisibility((value) => !value)}
      className="mb-8 mt-14 max-w-[36.688rem] rounded-[3.125rem] bg-appPurple200 px-5 py-6 md:px-14"
    >
      <dt className="flex items-center justify-between text-lg md:text-xl lg:text-2xl">
        <span> {title} </span>

        <button
          className={`transition-all duration-300 ${isVisible && 'rotate-90'}`}
          type="button"
        >
          <svg
            width="1.1em"
            height="1.1em"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6983 16L14 6.10654L3.30167 16L6.90365e-08 12.9467L14 -1.90735e-06L28 12.9467L24.6983 16Z"
              fill="white"
            />
          </svg>
        </button>
      </dt>
      <div
        className={`app-collapse  ${
          !isVisible ? 'app-collapse-open' : 'app-collapse-close'
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-5 text-sm sm:text-base">{details}</p>
        </div>
      </div>
    </dl>
  );
};

export default FAQComponent;
