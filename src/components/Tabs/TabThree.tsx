import { Fragment } from 'react';

import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ITab } from '../../types/app/components.types';

interface Props {
  data: ITab[];
}

const TabThree = ({ data }: Props) => {
  return (
    <div className="relative rounded-sm border  border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        customButtonGroup={<CustomButtonGroup data={data} />}
        containerClass="pt-20"
        draggable={false}
        swipeable={false}
        infinite={false}
        keyBoardControl={false}
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={false}
        showDots={false}
        slidesToSlide={1}
        responsive={{
          desktop: {
            breakpoint: {
              max: 300000000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
      >
        {data.map(({ tabContent }, key) => (
          <Fragment key={key}>{tabContent}</Fragment>
        ))}
      </Carousel>
    </div>
  );
};

interface Props extends ButtonGroupProps {
  data: ITab[];
}

const CustomButtonGroup = ({ goToSlide, data, carouselState }: Props) => {
  const activeClasses = 'text-primary border-primary';
  const inactiveClasses = 'border-transparent';

  const { currentSlide } = carouselState;
  return (
    <ul className="absolute top-0 mb-6 flex w-full flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
      {data.map(({ tabTitle }, key) => (
        <li
          className={`border-b-2 py-4 text-sm !font-bold transition-all  hover:text-primary dark:text-white sm:text-base md:text-base ${
            currentSlide === key ? activeClasses : inactiveClasses
          }`}
          onClick={() => goToSlide(key)}
          key={key}
        >
          {tabTitle}
        </li>
      ))}
    </ul>
  );
};

export default TabThree;
