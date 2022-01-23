import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from "react";

const Page = (props) => {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(props.content)
            .then((res) => res.text())
            .then((md) => {
                setContent(md)
            })
    }, [props.content])

    return (
        <div>
            <ReactMarkdown children={content}/>
        </div>
    )
}

export default Page;