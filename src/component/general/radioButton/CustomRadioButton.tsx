import { IoMdRadioButtonOff } from 'react-icons/io';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

interface IProps {
	value?: string | number | boolean;
	checked: boolean;
	onClick?: (newValue?: string | number | boolean) => void;
}

const CustomRadioButton = ({ value, checked, onClick }: IProps) => {
	const onClickHandler = () => {
		if (!onClick) return;
		onClick(value);
	};

	return (
		<div className={`${onClick ? 'cursor-pointer' : ''}`} onClick={onClickHandler}>
			{checked ? <MdOutlineRadioButtonChecked /> : <IoMdRadioButtonOff />}
		</div>
	);
};

export default CustomRadioButton;
