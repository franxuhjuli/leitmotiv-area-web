import { useState } from "react";
import PropTypes from 'prop-types';

export function Button(props) {
  return (
    <button
      className="px-4 py-2 rounded-md bg-white text-teal-700 hover:bg-slate-200 hover:font-bold font-semibold transition-colors"
      onClick={props.onClick}
    >{props.text}</button>
  );
}

Button.defaultProps = {
  onClick: () => {}, 
}

Button.propTypes = {
  text: PropTypes.string.isRequired,  
  onClick: PropTypes.func,            
};