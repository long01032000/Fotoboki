import React, { Component, useEffect, useState } from 'react'


type Props = {
    Component: React.FC,
    ComponentMobile?: React.FC,
    // ComponentJSX: JSX.Element
}

type Screen = {
    width:number,
    height:number
}

export default function ResponsiveItem({Component,ComponentMobile}: Props) {

    const [screen,setScreen] = useState<Screen>({
        width:window.innerWidth,
        height:window.innerHeight
    });

    useEffect(() => {
        let resizeFunction = () => {
            setScreen({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.onresize = resizeFunction
        return () => {
            window.removeEventListener('resize',resizeFunction);
        }
    },[])

    let ComponentRender = Component;
    if (screen.width < 768 && ComponentMobile) {
        ComponentRender = ComponentMobile;
    }

    return <>
    <ComponentRender/>
    </>

 
}

