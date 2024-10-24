import React, { useEffect, useRef } from "react";
import WordCloud from "wordcloud";

const WordCloudChart = ({ frequentWords }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    WordCloud(canvasRef.current, {
      list: frequentWords.map((word) => [word.keyword, word.count]),
      gridSize: 10,
      weightFactor: 5,
      color: "random-dark",
      rotateRatio: 0.5,
      rotationSteps: 2,
    });
  }, [frequentWords]);

  return <canvas ref={canvasRef} width={500} height={500}></canvas>;
};

export default WordCloudChart;
