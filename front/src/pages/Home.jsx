import useStore from "../store";
import { useEffect, useRef, useState } from "react";
import { updateAvatar } from "../services/users";

function Home() {

    const {auth} = useStore();
    const file = useRef();

    useEffect(() => {
        
    }, []);

    const handleSubmit = async () => {
        
    }

    return (
        <>
            <h1>Bonjour {auth.user?.email}</h1>
            <input type="file" ref={file} />
            <button onClick={handleSubmit}>Update avatar</button>
        </>
    )
}

export default Home;