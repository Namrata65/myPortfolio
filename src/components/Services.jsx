import React from 'react';
import web from '../resources/techLogo/icons8-web-development-100.png';
import webDesign from '../resources/techLogo/icons8-web-design-80.png';
import development from '../resources/techLogo/icons8-web-100.png';
import software from '../resources/techLogo/icons8-rocket-96.png';
import design from '../resources/techLogo/icons8-color-swatch-96.png';

const Services = () => {
  return (
    <section id='services' className='services'>
        <div className='services-container'>
            <div className='services-header'>
                <h2>Services Offers</h2>
                <p>Our services are designed to meet the needs of our clients Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, consequuntur.</p>
            </div>
            <div className='services-content'>
                <ul>
                    <li>
                        <img src={web} alt="Services logo icon" />
                        <h5>Web Development</h5>
                        <p>Crafting dynamic, responsive, and user-friendly websites tailored to your business needs.</p>
                    </li>
                    <li>
                        <img src={software} alt="Services logo icon" />
                        <h5>Application Development</h5>
                        <p>Building intuitive and scalable mobile and web applications for seamless user experiences.</p>
                    </li>
                    <li>
                        <img src={design} alt="Services logo icon" />
                        <h5>Web Designing</h5>
                        <p>Designing visually stunning and engaging websites that reflect your brand identity.</p>
                    </li>
                    <li>
                        <img src={development} alt="Services logo icon" />
                        <h5>Graphic Designing</h5>
                        <p>Creating compelling visuals and graphics to bring your ideas to life with creativity and precision.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Services