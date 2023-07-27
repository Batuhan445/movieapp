import Link from 'next/link'
import React from 'react'

const Tabs = () => {

    const tabs = [
        {
            name: "En Popüler",
            url: "popular"
        },
        {
            name: "Yeni Çıkanlar",
            url: "latest"
        },
        {
            name: "Çok Yakında",
            url: "upcoming"
        }
    ]



  return (
    <div className='p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
        {tabs.map((tab, i) =>(
            <Link href={`/?genre=${tab.url}`}>{tab.name}</Link>
        ))}
    </div>
  )
}

export default Tabs