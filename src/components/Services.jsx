import React from 'react';
import img from '../resources/nams.jpeg';

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
                        <img src={img} alt="Services logo icon" />
                        <h5>Web Development</h5>
                        <p>Crafting dynamic, responsive, and user-friendly websites tailored to your business needs.</p>
                    </li>
                    <li>
                        <img src={img} alt="Services logo icon" />
                        <h5>Application Development</h5>
                        <p>Building intuitive and scalable mobile and web applications for seamless user experiences.</p>
                    </li>
                    <li>
                        <img src={img} alt="Services logo icon" />
                        <h5>Web Designing</h5>
                        <p>Designing visually stunning and engaging websites that reflect your brand identity.</p>
                    </li>
                    <li>
                        <img src={img} alt="Services logo icon" />
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