

export default function AnimatedTitle({title, containerClass}) {
  return (
    <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
        {title.split('<br/>').map((line, index) => (
            <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                {line.split(' ').map((word, i) => (
                    <span key={i} className="animated-word" dangerouslySetInnerHTML={{ __html: word}}/>
                ))}
            </div>
        ))}
    </div>
  )
}
