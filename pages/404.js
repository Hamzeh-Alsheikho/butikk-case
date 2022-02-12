import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() =>{
            router.push("/")
        }, 4000)
    },[])
    return ( 
        <>
        <div className="notFound">
            <h1>Ooooops</h1>
            <h2>That page can't be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>

        </div>
        </>
     );
}
 
export default NotFound;