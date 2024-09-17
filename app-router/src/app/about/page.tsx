import { Metadata } from "next"

export const metadata : Metadata = {
    title : {
        absolute : "Override"
    }
}

export default function About(){
    return <div>
        <h1>About page</h1>
    </div>
}