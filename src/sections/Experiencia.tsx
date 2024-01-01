'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiCertificateFill } from "react-icons/pi";
import { AiFillCode } from "react-icons/ai";
import { MdWork } from "react-icons/md";

export default function Experience() {
    return (
        <>
            <div className="justify-center items-center flex mt-16 mb-10">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Experiencia</h1>
            </div>
            <VerticalTimeline                     
                animate={true} 
                lineColor=""
            >
                {/* descricao de cursos */}
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--education"
                    date="28/10/2021 - 17/10/2022"
                    icon={<PiCertificateFill/>}
                    contentStyle={{
                        background: 'rgb(245,245,245)', color: '#000000',
                        boxShadow: "none",
                        border: "1px solid rgb(245, 245, 245)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight: '10px solid  rgb(245, 245, 245)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <h1 className="text-indigo-700 sm:text-lg lg:text-xl font-bold">Curso - Desenvolvedor de WebSite e Design Grafico</h1>
                    <p>
                        Neste periodo, iniciou meu grande interesse por tecnologia e querer entender mais sobre as complexidades deste universo. Cursei este curso e aprendi sobre: {"    "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 lg:text-lg">HTML,</span>
                        {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 lg:text-lg"> CSS</span>
                        {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 lg:text-lg">JavaScript</span>
                    </p>
                </VerticalTimelineElement>

                {/* descricao de trabalho */}
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--education"
                    date="01/07/2022 - Presente"
                    icon={<MdWork />}
                    contentStyle={{
                        background: 'rgb(245,245,245)', color: '#000000',
                        boxShadow: "none",
                        border: "1px solid rgb(245, 245, 245)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight: '10px solid  rgb(245, 245, 245)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <h1 className="sm:text-lg lg:text-xl font-bold text-indigo-700">Desenvolvedor Full-Stack</h1>
                    <p>
                        Trabalhei na empresa DVR Industrial, empresa nacional responsavel por fabricar e monitorar os registros de placas veiculares mercosul. 
                        <br/> <br/>
                        Participei no desenvolvimento de um sistema web de rastreabilidade mais performatico para empresa, reformulando o front-end e back-end completo. 
                        Trabalhei no site web da empresa e em criações de aplicações.
                        <br/> <br/>
                        Principais tecnologias utilizadas: {"  "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 lg:text-lg">Python, Django Ninja, NextJS, ReactJS, TypeScript, MySQL, Git & GitHub, REST APIs, TailwindCSS, CSS3 & HTML5</span>
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    visible={true}
                    className="vertical-timeline-element--education"
                    date="09/07/2021"
                    icon={<AiFillCode/>}
                    contentStyle={{
                        background: 'rgb(245,245,245)', color: '#000000',
                        boxShadow: "none",
                        border: "1px solid rgb(245, 245, 245)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight: '10px solid  rgb(245, 245, 245)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <h1 className="text-indigo-700 sm:text-lg lg:text-xl font-bold">Constante aprendizado</h1>
                    <p>
                        Agora estou me profissionalizando ainda mais, tendo como objetivo evoluir ainda mais minhas habilidades como full-stack. Para isto estou inicializando projetos pessoais e cursando novas tecnologias por meio da Alura.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </>
    )
}