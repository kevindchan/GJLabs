import React from 'react';

export default () => {
  return (
    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h1 className='center-align'>Executing Algorithm</h1>
          <div className='center-align'>
            <div id="preloader" className="preloader-wrapper big active">
              <div className="spinner-layer spinner-green-only">
               <div className="circle-clipper left">
                 <div className="circle"></div>
               </div>
               <div className="gap-patch">
                 <div className="circle"></div>
               </div>
               <div className="circle-clipper right">
                 <div className="circle"></div>
               </div>
              </div>
            </div>   
          </div>  
        <h4 className='center-align'>Finding a beer based on your taste profile.</h4>
      </div>
    </div>
  );
}