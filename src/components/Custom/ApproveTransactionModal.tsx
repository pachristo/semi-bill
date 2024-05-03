import { useState } from 'react';
import { CgAttachment } from 'react-icons/cg';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import { useStore } from 'zustand';
import { appStateStore } from '../../stores/appState.store';
import { truncateText } from '../../utils';
import { appToast } from '../../utils/appToast';
import AppButton from './AppButton';
import SpinnerIcon from '../SVGs/SpinnerIcon';

interface Props {
  onApprove: (imageDetails: File[]) => void;
  message?: string;
  title?: string;
}

const MAX_NUMBER_OF_IMAGES = 3;

const ApproveTransactionModal = ({
  onApprove,
  message,
  title,
}: Props): JSX.Element => {
  const { closeActiveModal, isModalLoading } = useStore(appStateStore);

  const [imageDetailsList, setImageDetailsList] = useState<File[]>([]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (imageDetailsList?.length > MAX_NUMBER_OF_IMAGES)
      return appToast.Error(`Only ${MAX_NUMBER_OF_IMAGES} images are allowed`);
    const filesPicked = event?.target?.files;

    let allFiles: File[] = [];

    // Loop through each file in the FileList
    for (let i = 0; i < filesPicked.length; i++) {
      if (i + 1 > MAX_NUMBER_OF_IMAGES)
        return appToast.Error(
          `Only ${MAX_NUMBER_OF_IMAGES} images are allowed`
        );
      let file = filesPicked[i];
      allFiles.push(file);
    }
    setImageDetailsList(
      [...imageDetailsList, ...allFiles].slice(-MAX_NUMBER_OF_IMAGES)
    );
  };

  const showImagesNames = () => {
    if (!imageDetailsList) return '';

    return imageDetailsList.map(({ name }) => truncateText(name)).join(', ');
  };

  return (
    <aside className="app-card-container  mx-auto flex w-full max-w-lg flex-col rounded-lg bg-white p-5 dark:text-white">
      <button
        onClick={closeActiveModal}
        className="mb-3 ml-auto text-3xl text-red"
      >
        <IoCloseCircleOutline />
      </button>
      <p className="mb-6 text-base font-semibold sm:text-lg">
        {title ?? 'Confirm'}
      </p>
      <p className="mb-6 text-sm font-semibold md:text-base">
        {message ?? 'Please upload proof of transaction'} (max 3)
      </p>

      <div className=" overflow-y-auto pb-15">
        <ul className="flex flex-wrap items-center justify-between gap-5 gap-y-10 pb-3">
          {imageDetailsList?.map((imageDetails, key) => (
            <li
              className="flex flex-col items-center gap-y-2 text-xl text-red"
              key={key}
            >
              <img
                className="w-full max-w-24"
                src={URL.createObjectURL(imageDetails)}
                alt={imageDetails?.name}
              />
              <MdDeleteForever
                className="cursor-pointer"
                onClick={() =>
                  setImageDetailsList(
                    imageDetailsList.filter(
                      ({ name }) => name !== imageDetails.name
                    )
                  )
                }
              />
            </li>
          ))}
        </ul>
        <label
          htmlFor="fileInput"
          className="app-input-container mb-6 flex !cursor-pointer items-center py-2"
        >
          <span className="app-input-without-container">
            {showImagesNames()}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            disabled={isModalLoading}
            placeholder="Asset Icon"
            className="hidden"
            id="fileInput"
            name="fileInput"
          />

          <span className="mx-2 block px-2 text-lg text-gray-2/65 md:text-xl lg:text-2xl">
            <CgAttachment />
          </span>
        </label>

        <AppButton
          disabled={isModalLoading}
          onClick={() => onApprove(imageDetailsList)}
          className="mt-11 w-full"
          type="submit"
        >
          Approve
          {isModalLoading && <SpinnerIcon />}
        </AppButton>
      </div>
    </aside>
  );
};

export default ApproveTransactionModal;
