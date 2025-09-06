import * as React from 'react';

interface IProps {
  legendTitle: string;
  children: React.ReactNode;
  fieldsetStyle?: any;
  legendStyle?: any;
}

export default function DataSummary(props: IProps) {
  const { legendTitle, children, legendStyle, fieldsetStyle } = props;
  return (
    <div className='px-2 w-full -z-10 '>
      <fieldset style={fieldsetStyle} className='border border-gray-150 shadow-lg rounded-xl p-5 mt-5 m-2 h-fit'>
        <legend style={legendStyle} className=' bg-white px-3'>
          {legendTitle}
        </legend>
        {children}
      </fieldset>
    </div>
  );
}
