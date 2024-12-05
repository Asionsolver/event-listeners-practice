

export const OnMouseEnterSimple = () => {
    return (
        <div><button
            onMouseEnter={() => console.log('Hovered')}
            className="bg-blue-500 text-white p-3 rounded"
        >
            Hover me
        </button>
        </div>
    )
}
