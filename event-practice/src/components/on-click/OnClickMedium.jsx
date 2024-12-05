import { useState } from "react";


export const OnClickMedium = () => {
    const [count, setCount] = useState(0);
    return (
        <button
            onClick={() => setCount(count + 1)}
            className="p-3 rounded bg-green-500 text-white"
        >
            Clicked {count} times
        </button>
    )
}
