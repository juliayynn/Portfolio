import React from 'react';

function Projects(){
    return (
        <section id='Projects' className='section'>
            <div className='container projects-cont'>
                <div className='row'>
                    <div className='col-12 projects-title'>
                        <h2 className='gradien-title'>Проекты</h2>
                        <p className='projects-description'>
                            Мои знания базируются как на личной практике, так и на профильном высшем образовании. В процессе обучения в СибГУ им. М.Ф. Решетнёва, который окончила с отличием
                            по направлению «Разработка и сопровождение информационных систем и веб-приложений»,  я получила прочную основу как в frontend-,
                            так и backend-разработке.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <p>Frontend:</p>
                        
                    </div>
                    <div className='col-4'>
                        <p>Backend:</p>
                        
                    </div>
                    <div className='col-4'>
                        <p>Другие языки программирования:</p>
                        
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Projects;