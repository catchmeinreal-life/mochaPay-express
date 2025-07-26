import { authService } from "../services/api";
import { useState, useEffect } from "react";

function MessageContainer (){
    const [message, setMessage] = useState("");
    const [fetching, setFetching] = useState(true);
    useEffect(() => {
        //<h1 className="home-title">Welcome to MochaPay ☕</h1>
        const getMessage = async () => {

            try {
                const response = await authService.greetUser();
                
                setMessage(response.message);
            } catch (error) {
                setMessage("Welcome to MochaPay ☕");
                console.error('Error fetching message:', error);
            } finally {
                setFetching(false);
            }
        };
        getMessage();
    }, []);

    return(
        <h1 className="home-title">
            {fetching ? (
                'Loading message...'
            ) : message}
        </h1>
    );
}

export  default MessageContainer;