import { useState } from 'react';
import { useStore } from 'zustand';
import SpinnerIcon from '../../../../components/SVGs/SpinnerIcon';
import UploadIcon from '../../../../components/SVGs/UploadIcon';
import { authStore } from '../../../../stores/auth.store';
import { ImageDetails } from '../../../../types/app/components.types';
import { appToast } from '../../../../utils/appToast';

const ChangePhoto = (): JSX.Element => {
  const [imageDetails, setImageDetails] = useState<ImageDetails | null>(null);
  const { loginResponse } = useStore(authStore);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const filePicked = event.target.files?.[0];
    // @ts-ignore
    const fileImageURL = URL.createObjectURL(filePicked);

    if (!filePicked || !fileImageURL)
      return appToast.Warning('Invalid Image Selected');

    const imageData = {
      file: filePicked,
      imageURL: fileImageURL,
    };

    setImageDetails(imageData);
  };

  // const updateProfilePictureAPI = useMutation({
  //   mutationFn: updateProfilePicture,
  // });

  // const isLoading = updateProfilePictureAPI?.isPending;
  const isLoading = false;

  const handleImageUpload = async () => {
    const data = new FormData();

    data.append('profilePicture', imageDetails.file);

    // const response = await updateProfilePictureAPI.mutateAsync(data);

    // if (isValidResponse(response)) {
    //   adminProfileRes?.refetch();
    //   appToast.Success('Profile picture changed successfully.');
    //   setImageDetails(null);
    // } else handleApiErrors(response);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Your Photo</h3>
      </div>
      <div className="p-7">
        <form action="#">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-14 w-14 rounded-full">
              <img
                src={imageDetails?.imageURL}
                alt={
                  loginResponse?.data?.firstName +
                  ' ' +
                  loginResponse?.data?.lastName
                }
              />
            </div>
            <div>
              <span className="mb-1.5 text-black dark:text-white">
                Edit your photo
              </span>
            </div>
          </div>

          <div
            id="FileUpload"
            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5"
          >
            <input
              disabled={isLoading}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
            />
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                <UploadIcon />
              </span>
              <p>
                <span className="text-primary">Click to upload</span> or drag
                and drop
              </p>
              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
              <p>(max, 800 X 800px)</p>
            </div>
          </div>

          {!!imageDetails?.imageURL && (
            <div className="flex justify-end gap-4.5">
              <button
                className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                type="button"
                onClick={() => setImageDetails(null)}
              >
                Cancel
              </button>
              <button
                disabled={isLoading}
                className="flex items-center justify-center gap-2 rounded bg-primary px-6 py-2 font-medium text-gray transition-all duration-300 hover:bg-opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={handleImageUpload}
              >
                Save
                {isLoading && <SpinnerIcon />}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePhoto;
