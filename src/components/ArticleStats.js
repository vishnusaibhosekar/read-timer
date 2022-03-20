import React, { useMemo } from 'react';

function getReadingTime(text) {
  const numberOfWords = text.split(' ').length;
  const letters = text
    .split('')
    .filter((l) => l !== ' ')
    .reduce((acc, letter) => acc + 1, 0);
  const averageWordLength = letters / numberOfWords;
  const approximateWords = letters / averageWordLength;
  const totalMinutes = approximateWords / 238;

  for (let i = 0; i < 100000000; i++) {
    // contrived work
    Math.random();
  }

  if (totalMinutes > 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes - hours * 60);
    return `${hours} hours, ${minutes} minutes`;
  } else if (totalMinutes > 1) {
    return `${Math.floor(totalMinutes)} minutes`;
  } else {
    return `Less than a minute`;
  }
}

export function ArticleStats({ showExplanation, text, transformer }) {
  // slow
  const readingTime = getReadingTime(text);

  // fast
  // const readingTime = useMemo(() => getReadingTime(text), [text]);

  return (
    <div>
      {showExplanation && (
        <p>On average, people can read 238 words per minute.</p>
      )}
      <p>
        <strong>Reading time:</strong>
      </p>
      <p>{readingTime}</p>
    </div>
  );
}
