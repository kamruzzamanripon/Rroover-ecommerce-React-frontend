import React,{Fragment} from 'react';

const TermConditions = () => {
    return (
        <Fragment>
            <div className="u-s-m-b-13">
                <input type="checkbox" className="check-box" id="accept"/>
                <label className="label-text no-color" htmlFor="accept">I’ve read and
                    accept the
                    <a href="terms-and-conditions.html"
                       className="u-c-brand">terms &amp; conditions</a>
                </label>
            </div>
        </Fragment>
    );
};

export default TermConditions;
