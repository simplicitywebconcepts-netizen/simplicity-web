import React from 'react';

export function renderGradientTitle(title: string | undefined | null) {
  if (!title) return null;
  const words = title.trim().split(/\s+/);
  if (words.length <= 2) {
    return <span className="gradient-text">{title}</span>;
  }
  const splitIndex = Math.max(1, words.length - 2);
  const mainText = words.slice(0, splitIndex).join(' ');
  const gradientText = words.slice(splitIndex).join(' ');
  return (
    <>
      {mainText}{' '}
      <span className="gradient-text">{gradientText}</span>
    </>
  );
}
