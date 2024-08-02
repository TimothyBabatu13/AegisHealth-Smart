import { AudioHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react"


interface TextMessageType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id?: string,
    content: string,
} 

interface AudioMessageType extends DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>{
    id?: string,
    content: string,
}

export const TextMessage = ({ content, ...props } : TextMessageType) => {
    return(
        <div {...props}>{content}</div>
    )
}

export const AudioMessage = ({ content, ...props } : AudioMessageType) => {
    return(
        <audio {...props} src={content} controls></audio>
    )
}

