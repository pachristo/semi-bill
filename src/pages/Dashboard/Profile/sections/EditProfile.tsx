import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt } from 'react-icons/fa';
import { useStore } from 'zustand';
import ErrorMessage from '../../../../components/ErrorMessage';
import MailIcon from '../../../../components/SVGs/MailIcon';
import SpinnerIcon from '../../../../components/SVGs/SpinnerIcon';
import UserIcon from '../../../../components/SVGs/UserIcon';
import { authStore } from '../../../../stores/auth.store';
import { UpdateDetailsRequest } from '../../../../types/api/auth.types';

const schema = Joi.object<UpdateDetailsRequest>({
  firstName: Joi.string().min(3).max(255),
  lastName: Joi.string().min(3).max(255),
  phone: Joi.string().min(11).max(11),
});

const EditProfile = (): JSX.Element => {
  const [isEdit, setIsEdit] = useState(false);
  const [isBackendEdited] = useState(false);

  const { loginResponse } = useStore(authStore);
  const profile = loginResponse?.data;

  const defaultValues: UpdateDetailsRequest = {
    firstName: profile?.firstName,
    lastName: profile?.lastName,
    phone: profile?.phone,
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UpdateDetailsRequest>({
    resolver: joiResolver(schema),
    defaultValues,
  });

  // const editProfileAPI = useMutation({ mutationFn: editProfile });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    // if (
    //   firstName === defaultValues?.firstName &&
    //   lastName === defaultValues?.lastName &&
    //   phone === defaultValues?.phone
    // ) {
    //   setIsEdit(false);
    //   return appToast.Error('No changes was made.');
    // }

    // const result = await editProfileAPI.mutateAsync({
    //   firstName,
    //   lastName,
    //   phone,
    // });

    // if (result.ok) {
    //   updateProfile({ firstName, lastName, phone });
    //   appToast.Success(result.data.message ?? 'Profile updated successfully.');
    //   setIsBackendEdited(true);
    //   setIsEdit(false);
    // } else {
    //   handleApiErrors(result);
    // }
  });

  const handleCancel = () => {
    setIsEdit(false);
    if (!isBackendEdited) reset();
  };

  // const isLoading = editProfileAPI?.isPending;
  const isLoading = false;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Personal Information
        </h3>
      </div>
      <div className="p-7">
        <form onSubmit={onSubmit}>
          <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="firstName"
              >
                First Name
              </label>
              <div className="relative">
                <span className="absolute left-4.5 top-3">
                  <UserIcon />
                </span>
                <input
                  disabled={!isEdit || isLoading}
                  className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  {...register('firstName')}
                />
                <ErrorMessage message={errors?.firstName?.message} />
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <div className="relative">
                <span className="absolute left-4.5 top-3">
                  <UserIcon />
                </span>
                <input
                  disabled={!isEdit || isLoading}
                  className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  {...register('lastName')}
                />
                <ErrorMessage message={errors?.lastName?.message} />
              </div>
            </div>
          </div>
          <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4.5 top-3">
                  <MailIcon />
                </span>
                <input
                  disabled
                  className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={profile?.email}
                />
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4.5 top-3">
                  <FaPhoneAlt className="mt-[2px] text-lg opacity-60" />
                </span>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  disabled={!isEdit || isLoading}
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="08012345678"
                  {...register('phone')}
                />
                <ErrorMessage message={errors?.phone?.message} />
              </div>
            </div>
          </div>

          <div className={`flex gap-4.5 ${isEdit && ' justify-end'}`}>
            {!isEdit && (
              <button
                onClick={() => setIsEdit(true)}
                className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-95"
                type="button"
              >
                Edit
              </button>
            )}
            {isEdit && (
              <>
                <button
                  disabled={isLoading}
                  onClick={handleCancel}
                  className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black transition-all duration-300 hover:shadow-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-strokedark dark:text-white"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  disabled={isLoading}
                  className="flex justify-center gap-2 rounded bg-primary px-6 py-2 font-medium text-gray transition-all duration-300 hover:bg-opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                  type="submit"
                >
                  Save
                  {isLoading && <SpinnerIcon />}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
