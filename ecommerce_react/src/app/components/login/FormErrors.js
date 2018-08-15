import React from 'react';

const FormErrors = ({formErrors}) => (
   <div className='formErrors'>
	    {Object.keys(formErrors).map((fieldName, i) => {
	      if(formErrors[fieldName].length > 0){
	        return (
						<div id="id_notife" className="notif-validate">
	          	<p className="red-text h6" key={i}>{fieldName} {formErrors[fieldName]}</p>
						</div>
	        )
	      } else {
	        return '';
	      }
	    })}
	</div>
)
export default FormErrors;
