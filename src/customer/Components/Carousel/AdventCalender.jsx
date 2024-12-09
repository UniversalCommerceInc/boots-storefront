import React from 'react';

// Shared Tailwind class strings
const flexColCenter = "flex flex-col items-center";
const textCenter = "text-center";
const textMuted = "text-muted-foreground";
const defaultImageClassName = "w-1/2 rounded-full";

const AdventCalendar = ({
    src = "https://placehold.co/200x200/0000FF/FFFFFF?text=🎄",
    alt = "Advent calendar illustration",
    imageClassName = defaultImageClassName,
    text = "Advent calendars",
}) => {
    return (
        <div className={flexColCenter}>
            <img 
                aria-hidden="true" 
                alt={alt} 
                src={src} 
                className={imageClassName}
            />
            <span className={`text-md mt-6 ${textCenter} ${textMuted}`}>{text}</span>
        </div>
    );
};

export default AdventCalendar;
