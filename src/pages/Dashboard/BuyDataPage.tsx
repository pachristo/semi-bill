import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import BreadcrumbThree from '../../components/Breadcrumbs/BreadcrumbThree';
import ErrorMessage from '../../components/ErrorMessage';
import routes from '../../navigation/routes';
import MtnImage from '../../assets/brands/mtn.svg';
import NineMobileImage from '../../assets/brands/9mobile.svg';
import GloImage from '../../assets/brands/glo.svg';
import AirtelImage from '../../assets/brands/airtel.svg';
import { useState } from 'react';
import AppButton from '../../components/Custom/AppButton';
import SpinnerIcon from '../../components/SVGs/SpinnerIcon';

interface Schema {
  mobile: string;
  plan: string;
}

const schema = Joi.object<Schema>({
  mobile: Joi.string().min(1).max(255),
  plan: Joi.string().min(1).max(255),
});

const dataPlan = [
  {
    id: 1,
    name: 'MTN 1gb 500 naira',
  },
  {
    id: 2,
    name: 'MTN 2gb 1000 naira',
  },
  {
    id: 3,
    name: 'MTN 3gb 1500 naira',
  },
];

const networks = [MtnImage, GloImage, NineMobileImage, AirtelImage];

const BuyDataPage = (): JSX.Element => {
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
          { route: '', title: 'Buy Data', disabled: true },
        ]}
      />

      <section className="app-card-container">
        <div className="app-card-header">
          <h4 className="app-card-title text-center ">Buy Data</h4>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto flex max-w-115 flex-col justify-center gap-y-12 px-5 py-10 md:px-0"
        >
          <div>
            <label className="app-input-label">Mobile number *</label>
            <div className="relative">
              <input
                {...register('mobile')}
                placeholder="Enter the mobile number"
                className="app-input"
              />
            </div>
            <ErrorMessage message={errors?.mobile?.message} />
          </div>

          <div>
            <label className="app-input-label mb-3">
              Select the network provider *
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
              Data Plan *
            </label>
            <select {...register('plan')} className={`app-input `}>
              <option className="dark:text-white/50" value="">
                Select Data Plan
              </option>
              {dataPlan?.map(({ id, name }, key) => (
                <option className="dark:text-white" value={id} key={key}>
                  {name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors?.plan?.message} />
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

export default BuyDataPage;
