import { useState } from "react";


export const OnClickHard = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-purple-500 text-white p-3 rounded">Open Modal</button>

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded">
                        <p>Modal Content</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-red-500 text-white mt-3 p-2 rounded"
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
