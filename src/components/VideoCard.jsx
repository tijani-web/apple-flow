export default function VideoCard({ src, title, className }) {
  return (
    <div className={`video-card ${className}`}>
      <video src={src} autoPlay loop muted playsInline />
      <div className="overlay">
        {Array.isArray(title) ? (
          title.map((line, index) => <h3 key={index}>{line}</h3>)
        ) : (
          <h3>{title}</h3>
        )}
      </div>
    </div>
  );
}
