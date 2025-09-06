import {type Control, Controller} from "react-hook-form";
import CustomInput from "./Input.tsx";

interface IProps {
    control: Control<any>
    shebaAccountWatcher: string
}

const ShabaInput = ({control, shebaAccountWatcher}: IProps) => {
    const shebaNumberCleaner = (value: string) => value.replace(/\D/g, '');

    const formatShebaAccountHandler = (cleanShebaAccount: string): string => {
        let formattedNumber: string = '';

        if (cleanShebaAccount?.length > 0) {
            formattedNumber += cleanShebaAccount.substring(0, 2);
        }

        for (let i = 2; i < cleanShebaAccount?.length; i += 4) {
            formattedNumber += '-' + cleanShebaAccount?.substring(i, i + 4);
        }

        return formattedNumber;
    };
    return (
      <div className='w-full flex mx-auto max-w-[400px]'>
        <div className=' bg-blue-100 border !border-gray-800 rounded-lg p-2 w-fit mx-2'>
          IR
        </div>
        <Controller
          control={control}
          name='shebaAccountNo'
          render={({field: {onChange}}) => (
            <CustomInput placeholder={'شماره شبا'} onChange={e => {
              const cleanedAccountNumber = shebaNumberCleaner(e.target.value);
              onChange(cleanedAccountNumber)
            }}
                         type='shiba'
                         maxLength={30}
                         value={formatShebaAccountHandler(shebaAccountWatcher)}
                         important={true}
            />
          )}
        />
      </div>
    );
};

export default ShabaInput;