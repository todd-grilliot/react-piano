import React from 'react'

const Header = ({ toggleKeyNames, toggleModal }) => {
    function toggleShowKeys(){
        toggleKeyNames();
    }
    function handleModal(){
        toggleModal();
    }
  return (
    <div className="header">
        <h1>Retro Synth</h1>
        <div className='menu-bar'>
            <h1 onClick={toggleShowKeys}>*</h1>
            <h1 onClick={handleModal}>?</h1>
        </div>
    </div>
  )
}

export default Header