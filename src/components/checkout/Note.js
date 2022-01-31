import React,{Fragment} from 'react';

const Note = () => {
    return (
        <Fragment>
            <div>
                <label htmlFor="order-notes">Order Notes</label>
                <textarea className="text-area" id="order-notes"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          defaultValue={""}/>
            </div>
        </Fragment>
    );
};

export default Note;
