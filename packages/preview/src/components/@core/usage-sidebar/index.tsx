import { Transition } from '@components/pages/search'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import CodeBlock from '../code-block'
import styles from '@styles/_sidebar.module.scss'

export interface UsageSidebarProps {
    transition: Transition, setTransition: React.Dispatch<React.SetStateAction<Transition>>,
    state: any
}
const UsageSidebar = ({ transition, setTransition, state }: UsageSidebarProps) => {
    const code = `
import React from "react";
${state.code}

const MyComponent = () => {
     return ( 
     <div>
       <${state.name} />
     </div>
  )
}
export default MyComponent
`
    return (transition !== '' &&
        <div className={`${styles["search-sidebar"]} ${styles[transition]}`}>
            <button
                onClick={() => {
                    setTransition('slideout')
                    setTimeout(() => {
                        setTransition('')
                    }, 300)
                }}
                style={{
                    width: "full",
                }}
                className={styles["sidebar-back-button"]}
            >
                <FiChevronRight fontSize="36px" />
            </button>
            <div className={styles["selected-icon"]}>
                {state.icon()}
                <div className={styles["icon-name"]}>
                    {state.name}
                </div>
            </div>

            <div className={styles['usage-text']}>
                Usage
            </div>
            <CodeBlock code={code} language="jsx" />

        </div>)
}

export default UsageSidebar