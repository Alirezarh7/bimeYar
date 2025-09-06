import { AiOutlineClose } from 'react-icons/ai';
import type {ReactNode} from 'react';

// Important tip 1:
// We control the Modal state on its parent (open and close state)
// The Modal is just a wrapper component that handles the UI
// It is in the center of screen and It has a semi-transparent background
// We can close this modal by clicking on the background or the close buttton

// Important tip 2:
// We need to receive some props
// 1- isOpen: to handle show and hide this modal
// 2- onDismiss: to be able to send back dismiss command to parent
// 3- children: to render the received children inside of our Modal
interface IProps {
    isOpen: boolean;
    title: string;
    onDismiss: () => void;
    children: ReactNode;
    footerData?: ReactNode | ReactNode[];
}

const CustomModal = ({ isOpen, title = 'My Modal', onDismiss, children, footerData }: IProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className=' fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-40 flex justify-center items-center  '
                onClick={onDismiss}>
                <div
                    className={` mx-auto w-full max-w-screen-lg bg-white rounded-xl py-2 flex flex-col relative`}
                    onClick={event => event.stopPropagation()}>
                    <AiOutlineClose className='absolute left-4 top-3 text-2xl text-red-600 cursor-pointer ' onClick={onDismiss} />
                    <div className='w-full h-10 flex items-center mb-1 border-b !border-gray-300'>
                        <h1 className='text-lg text-gray-500 font-bold'>{title}</h1>
                    </div>
                    <div className={`h-full min-h-[150px] max-md:max-h-[490px] max-h-[390px]  overflow-y-scroll`}>
                        {children}
                    </div>
                    {footerData ? (
                        <div className='w-full -h-2 flex items-center justify-center border-t mt-2 !border-gray-300 z-10'>{footerData}</div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default CustomModal;
