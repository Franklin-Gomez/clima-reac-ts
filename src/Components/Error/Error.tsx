import { ReactNode } from "react";
import style from './Error.module.css'

export default function Error ( { children } : { children : ReactNode }) {

    return (
        <div className={ style.container }>
            { children }
        </div>
    )
}
