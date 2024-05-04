import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import BreadcrumbThree from '../../components/Breadcrumbs/BreadcrumbThree';
import ErrorMessage from '../../components/ErrorMessage';
import { useState } from 'react';
import AppButton from '../../components/Custom/AppButton';
import SpinnerIcon from '../../components/SVGs/SpinnerIcon';
import DSTVImage from '../../assets/brands/dstv.svg';
import GotvImage from '../../assets/brands/gotv.svg';
import ShowMaxImage from '../../assets/brands/showmax.svg';
import StartimesImage from '../../assets/brands/startimes.svg';
import routes from '../../navigation/routes';

interface Schema {
  number: string;
  package: string;
}

const schema = Joi.object<Schema>({
  number: Joi.string().min(1).max(255),
  package: Joi.string().min(1).max(255),
});

const packages = [
  {
    id: 1,
    name: 'Starter ₦10,000',
  },
  {
    id: 2,
    name: 'Compact ₦15,000',
  },
  {
    id: 3,
    name: 'Premium ₦20,000',
  },
];

const networks = [DSTVImage, StartimesImage, ShowMaxImage, GotvImage];

const PayCablePage = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: joiResolver(schema),
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const isLoading = false;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <>
      <BreadcrumbThree
        data={[
          {
            route: routes.DASHBOARD_LAYOUT,
            title: 'Dashboard',
          },
          { route: '', title: 'Pay cable tv', disabled: true },
        ]}
      />

      <section className="app-card-container">
        <div className="app-card-header">
          <h4 className="app-card-title text-center ">Pay cable tv</h4>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto flex max-w-115 flex-col justify-center gap-y-12 px-5 py-10 md:px-0"
        >
          <div>
            <label className="app-input-label">Decoder Number *</label>
            <div className="relative">
              <input
                {...register('number')}
                placeholder="Enter the decoder number"
                className="app-input"
              />
            </div>
            <ErrorMessage message={errors?.number?.message} />

            <p className="app-input-label mt-1 !font-semibold">
              * Akpan Etuk Precious
            </p>
          </div>

          <div>
            <label className="app-input-label mb-3">
              Select the service provider *
            </label>

            <ul className="flex flex-wrap items-center justify-between gap-x-6 gap-y-12">
              {networks.map((image, key) => (
                <li
                  onClick={() => setActiveIndex(key)}
                  className="cursor-pointer"
                  key={key}
                >
                  <img src={image} alt="network" />

                  <div
                    className={`mt-2 h-1 w-full rounded-full bg-primary transition-all duration-300 ${
                      activeIndex === key ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Viewing package *
            </label>
            <select {...register('package')} className={`app-input `}>
              <option className="dark:text-white/50" value="">
                Select Data Plan
              </option>
              {packages?.map(({ id, name }, key) => (
                <option className="dark:text-white" value={id} key={key}>
                  {name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors?.package?.message} />
          </div>

          <AppButton disabled={isLoading} className="w-full" type="submit">
            Make payment
            {isLoading && <SpinnerIcon />}
          </AppButton>
        </form>
      </section>
    </>
  );
};

export default PayCablePage;
