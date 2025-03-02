"use client"

interface OptimizedVideoProps {
  videoId: string
  className?: string
}

export default function OptimizedVideo({ videoId, className }: OptimizedVideoProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?h=661cbd3b11&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=auto`}
        allow="autoplay; fullscreen; picture-in-picture"
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  )
}