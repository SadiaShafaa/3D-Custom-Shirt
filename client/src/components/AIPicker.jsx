/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg,
  handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
      placeholder=' Ask Ai...'
      rows={5}
      value={prompt}
      onChange={(e)=> setPrompt(e.target.value)}
      className='ai-picker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg? (
          <CustomButton
          type="outline"
          title=" Asking Ai..."
          customStyles="text-xs"
          />
        ):(
          <>
          <CustomButton
          type="outline"
          title=" Ai Logo"
          handleClick={()=> handleSubmit('logo')}
          customStyles="text-xs"
          />
          
          <CustomButton
          type="filled"
          title=" Ai Full"
          handleClick={()=> handleSubmit('full')}
          customStyles="text-xs"
          />
          </>
        )
      }
      </div>
      </div>
  )
}

export default AIPicker