import React from 'react';

const FormField = ({ value, handleChange, placeholder, fieldName, fieldType = 'text', label, isTextarea = false }) => {
  return (
    <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>{label}</span>
      {isTextarea ? (
        <textarea
          rows={'7'}
          name={fieldName}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className='bg-white py-4 px-6 placeholder:text-secondary placeholder:text-[14px] text-black rounded-lg outline-none border-none font-medium'
        />
      ) : (
        <input
          type={fieldType}
          name={fieldName}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className='bg-white py-4 px-6 placeholder:text-secondary placeholder:text-[14px] text-black rounded-lg outline-none border-none font-medium'
        />
      )}
    </label>
  );
};

export default FormField;
