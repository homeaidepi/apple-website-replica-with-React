import React, {Component } from 'react';
import './SixthContaints.css'
import ArcadeIcon from "../../../images/icons/arcade.png";
import StructureTwo from '../Containts/StructureTwo'

class SixthContaint extends Component {
    componentWillMount () {
        const script = document.createElement("script");
    
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() { 
        return (  
            <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={ArcadeIcon}/>
                                    </div>
                                </div>
                                <div className="description-wraper white">
                                    Workday Conversion that was Epic
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Play now<sup>2</sup></a></li>
                                        <li><a href="">Learn about Apple Arcade</a></li>
                                    </ul> 
                                </div>						
                            </div>
                        </div>
                        <div className="calendly-inline-widget" style={{width:"50%"}} data-url="https://calendly.com/vandy_at_ferguson?hide_landing_page_details=1&hide_gdpr_banner=1" >
                        </div>
                        {/* <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" 
                            title="Apple Card Monthly Installments"
                            description="The simplicity of Apple In a credit card."link="Apply now"><a href="">Learn more</a></StructureTwo> */}
                    </div>
                </div> 
            </section>
        );
    }
}
 
export default SixthContaint;