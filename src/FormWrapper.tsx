import { ReactNode } from "react"

type FormWrapperProps = {
    title: String,
    children: ReactNode
}
export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}