import { useState } from "react";


export const OnMouseEnterHard = () => {
    const [tooltip, setTooltip] = useState(false);
    return (
        <div className="relative">
            <button
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
                className="bg-blue-500 text-white p-3 rounded"
            >
                Hover me
            </button>
            {tooltip && <div className="absolute top-full mt-2 bg-gray-700 text-white p-2 rounded">
                Tooltip content
            </div>}
        </div>
    )
}
