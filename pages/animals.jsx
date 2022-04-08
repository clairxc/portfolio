import axios from "axios"

export default function Animals({ data }) {
    return (
        <h1>Random Animal: {data.rando}</h1>
    )
}

// export a function thats called 'getStaticProps'
// whatever is returned from this function
// becomes the 'data' prop in our components
export async function getStaticProps() {
    // we can do all of our ajax/axios/fetch here
    // we can call external APIs, express backends, next backend
    const { data } = await axios.get(`${process.env.SERVER_URL}/api/animals`)
    console.log(data)

    // these props are available to us in the component
    return {
        props: { data }
    }
}

// localhost:3000/animals