const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    playbackSpeed: [0.5, 1, 2, 4, 8],
    video: {
        url: location.search.substring(1)
    },
});