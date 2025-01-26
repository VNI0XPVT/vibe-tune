import React from 'react'
import { albums } from '../utils/song'
import AlbumCard from '../components/song/album-card'

type Props = {}

const Albums = (props: Props) => {
  return (
    <div>
        <h2 className='text-2xl font-semibold text-center mt-6'>Explore Albums</h2>

        <div className='mt-12 grid grid-cols-6 md:gap-5'>
            {
                albums.map((album, index) => (
                    <AlbumCard key={index} album={album} />
                ))
            }
        </div>
    </div>
  )
}

export default Albums