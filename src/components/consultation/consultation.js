import React from 'react';

const Consultation = () => {
    return (
        <div id="consultation">
            <div className="container">
                <div className="consultation-general">
                    <h2>Get a consultation</h2>
                    <p>Still have questions?Get a free consultation.</p>
                    <div className="consultation-general__input">
                        <form action="#">
                            <label htmlFor="#"><input type="text" name='name' placeholder='Name' required /></label>
                            <label htmlFor="#"><input type="number" name='Phone' placeholder='Phone' required /></label>
                            <label htmlFor="#"> <input type="Email" name='Email' placeholder='Email' required /></label>
                        </form>
                        <div className="btn"><button>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;