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
          className="video-js"
          controls
          preload="auto"
          width="880"
          height="500"
          poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
          data-setup="{}"
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
