import React, { useState, useEffect } from 'react';

type InfoAlertProps = {
    show: boolean;
    setParentShow: (show: boolean) => void; // Assuming setParentShow is a function that accepts a boolean
};

export default function InfoAlert({ show, setParentShow }: InfoAlertProps) {
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
        <div className={`fixed bottom-0 w-screen flex align-center justify-center transition-opacity duration-300 ease-in-out ${opacity}`}>
            <div className="lg:w-1/4 sm:w-3/4 p-4 mb-4 text-sm text-white rounded-lg bg-blue-50 dark:bg-gray-800">
                <span className="font-medium flex align-center justify-center">The email entered is invalid!</span>
            </div>
        </div>
    );
}
