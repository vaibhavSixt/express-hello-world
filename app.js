const express = require("express");
import { useEffect } from "react";
import { renderToString } from 'react-dom/server';

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
  const App = require('./app').default;
  const html = renderToString(<App />);
  res.type('html').send(html);
});

app.get("/dashboard", (_, res) => {
 const App = require('./component/dashboard').default;
  const html = renderToString(<App />);
  res.type('html').send(html);
});

app.get("/addfood", (_, res) => {
  res.send("Add Food Route");
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// src/App.js

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => {
      setTimeout(() => {
        window.confetti &&
          window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            disableForReducedMotion: true,
          });
      }, 500);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
          html {
            font-family: neo-sans;
            font-weight: 700;
            font-size: calc(62rem / 16);
          }
          body {
            background: white;
          }
          section {
            border-radius: 1em;
            padding: 1em;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
      <section>
        Hello from Render!
      </section>
    </div>
  );
}

export default App;
