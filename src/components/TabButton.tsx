
import React from 'react'

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const  TabButton : React.FC<TabButtonProps> = ( {active, selectTab, children } ) => {
  const buttonClasses = active?'text-white border-b border-pink-400' : 'text-[#ADB7BE] '
  
  return (
    <button onClick={selectTab}>
      <p className= {`mr-3 font-semibold hover:text-white  ${buttonClasses}`}
      >
      {children}
      </p>
    </button>
  )
}

export default TabButton