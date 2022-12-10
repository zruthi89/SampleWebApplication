import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          VideoJS Player
        </p>
        <video
          id="my-video"
          class="video-js"
          controls
          preload="auto"
          width="880"
          height="500"
          poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
          data-setup="{}"
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
          </p>
        </video>
      </header>
    </div>
  );
}

export default App;
