import React from 'react'
import "../../../App.css"
export const Modal = ({children,onClick}) => {
  return (
    <div className='layer-modal' onClick={()=>onClick()}>
        <div className="modal" onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
