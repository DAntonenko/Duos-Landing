/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, createContext, ReactNode } from "react";
import { flush, init, setTransport, track } from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

interface AmplitudeContextType {
    trackAmplitudeEvent: (eventName: string, eventProperties?: Record<string, any>) => void;
}

export const AmplitudeContext = createContext<AmplitudeContextType | undefined>(undefined);

const AmplitudeContextProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        if (AMPLITUDE_API_KEY) {
            init(AMPLITUDE_API_KEY, { "autocapture": true });
            window.addEventListener('pagehide',
                () => {
                    setTransport('beacon')
                    flush()
                },
            );
        } else {
            console.info("Analytics not initialized");
        }
    }, []);

    const trackAmplitudeEvent = (eventName: string, eventProperties?: Record<string, any>) => {
        track(eventName, eventProperties);
    };

    const value: AmplitudeContextType = { trackAmplitudeEvent };

    return <AmplitudeContext.Provider value={value}>{children}</AmplitudeContext.Provider>;
};

export default AmplitudeContextProvider;