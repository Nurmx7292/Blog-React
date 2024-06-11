import React from 'react'
import styles from "./Button.module.css"
export default ({delPost,id,children}) => {
  return (
    <button onClick={()=>delPost(id)} className={styles.button}>{children}</button>
  )
}
