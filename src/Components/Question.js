import React from 'react';
export default function Question({question , options , clickedOption , borderColor}) {
  return (
    <div className='relative font-medium w-full'>
        <h2 className='mb-4'>{question}</h2>
        <ul className='relative flex flex-col gap-2'>
          {options.map((option, index) => (
            <li className={`cursor-pointer relative border-[1px] ${borderColor}  p-2 duration-200  hover:bg-green-600 hover:text-white`} key={index}
            onClick={() => clickedOption(option)}>
              {option}
            </li>
          ))}
        </ul>
    </div>
  )
}
