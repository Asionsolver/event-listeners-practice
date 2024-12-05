import { useState } from "react";


export const OnMouseEnterMedium = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div><button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`p-3 rounded ${hovered ? 'bg-green-500' : 'bg-gray-500'}`}
        >
            Hover me
        </button></div>
    )
}
