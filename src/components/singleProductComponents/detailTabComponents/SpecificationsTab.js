import React,{Fragment} from 'react'

function SpecificationsTab() {
    return (
        <Fragment>
            <div className="tab-pane fade" id="specification">
                      <div className="specification-whole-container">
                        <div className="spec-ul u-s-m-b-50">
                          <h4 className="spec-heading">Key Features</h4>
                          <ul>
                            <li>Heather Grey</li>
                            <li>Black</li>
                            <li>White</li>
                          </ul>
                        </div>
                        <div className="u-s-m-b-50">
                          <h4 className="spec-heading">What's in the Box?</h4>
                          <h3 className="spec-answer">1 x hoodie</h3>
                        </div>
                        <div className="spec-table u-s-m-b-50">
                          <h4 className="spec-heading">General Information</h4>
                          <table>
                            <tbody><tr>
                                <td>Sku</td>
                                <td>AY536FA08JT86NAFAMZ</td>
                              </tr>
                            </tbody></table>
                        </div>
                        <div className="spec-table u-s-m-b-50">
                          <h4 className="spec-heading">Product Information</h4>
                          <table>
                            <tbody><tr>
                                <td>Main Material</td>
                                <td>Cotton</td>
                              </tr>
                              <tr>
                                <td>Color</td>
                                <td>Heather Grey, Black, White</td>
                              </tr>
                              <tr>
                                <td>Sleeves</td>
                                <td>Long Sleeve</td>
                              </tr>
                              <tr>
                                <td>Top Fit</td>
                                <td>Regular</td>
                              </tr>
                              <tr>
                                <td>Print</td>
                                <td>Not Printed</td>
                              </tr>
                              <tr>
                                <td>Neck</td>
                                <td>Round Neck</td>
                              </tr>
                              <tr>
                                <td>Pieces Count</td>
                                <td>1 piece</td>
                              </tr>
                              <tr>
                                <td>Occasion</td>
                                <td>Casual</td>
                              </tr>
                              <tr>
                                <td>Shipping Weight (kg)</td>
                                <td>0.5</td>
                              </tr>
                            </tbody></table>
                        </div>
                      </div>
                    </div>
        </Fragment>
    )
}

export default SpecificationsTab
