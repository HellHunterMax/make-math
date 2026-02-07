"use client";

import { Dispatch, SetStateAction, useState, useEffect } from "react";

export type questionWithNumberInputProps = {
  question: string;
  initial: number;
  setAnswer: Dispatch<SetStateAction<number | null>>;
  max: number;
  min: number;
};

export default function QuestionWithNumberInput(props: questionWithNumberInputProps) {
  const [displayValue, setDisplayValue] = useState(String(props.initial));

  useEffect(() => {
    setDisplayValue(String(props.initial));
  }, [props.initial]);

  function onChangeInput(value: string) {
    const num = Number.parseInt(value, 10);
    if (Number.isNaN(num)) {
      props.setAnswer(null);
      setDisplayValue("");
      return;
    }
    const clamped = Math.min(props.max, Math.max(props.min, num));
    props.setAnswer(clamped);
    setDisplayValue(String(clamped));
  }
  return (
    <div className="p-4 flex flex-col bg-white shadow-md rounded-xl bg-clip-border w-full">
      <p>{props.question}</p>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        value={displayValue}
        onChange={(e) => onChangeInput(e.target.value)}
      />
    </div>
  );
}
