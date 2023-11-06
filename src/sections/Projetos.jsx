'use client'
import { Card, Input } from "@material-tailwind/react"

export default function Projects() {
    return (
        <>
            <div className="h-screen">
                <div className="my-6 justify-center items-center flex mt-16 mb-10">
                    <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Projetos</h1>
                </div>
                <Card className="justify-center w-auto h-96 ml-20 mr-20 flex">
                    <Input className="w-96 p-2" />
                </Card>
            </div>
        </>
    )
}