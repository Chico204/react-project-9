import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {

 const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hexValue);
    setToastAnimation("animate-toast-in");
    setShowToast(true);
    setTimeout(() => setToastAnimation("animate-toast-out"), 1200);
    setTimeout(() => setShowToast(false), 1500);
  };

   const [showToast, setShowToast] = useState(false);
  const [toastAnimation, setToastAnimation] = useState("animate-toast-in");
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
 
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
       
      onClick={copyToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {showToast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded shadow-md ${toastAnimation}`}
        >
          Copied to clipboard
        </div>
      )}
    </article>
  )
}

export default SingleColor