import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'
import PolicyForm from './PolicyForm'


const Modal = (props) => {
  return ReactDOM.createPortal(<div onClick={() => history.push('/dashboard')}className="ui dimmer modals visible active">
    <div onClick={(e)=>e.stopPropagation()}  className="ui standard modal visible active">
      <div className="content"><PolicyForm formData={props.content}/></div>
    </div>
  </div>, document.getElementById("modal"))
}

export default Modal
