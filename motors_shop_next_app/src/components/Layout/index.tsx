import { ReactNode, useState } from "react"
import Footer from "../Footer"
import Header from "../Header"

interface Props {
    children?: ReactNode
}
export const Layout = ({children, ...props}: Props) => {
    
     return (
        <>
            <Header/>
            <main
                {...props}
            >
                {children}
            </main>
            <Footer/>
        </>

    )
}