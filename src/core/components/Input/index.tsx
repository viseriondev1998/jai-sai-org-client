import React, { FC } from 'react';

type InputProps = {
   label?: string;
   placeholder?: string;
   type: React.HTMLInputTypeAttribute;
   name?: string;
   value?: string | number | undefined;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
   required?: boolean;
   id?: string;
   touch?: boolean;
   error?: string;
   disabled?: boolean;
};

export const Input: FC<InputProps> =  ({ label, placeholder, type, name, value, onChange, onBlur, required, id, touch, error, disabled }) => {
   return (
      <>
         <input
            type={type}
            name={name}
            id={id || name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            disabled={disabled}
            className={`border border-slate-300 bg-${disabled ? 'slate-200' : 'transparent'} rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-3 sm:px-4 py-2.5 sm:py-3.5 placeholder-slate-400 duration-150`}
         />
         {touch && <p className="text-red-500 font-mono uppercase text-sm">{error}</p>}
      </>
   );
};