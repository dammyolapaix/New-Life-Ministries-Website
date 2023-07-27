const Messages = () => {
  return (
    <section className="py-20">
      <div className="container flex justify-center items-center">
        <iframe
          // height="560"
          src={`https://www.youtube.com/embed`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-52 md:h-96 lg:h-[32rem] lg:w-3/5 mx-auto"
        ></iframe>
      </div>
    </section>
  )
}

export default Messages
