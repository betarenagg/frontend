import React, { useEffect, useRef, useState } from "react";
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function Crashcount(crash) {
  const canvasRef = useRef(null);
  const [multiplier, setMultiplier] = useState(1);
  const [labels, setLabels] = useState([0,2,4,6,8,10,12,14,16,18,20]);
  const [data, setData] = useState({
    datasets: [{
      data: [1.2,1.4,1.6,1.8,2.0,2.2,2.4,2.6,2.8,3.0,3.2],
      borderColor: "white"
    }]
  });

  useEffect(() => {
    let intervalId = setInterval(() => {
      setMultiplier(prevMultiplier => prevMultiplier + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setLabels([0,2,4,6,8,10,12,14,16,18,20].map(label => label * multiplier));
    setData({
      datasets: [{
        data: [1.2,1.4,1.6,1.8,2.0,2.2,2.4,2.6,2.8,3.0,3.2].map(value => value * multiplier),
        borderColor: "white"
      }]
    });
  }, [multiplier]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    let startTime = null;
    let strokeLength = 0

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = elapsed / 20000;


      strokeLength = progress * Math.sqrt(width ** 2 + height ** 2);

      ctx.clearRect(0, 0, width, height); //clear canvas each time a line is drawn.
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.bezierCurveTo(
        width * 0.25,
        height * 0.75,
        width * 0.75,
        height * 0.25,
        strokeLength,
        0
      );
      ctx.lineWidth = "2";
      ctx.strokeStyle = "#FFEB73";
      ctx.stroke();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        }
      },
    }
  }
  
  return (
    <div className="crashcount-container-cover">
      <div className="crashcount-container">
        <h1>{crash.crash}</h1>
        <h3>&#10006;</h3>
      </div>

      <div className="lineCrash">
      <Line className="chartLine" data={{ labels, datasets: data.datasets }} options={options}>
        <canvas id="animate-lineCrash" ref={canvasRef} fill="none" width="580" height="360" opacity="1" viewBox="35 80 800 550" />
      </Line>

      </div>
    </div>
  );
}