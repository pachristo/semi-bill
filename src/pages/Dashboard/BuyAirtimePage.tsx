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
  amount: string;
}

const schema = Joi.object<Schema>({
  mobile: Joi.number().min(1),
  amount: Joi.number().min(1),
});

const networks = [MtnImage, GloImage, NineMobileImage, AirtelImage];

const BuyAirtimePage = (): JSX.Element => {
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
          { route: '', title: 'Buy airtime', disabled: true },
        ]}
      />

      <section className="app-card-container">
        <div className="app-card-header">
          <h4 className="app-card-title text-center ">Buy Airtime</h4>
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
            <label className="app-input-label">Amount (NGN) *</label>
            <div className="relative">
              <input
                {...register('amount')}
                placeholder="Enter amount in naira"
                className="app-input"
              />
            </div>
            <ErrorMessage message={errors?.amount?.message} />
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

export default BuyAirtimePage;
