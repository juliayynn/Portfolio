import React from 'react';

function Skills(){
    return (
        <section id='Skills' className='section'>
            <div className='container skills-cont'>
                <div className='row'>
                    <div className='col-12 skills-title'>
                        <h2 className='gradien-title'>Навыки</h2>
                        <p className='skills-description'>
                            Мои знания базируются как на личной практике, так и на профильном высшем образовании. В процессе обучения в СибГУ им. М.Ф. Решетнёва, который окончила с отличием
                            по направлению «Разработка и сопровождение информационных систем и веб-приложений»,  я получила прочную основу как в frontend-,
                            так и backend-разработке.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <p>Frontend:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">HTML</li>
                            <li className="list-group-item">CSS</li>
                            <li className="list-group-item">Java Script</li>
                            <li className="list-group-item">React</li>
                            <li className="list-group-item">Bootstrap</li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <p>Backend:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">PHP</li>
                            <li className="list-group-item">Laravel</li>
                            <li className="list-group-item">ModX</li>
                            <li className="list-group-item">SQL Server</li>
                            <li className="list-group-item">MySQL</li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <p>Другие языки программирования:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">C++</li>
                            <li className="list-group-item">C#</li>
                            <li className="list-group-item">Python</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Skills;