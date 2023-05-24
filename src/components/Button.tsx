import React from 'react'
interface Props {
    text: string;
    classNames: string;
}
export default function Button(props: Props) {
    return (
        <>
            <p className={props.classNames}>{props.text}</p>
        </>
    )
}
