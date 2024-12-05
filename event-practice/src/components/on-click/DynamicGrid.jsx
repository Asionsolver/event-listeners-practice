import { useState } from "react";


export const DynamicGrid = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const toggleItem = (item) => {
        setSelectedItems((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item])
    }
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 p-5">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div
                            key={item}
                            onClick={() => toggleItem(item)}
                            className={`p-4 rounded text-center border cursor-pointer ${selectedItems.includes(item) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
                        >
                            Item {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
