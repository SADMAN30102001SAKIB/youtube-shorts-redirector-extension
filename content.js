(() => {
  const handleVideo = () => {
    const video = document.querySelector("video");
    if (!video) return false;

    video.pause();
    video.currentTime = 0;
    video.playbackRate = 2.0;

    return true;
  };

  if (!handleVideo()) {
    const observer = new MutationObserver(() => {
      if (handleVideo()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
})();
