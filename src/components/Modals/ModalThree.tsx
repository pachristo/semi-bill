import { useEffect, useRef } from 'react';
import { useStore } from 'zustand';
import { appStateStore } from '../../stores/appState.store';

const ModalThree: React.FC = () => {
  const { activeModal, closeActiveModal } = useStore(appStateStore);

  const modalOpen = activeModal?.modalType === 'Type three';

  const modal = useRef<any>(null);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: MouseEvent) => {
  //     if (!modal.current) return;
  //     if (!modalOpen || modal.current.contains(target)) return;
  //     closeActiveModal();
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!modalOpen || keyCode !== 27) return;
      closeActiveModal();
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        modalOpen ? 'block' : 'hidden'
      }`}
    >
      <div ref={modal} className=" w-full p-2 ">
        {activeModal?.modalThreeComponent}
      </div>
    </div>
  );
};

export default ModalThree;
