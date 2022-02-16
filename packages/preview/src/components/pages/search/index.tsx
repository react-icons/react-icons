import CodeBlock from "@components/@core/code-block";
import { ALL_ICONS } from "@utils/icon";
import { Context } from "@utils/search-context";
import React, { useCallback, useState } from "react";
import SearchIconSet from "./search-iconset";
import { GrCircleInformation } from 'react-icons/gr'
import UsageSidebar from "@components/@core/usage-sidebar";
import styles from '@styles/_sidebar.module.scss'
import { IconProps } from "@components/@core/icon";
export type Transition = 'slidein' | 'slideout' | ''



const IconSet = ({ state, allIcons, highlightPattern, onIconClick, query }: { state: any, allIcons: any[], query, onIconClick, highlightPattern: RegExp } & Partial<IconProps>) => {
  return <>

    {allIcons.map((icon) => (

      <SearchIconSet
        state={state}
        onIconClick={onIconClick}
        key={icon.id}
        icon={icon}
        query={query}
        highlightPattern={highlightPattern}
      />

    ))
    }
  </>
}

const MemoizedIconSet = React.memo(IconSet)

export default function SearchPageComponent() {

  const allIcons = ALL_ICONS;
  const [state, setState] = useState({ code: '', name: '', icon: () => '' })
  const onIconClick = (name, importName, icon) => {
    setState({ name, code: importName, icon })
  }
  const [transition, setTransition] = React.useState<Transition>('')
  const { query } = React.useContext(Context);
  if (query.length > 2) {
    const hightlightPattern = new RegExp(`(${query})`, "i");

    return (
      <>
        <div className={styles["sidebar-button-container"]}>
          <h2>
            Results for: <i>{query}</i>
          </h2>
          {
            state.name !== '' &&
            <button onClick={() => {
              setTransition('slidein')
            }} className={styles["sidebar-button-open"]}>

              <GrCircleInformation />

            </button>}
        </div>
        <div className={styles["search-container"]}>
          <div className="icons">
            <MemoizedIconSet state={state} query={query} onIconClick={onIconClick} allIcons={allIcons} highlightPattern={hightlightPattern} />
          </div>
          <UsageSidebar transition={transition} setTransition={setTransition} state={state} />
        </div>
        <h3 className="no-results" />
      </>
    );
  }
  return <h2>Please enter at least 3 characters to search...</h2>;
}
