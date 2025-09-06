import  { type ReactNode } from 'react';

interface IProps {
	infoOne: string;
	answerOne: any;
	infoTow?: string;
	answerTow?: number | string | ReactNode;
	className?: string;
}

const TitleInfo = ({ infoOne, infoTow, answerOne, answerTow, className }: IProps) => {
	return (
		<div
			className={`w-full text-[12px] flex  justify-between my-3 md:px-3 px-[5px] ${infoTow && answerTow ? 'md:justify-between' : 'md:justify-start'}`}>
			<div className='flex'>
				<strong className='flex px-2'>{`${infoOne} `}</strong>
				<p className={className}>{answerOne}</p>
			</div>
			{infoTow && answerTow ? (
				<div className='flex '>
					<strong className='px-2'>{` ${infoTow} `}</strong>
					<p>{answerTow}</p>
				</div>
			) : null}
		</div>
	);
};

export default TitleInfo;
