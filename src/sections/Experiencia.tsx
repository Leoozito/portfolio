'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiCertificate } from 'react-icons/pi'
import { AiOutlineCode } from 'react-icons/ai'

export default function Experience() {
    return (
        <>
            <div className="justify-center items-center flex mt-16 mb-10">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Experiencia</h1>
            </div>
            <VerticalTimeline lineColor="">
                {/* descricao de cursos */}
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    date="09/07/2021"
                    icon={<PiCertificate/>}
                    contentStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <h1>Curso - Desenvolvedor de WebSite e Design Grafico</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus tempore, rem iusto commodi neque dolore quae alias delectus voluptas 
                        ratione adipisci recusandae maxime assumenda odio explicabo distinctio, pariatur doloremque! Debitis.
                    </p>
                </VerticalTimelineElement>

                {/* descricao de trabalho */}
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--work"
                    date="09/07/2021"
                    icon={<AiOutlineCode/>}
                    contentStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(33, 150, 243)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <h1>Desenvolvedor Full-Stack</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus tempore, rem iusto commodi neque dolore quae alias delectus voluptas 
                        ratione adipisci recusandae maxime assumenda odio explicabo distinctio, pariatur doloremque! Debitis.
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </>
    )
}