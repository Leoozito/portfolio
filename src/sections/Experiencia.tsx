'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiCertificateFill } from "react-icons/pi";
import { AiFillCode } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <>
            <div className="justify-center items-center flex mt-16 mb-16 md:mb-20">
                <h1 className="xs:text-2xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-indigo-900 flex items-center dark:text-[#818cf8] uppercase xs:mb-10">Experiência</h1>
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
                    icon={<PiCertificateFill size={26}/>}
                    contentStyle={{
                        background: 'rgb(245,245,245)', color: '#000000',
                        boxShadow: "none",
                        border: "1px solid rgb(245, 245, 245)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        borderRadius: '24px',
                    }}
                    contentArrowStyle={{
                        borderRight: '10px solid  rgb(245, 245, 245)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                    >
                        <h1 className="text-indigo-700 sm:text-lg lg:text-xl font-bold">Começo da jornada</h1>
                        <p>
                            Sempre fui curioso pela tecnologia e admirado com a complexidade, então eu me motivei a entrar nesse universo por meio da programação, tirei certificações de cursos de TI onde aprendi HTML CSS, JavaScript, Design, pacotes Office
                        </p>
                    </motion.div>
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
                        border: "4px solid rgb(245, 245, 245)",
                        textAlign: "left",
                        borderRadius: '24px',
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
                    <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                    >
                        <h1 className="sm:text-lg lg:text-xl font-bold text-indigo-700">Desenvolvedor Full&apos;Stack</h1>
                        <p>
                            Chegou meu periodo de experiencia, consegui um estágio em uma empresa que fabrica placas de carros
                            <br/> <br/>
                            Trabalhei inicialmente no site web da empresa, em seguida junto da minha equipe, participei no desenvolvimento de um novo sistema web completo e mais perfomático, reformulando o front-end e back-end, e também criações de automações de processos.
                            Criei habilidades de front-end, design, de back-end ao criar API&apos;s REST, entre outras habilidades de desenvolvedor.
                            <br/> <br/>
                        </p>
                    </motion.div>
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
                        borderRadius: '24px',
                    }}
                    contentArrowStyle={{
                        borderRight: '10px solid  rgb(245, 245, 245)',
                    }}
                    iconStyle={{
                        background: 'rgb(33, 150, 243)', color: '#fff',
                        fontSize: "1.5rem",
                    }}
                >
                    <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                    >
                        <h1 className="text-indigo-700 sm:text-lg lg:text-xl font-bold">Constante aprendizado</h1>
                        <p>
                            Agora estou me profissionalizando ainda mais, estudando muito e procurando ainda mais desafios de projetos. Cai entre nós, ainda estou enferrujado no back-end, mas é aquela, nada que nós colocamos foco e prioridade, deixará de ser realizado.
                        </p>
                    </motion.div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </>
    )
}