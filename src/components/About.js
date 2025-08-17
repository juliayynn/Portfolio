import React from 'react';

function About(){
    return (
        <section id='About' className='section'>
           <div className='col-6'>
            <div className='about-content'>
                <h1 className='gradien-title'>WEB-РАЗРАБОТЧИК</h1>
                <p className='about-description'>Привет! Я — веб-разработчик, который обожает делать сайты не просто работающими, а уютными и визуально приятными.</p>
                <p className='about-description'>Работаю с HTML, CSS, Java Script, React и постоянно учусь новому. Я верю, что код — это тоже искусство.</p>
            </div>
            </div>
            <div className='col-6 pic'>
                <img src="/pictures/flowers.png" alt="flowers" height="450px" />
            </div>
        </section>

    );
}

export default About;