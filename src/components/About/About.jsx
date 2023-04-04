import React from "react";
import './About.scss'
import Footer from "../Footer/Footer";
import {Animated} from "react-animated-css";

const About = React.memo(({langIsEng}) => {
    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='about page-wrap'>
                    <div className="works-header">
                        <h2 className="section__title">
                            {langIsEng ? 'About me' : 'О себе'}
                        </h2>
                    </div>
                    <div className="about-wrap grid">
                        <div className="about-description">
                            <h2 className="about__title">
                                {langIsEng ? 'Personal data:' : 'Персональные данные:'}

                            </h2>
                            <p className="about__text">
                                {langIsEng ? 'Full Name: Antonov Igor Mikhailovich' : 'Полное имя: Антонов Игорь Михайлович'}
                            </p>
                            <p className="about__text">
                            </p>
                            <p className="about__text">
                                {langIsEng ? 'City: Dnipro' : 'Город: Днепр'}
                            </p>
                            <p className="about__text">
                                {langIsEng ? 'Phone number: +380976111127 ' : 'Телефон: +380976111127'}
                            </p>
                        </div>
                        <a href='https://www.facebook.com/GagarinGara/' target='_blank' className="about-avatar">
                        </a>
                        <div className="about-description">
                            <h2 className="about__title">
                                {langIsEng ? 'Work experience: ' : 'Опыт работы: '}
                            </h2>
                            <div className="about-description__item">
                                <h3> 11/2021 - 12/2022</h3>
                            </div>
                            <div className='about-description__item'>
                                <p className="about__text">
                                    {langIsEng ? 'Company: Global Cloud Team' : 'Компания: Global Cloud Team'}
                                </p>
                                <p className="about__text">
                                    {langIsEng ? 'Position: Java engineer' : 'Должность: Java engineer '}
                                </p>
                            </div>
                            <div>
                                <p className="about__text">
                                    {langIsEng ? 'Achievements / Tasks:' : 'Достижения / Задачи:'}
                                </p>
                                <p className="about__text">
                                    {langIsEng ? '- Development of the backend part of the application.' : '- Разработка backend части приложения.'}

                                </p>
                                <p className="about__text">
                                    {langIsEng ? '- Deployment and support of the project on dev, stage, prod\n' +
                                        'environments as a DevOps engineer.' : '- Развертывание и поддержка проекта на dev, stage, prod\n' +
                                        'среды в качестве инженера DevOps.'}
                                </p>
                                <p className="about__text">
                                    {langIsEng ? '- Maintenance and development of new features integration into an existing project.' : '- Поддержка и развитие интеграции новых функций \n' +
                                        ' в существующий проект.'}
                                </p>
                                <p className="about__text">
                                    {langIsEng ? '- Writing integration and unit testing.' : '- Написание интеграционных и модульных тестов.'}
                                </p>
                            </div>
                            <div className="about__second">
                                <div className="about-description__item">
                                    <h3> 03/2021 - 09/2021</h3>
                                </div>
                                <div className='about-description__item'>
                                    <p className="about__text">
                                        {langIsEng ? 'Company: WizardsDev' : 'Компания: WizardsDev'}
                                    </p>
                                    <p className="about__text">
                                        {langIsEng ? 'Position: Full Stack engineer' : 'Должность: Full Stack engineer '}
                                    </p>
                                </div>
                                <div>
                                    <p className="about__text">
                                        {langIsEng ? 'Achievements / Tasks:' : 'Достижения / Задачи:'}
                                    </p>
                                    <p className="about__text">
                                        {langIsEng ? '- Development of web applications and sites.' : '- Разработка веб-приложений и сайтов.'}

                                    </p>
                                    <p className="about__text">
                                        {langIsEng ? '- Sites layout.' : '- Оформление сайтов.'}
                                    </p>
                                    <p className="about__text">
                                        {langIsEng ? '- Developed an application and Chrome extension to synchronize\n' +
                                            ' Linkedin profiles with Bitrix24.' : '- Разработал приложение и расширение Chrome для синхронизации\n' +
                                            'Профили Linkedin с Битрикс24.'}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
})


export default About
