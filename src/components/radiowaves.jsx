import React, { useRef, useEffect } from 'react';

const RadioGraph = ({ color = 'yellow', lineWidth = 2, amplitudes = [40, 20, 10], periods = [100, 200, 400], speed = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    let currentPosition = 0;
    let currentPeriodIndex = 0;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw right border with intersecting lines
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.moveTo(canvasWidth, 0);
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.stroke();

      for (let y = 0; y < canvasHeight; y += 10) {
        const lineLength = Math.random() * 5 + 2;
        const lineWidth = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.moveTo(canvasWidth - lineLength, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }

      // Draw bottom border with intersecting lines
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight);
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.stroke();

      for (let x = 0; x < canvasWidth; x += 10) {
        const lineHeight = Math.random() * 5 + 2;
        const lineWidth = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.moveTo(x, canvasHeight);
        ctx.lineTo(x, canvasHeight - lineHeight);
        ctx.stroke();
      }

      // Draw wave
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;

      const halfHeight = canvasHeight / 2;
      const midPoint = canvasWidth / 2;
      const amplitude = amplitudes[currentPeriodIndex];
      const period = periods[currentPeriodIndex];

      ctx.moveTo(0, halfHeight);

      for (let x = 0; x < canvasWidth; x++) {
        const y = halfHeight + amplitude * Math.sin((x + currentPosition) * (2 * Math.PI / period));
        ctx.lineTo(x, y);
      }

      ctx.stroke();

      currentPosition += speed;

      if (currentPosition >= canvasWidth) {
        currentPosition = 0;
        currentPeriodIndex = (currentPeriodIndex + 1) % periods.length;
      }

      requestAnimationFrame(drawWave);
    };

    drawWave();
  }, [color, lineWidth, amplitudes, periods, speed]);

  return <canvas ref={canvasRef} width={300} height={200} />;
};

export default RadioGraph;