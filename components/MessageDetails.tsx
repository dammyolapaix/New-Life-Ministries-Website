import { IMessage } from '@/interfaces'
import React, { FC } from 'react'

const MessageDetails: FC<{ message: IMessage }> = ({ message }) => {
  return (
    <>
      <header className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-tertiary">
        <div className="container h-80 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl text-center">
            {message.attributes.title}
          </h1>
        </div>
      </header>
      <section className="container py-20">
        <iframe
          height="500"
          src={`https://www.youtube.com/embed/${message.attributes.youtubeId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full md:w-3/5 mx-auto"
        ></iframe>
      </section>
    </>
  )
}

export default MessageDetails
