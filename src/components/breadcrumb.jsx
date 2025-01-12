import React from 'react'

const breadcrumb = () => {
    return (
        <nav className="text-sm bg-[#D3E0E6] px-14 py-5" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
                <li>
                    <a href="/cryptocurrencies" className="text-gray-500 hover:text-gray-700">
                        Cryptocurrencies
                    </a>
                </li>
                <li>
                    <span className="text-gray-400">»</span>
                </li>
                <li>
                    <span className=' text-gray-700'>Bitcoin</span>
                </li>
            </ol>
        </nav>

    )
}

export default breadcrumb
