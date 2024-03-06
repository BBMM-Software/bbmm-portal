import React, { useState, useEffect } from 'react';
import { CiCircleInfo } from "react-icons/ci";

type InfoAlertProps = {
    show: boolean;
    setParentShow: (show: boolean) => void;
    message: string;
};

export default function InfoAlert({ show, setParentShow, message }: InfoAlertProps) {
    const [opacity, setOpacity] = useState('opacity-100');

    useEffect(() => {
        if (show) {
            setOpacity('opacity-100');

            const timer = setTimeout(() => {
                setOpacity('opacity-0');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [show]);

    useEffect(() => {
        let hideTimer: ReturnType<typeof setTimeout>;
        if (opacity === 'opacity-0' && show) {
            hideTimer = setTimeout(() => {
                setParentShow(false);
            }, 300);
        }

        return () => clearTimeout(hideTimer);
    }, [opacity]);

    if (!show) {
        return null;
    }

    return (
        <div className={`fixed bottom-0 w-screen flex justify-center transition-opacity duration-300 ease-in-out ${opacity}`}>
            <div className="flex items-center justify-center lg:w-1/4 p-4 mb-4 text-sm text-white rounded-lg bg-blue-50 dark:bg-gray-800">
                <CiCircleInfo size={30} />
                <span className="font-medium align-middle mx-3">{message}</span>
            </div>
        </div>
    );
}
