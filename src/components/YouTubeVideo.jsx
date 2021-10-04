import React from 'react';

export default function YouTubeVideo({ id }) {
    return (
        <iframe
            className="youtube-video"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    );
}