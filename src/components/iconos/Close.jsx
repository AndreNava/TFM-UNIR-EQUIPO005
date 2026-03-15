export default function Close({ size = 24 }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )
}