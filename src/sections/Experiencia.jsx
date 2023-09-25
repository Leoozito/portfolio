import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiCertificate } from 'react-icons/pi'

export default function Experience() {
    return (
        <>
            <div className="justify-center items-center flex mt-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Experiencia</h1>
            </div>
            <VerticalTimeline lineColor="">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09/07/2021"
                    icon={<PiCertificate/>}
                    contentStyle={{
                        background:
                            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight:
                            theme === "light"
                            ? "0.4rem solid #9ca3af"
                            : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                    iconStyle={{
                    background:
                        theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
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
            </VerticalTimeline>
        </>
    )
}