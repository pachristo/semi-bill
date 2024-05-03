import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import ErrorMessage from '../../../../components/ErrorMessage';
import SpinnerIcon from '../../../../components/SVGs/SpinnerIcon';
import { ChangePasswordRequest } from '../../../../types/api/auth.types';
import { joiPasswordValidation } from '../../../../utils';

const schema = Joi.object<ChangePasswordRequest>({
  password: Joi.string().min(8).max(255).required(),
  confirmPassword: joiPasswordValidation,
  newPassword: joiPasswordValidation,
});

const ChangePassword = (): JSX.Element => {
  const [isPasswordVisible, setPasswordVisiblity] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ChangePasswordRequest>({
    resolver: joiResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    reset();
  });

  const isLoading = false;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Security</h3>
      </div>
      <div className="p-7">
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Old Password
            </label>
            <div className="app-input-container flex items-center">
              <input
                placeholder="Old password"
                className="app-input-without-container"
                id="password"
                autoComplete="current-password"
                type={isPasswordVisible ? 'text' : 'password'}
                disabled={isLoading}
                {...register('password')}
              />

              <button
                onClick={() => setPasswordVisiblity((value) => !value)}
                type="button"
                className="mx-2 px-2 text-lg md:text-xl "
              >
                {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            <ErrorMessage message={errors?.password?.message} />
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              New Password
            </label>
            <div className="app-input-container flex items-center">
              <input
                placeholder="Minimum of 8 characters"
                className="app-input-without-container"
                id="newPassword"
                autoComplete="new-password"
                type={isPasswordVisible ? 'text' : 'password'}
                disabled={isLoading}
                {...register('newPassword')}
              />

              <button
                onClick={() => setPasswordVisiblity((value) => !value)}
                type="button"
                className="mx-2 px-2 text-lg md:text-xl "
              >
                {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            <ErrorMessage message={errors?.newPassword?.message} />
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Confirm password
            </label>
            <div className="app-input-container flex items-center">
              <input
                placeholder="Confirm new password"
                className="app-input-without-container"
                id="confirmPassword"
                autoComplete="new-password"
                type={isPasswordVisible ? 'text' : 'password'}
                disabled={isLoading}
                {...register('confirmPassword')}
              />

              <button
                onClick={() => setPasswordVisiblity((value) => !value)}
                type="button"
                className="mx-2 px-2 text-lg md:text-xl "
              >
                {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            <ErrorMessage message={errors?.confirmPassword?.message} />
          </div>

          <div className="flex justify-end  gap-4.5">
            <button
              disabled={isLoading}
              className="flex justify-center gap-2 rounded bg-primary px-6 py-2 font-medium text-gray transition-all duration-300 hover:bg-opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
            >
              Change password
              {isLoading && <SpinnerIcon />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
