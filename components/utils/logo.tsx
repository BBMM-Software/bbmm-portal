import Link from 'next/link'

export default function Logo({ fillColor = 'black' }) {
    return (
        <Link href="/" className="block h-full" aria-label="Cruip">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fontSize={150}
                     className={`font-blocks h-full w-auto`} fontWeight={500} fill={fillColor} >
                    <text id="BB_MM" data-name="BB MM" transform="translate(59.586 182.726) scale(1.171)">BB
                        <tspan x="0" dy="180">MM</tspan>
                    </text>
                </svg>
        </Link>
    )
}
