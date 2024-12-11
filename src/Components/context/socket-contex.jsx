

import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {

    const token = localStorage.getItem("authToken");
    
    const socket = io(process.env.VITE_BASE_URL || 'http://localhost:8000' , {
        auth: {
            token: token, // Send the token to the server during the handshake
        },
    }); // Fallback to localhost if env is missing

    useEffect(() => {
        // Log connection status
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        // Cleanup on unmount
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    const updateUserLocation = async (userId, lat, lon) => {
        console.log("Sending location to backend:", lat, lon);
        socket.emit("update-location", { userId, location: { lat, lon } });
    };

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
 