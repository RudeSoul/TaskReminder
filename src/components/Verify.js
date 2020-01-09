import React from 'react';

  const Verify = (props) => {

        return (

            <div className="verify">
                <div>
                    <p>{props.message}</p>
                    <button onClick={props.onYes}>Yes</button>
                    <button onClick={props.onNo}>No</button>
                </div>
            </div>
        );
    
}

export default Verify;