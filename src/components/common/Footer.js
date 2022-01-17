import React,{Fragment} from 'react'
import BottomFooter from './footerComponents/BottomFooter'
import MidFooter from './footerComponents/MidFooter'
import OuterFooter from './footerComponents/OuterFooter'

function Footer() {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    {/* Outer-Footer */}
                    <OuterFooter/>
                    {/* Outer-Footer /- */}

                    {/* Mid-Footer */}
                    <MidFooter/>
                    {/* Mid-Footer /- */}

                    {/* Bottom-Footer */}
                    <BottomFooter/>
                    {/* Bottom-Footer /- */}
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
