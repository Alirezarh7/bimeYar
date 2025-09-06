import  { type ReactNode } from 'react';

interface IProps {
	icon: ReactNode;
	title: string;
	children: ReactNode;
	className?: string;
}

const Title = ({icon, title, children, className = 'grid grid-cols-1 md:grid-cols-2 gap-4' }: IProps) => {
	return (
		<div  className='mt-[10px]'>
			<div className='flex justify-between mx-1 items-center'>
				<div className='h-4 w-4 text-[#A4A4A4]'>{icon}</div>
				<div className='mx-2 text-[#A4A4A4]'>
					<p>{title}</p>
				</div>
				<div className='border-t !border-[#A4A4A4] flex-grow'></div>
			</div>
			<div className={`w-full  ${className}`}>{children}</div>
		</div>
	);
};

export default Title;
