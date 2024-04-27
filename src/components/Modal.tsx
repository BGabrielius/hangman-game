import { useEffect, useRef } from 'react';

import Button from './Button';
import { useRouter } from 'next/navigation';
interface Props {
  headline: string;
  openModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ headline, openModal, closeModal }) => {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className='p-2 m-[auto] relative h-[532px] md:h-[570px] w-[340px] md:w-[600px] flex justify-center items-end bg-transparent'
    >
      <div className='w-[324px] h-[445px] md:w-[592px] gap-8 pb-12 rounded-[72px] shadow-s-primary bg-gradient-to-b from-gradient-lightblue/75 to-gradient-darkblue/75 flex flex-col items-center justify-center'>
        <h4 className='absolute top-0 text-[94px] md:text-f-heading-xl stroke-ingame bg-gradient-to-b from-gradient-text to-white text-gradient-text text-transparent bg-clip-text'>
          {headline}
        </h4>
        <div></div>

        {headline === 'Paused' ? (
          <Button text='CONTINIUE' action={closeModal} type='primary' />
        ) : (
          <Button
            text='PLAY AGAIN'
            action={() => window.location.reload()}
            type='primary'
          />
        )}
        <Button text='NEW CATEGORY' action={router.back} type='primary' />
        <Button
          text='QUIT GAME'
          action={() => router.push('/')}
          type='secondary'
        />
      </div>
    </dialog>
  );
};

export default Modal;
