import React,{Fragment} from 'react'

function Contact() {
    return (
        <Fragment>
            <div className="page-contact u-s-p-t-80">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="touch-wrapper">
                        <h1 className="contact-h1">Get In Touch With Us</h1>
                        <form>
                        <div className="group-inline u-s-m-b-30">
                            <div className="group-1 u-s-p-r-16">
                            <label htmlFor="contact-name">Your Name
                                <span className="astk">*</span>
                            </label>
                            <input type="text" id="contact-name" className="text-field" placeholder="Name" />
                            </div>
                            <div className="group-2">
                            <label htmlFor="contact-email">Your Email
                                <span className="astk">*</span>
                            </label>
                            <input type="text" id="contact-email" className="text-field" placeholder="Email" />
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <label htmlFor="contact-subject">Subject
                            <span className="astk">*</span>
                            </label>
                            <input type="text" id="contact-subject" className="text-field" placeholder="Subject" />
                        </div>
                        <div className="u-s-m-b-30">
                            <label htmlFor="contact-message">Message:</label>
                            <textarea className="text-area" id="contact-message" defaultValue={""} />
                        </div>
                        <div className="u-s-m-b-30">
                            <button type="submit" className="button button-outline-secondary">Send Message</button>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="information-about-wrapper">
                        <h1 className="contact-h1">Information About Us</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora, voluptate. Architecto aspernatur, culpa cupiditate deserunt dolore eos facere in, incidunt omnis quae quam quos, similique sunt tempore vel vero.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora, voluptate. Architecto aspernatur, culpa cupiditate deserunt dolore eos facere in, incidunt omnis quae quam quos, similique sunt tempore vel vero.
                        </p>
                    </div>
                    <div className="contact-us-wrapper">
                        <h1 className="contact-h1">Contact Us</h1>
                        <div className="contact-material u-s-m-b-16">
                        <h6>Location</h6>
                        <span>4441 Jett Lane</span>
                        <span>Bellflower, CA 90706</span>
                        </div>
                        <div className="contact-material u-s-m-b-16">
                        <h6>Email</h6>
                        <span>contact@domain.com</span>
                        </div>
                        <div className="contact-material u-s-m-b-16">
                        <h6>Telephone</h6>
                        <span>+111-444-989</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="u-s-p-t-80">
                <div id="map" />
                </div>
                
            </div>
        </Fragment>
    )
}

export default Contact
