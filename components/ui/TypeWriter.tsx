"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  strings,
  typeSpeed = 78,
  deleteSpeed = 44,
  pauseDuration = 1900,
}: TypeWriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === currentString) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        } else {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentStringIndex, strings, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <div className="flex items-center gap-2 text-lg md:text-xl text-text-secondary">
      <span>{currentText}</span>
      <span className="inline-block w-[3px] h-5 bg-gradient-to-b from-[#ff6b35] to-[#f7931e] animate-pulse" />
    </div>
  );
}
