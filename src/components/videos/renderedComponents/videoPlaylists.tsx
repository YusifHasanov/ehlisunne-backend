import { Video } from '@prisma/client'
import React, { FC } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image'
import { useRouter } from 'next/router'
async function queryFn(playlistId: string) {
    const { data } = await axios.get(`/api/videos?playlistId=${playlistId}`)
    return data
}
type videoIdType = string | string[] | undefined

const VideoPlaylists = ({ playlistId, videoId }: { playlistId: string, videoId: videoIdType }) => {

    const router = useRouter()
    const query = useQuery<any, unknown>(["video", playlistId],
        async () => await queryFn(playlistId), {
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })
    if (query.isLoading) return <div>Loading</div>

    if (query.isError) return <div>error</div>
    if (!query.data) return <div>no data</div>
    if (query.data?.filter((v: Video) => v.videoId !== videoId).length === 0) return <div className='flex w-full justify-center'>no videos</div>
    console.log(query.data)
    return (
        <div className='flex flex-col items-center w-full'>
            <h3 className='text-green-500 mb-6  text-4xl uppercase' >Digər Videolar</h3>
            <div className='video_playlists pt-2 px-5'>
                {query.data.filter((v: Video) => v.videoId !== videoId).map((video: Video) => (
                    <div onClick={()=>router.push(`/videos/${video.videoId}`)} key={video.id} className='flex   border border-gray-500 dark:border-slate-900 p-4 rounded-lg mb-4 justify-between items-center bg-gray-300 dark:bg-slate-800 cursor-pointer  '>
                        <p
                            className= 'text-gray-600 dark:text-gray-400 text-xl'
                        >{video.title}</p>

                        <Image className='rounded-md' src={video.thumbnail} alt={video.title} width={140} height={40} />
                    </div>

                ))}
            </div>

        </div>
    )
}


export default VideoPlaylists