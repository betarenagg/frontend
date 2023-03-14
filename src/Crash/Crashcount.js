import React, { useEffect, useRef } from "react";

export default function Crashcount(crash) {
  const canvasRef = useRef(null);
  const mobileCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = mobileCanvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas each time a line is drawn.

    // define the starting and ending points of the curve
    const startX = 4;
    const startY = 160;
    const endX = 300;
    const endY = 10;

    let startTime = null; // variable to store start time

       const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp; // set start time if not set
      }

      const progress = timestamp - startTime; // calculate elapsed time

      // create a line/path and start from bottom-left corner
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // calculate intermediate point based on elapsed time
      const currentX = startX + ((progress / 20000) * (endX - startX));
      const currentY = startY + ((progress / 20000) * (endY - startY));
      ctx.bezierCurveTo(startX, startY, 370, 180, currentX, currentY);

      // draw the stroke path
      ctx.closePath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "#FFEB73";
      ctx.stroke();

      // repeat animation until it reaches 50s
      if (progress < 20000) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate); // start animation
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas each time a line is drawn.

    // define the starting and ending points of the curve
    const startX = 4;
    const startY = 267;
    const endX = 530;
    const endY = 10;

    let startTime = null; // variable to store start time

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp; // set start time if not set
      }

      const progress = timestamp - startTime; // calculate elapsed time

      // create a line/path and start from bottom-left corner
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // calculate intermediate point based on elapsed time
      const currentX = startX + ((progress / 20000) * (endX - startX));
      const currentY = startY + ((progress / 20000) * (endY - startY));
      ctx.bezierCurveTo(startX, startY, 370, 180, currentX, currentY);

      // draw the stroke path
      ctx.closePath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "#FFEB73";
      ctx.stroke();

      // repeat animation until it reaches 50s
      if (progress < 20000) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate); // start animation
  }, []);
  
  return (
    <div className="crashcount-container-cover">
      <div className="crashcount-container">
        <h1>{crash.crash}</h1>
        <h3>&#10006;</h3>
      </div>
      <div className="lineCrash">
        <canvas id="animate-lineCrash" ref={canvasRef} fill="none" width="580" height="360" opacity="1" viewBox="35 80 800 550"></canvas>
      </div>
      <div className="lineCrash-mobile">
        <canvas ref={mobileCanvasRef} fill="none" width="580" height="360" opacity="1" viewBox="35 80 800 550"></canvas>
      </div>
    </div>
  );
}
