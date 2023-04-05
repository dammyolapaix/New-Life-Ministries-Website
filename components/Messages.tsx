import { IMessagesRes } from '@/interfaces'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'

const Messages: FC<{ messagesRes: IMessagesRes }> = ({ messagesRes }) => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        {messagesRes.data.map((message) => (
          <Link
            href={`/messages/${message.attributes.youtubeId}`}
            key={message.id}
          >
            <div className="grid grid-cols-5 items-center bg-white shadow-md p-5 rounded-md hover:shadow-xl">
              <AiOutlineYoutube className="text-red-600 text-5xl col-span-1" />
              <h2 className="col-span-4">{message.attributes.title}</h2>
            </div>
          </Link>
        ))}
        {/* <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/DRCoraISqmE"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe> */}
      </div>
    </section>
  )
}

export default Messages
