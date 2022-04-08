// import SSR caching image tag
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className = {`styles.bgBlack center`}>
            <h1 className = {styles.tealText}>About Me</h1>

            <p>I am a super cool software engineer now, I make neat stuff with the codes</p>

            {/* loading an image locally */}
            {/* an img tag would have also worked-- just no SSR caching */}
            <Image 
                src="/vercel.svg"
                alt="the vercel logo bc i <3 vercel"
                width = {500}
                height = {500}
            />

            {/* loading an image from another hosting domain */}
            <Image 
                src="https://placekitten.com/300/300"
                alt="a picture of a magnificent creature"
                width = {300}
                height = {300}
            />
        </div>
    )
}