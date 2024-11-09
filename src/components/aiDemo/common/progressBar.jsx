import { useEffect, useState } from "react";

export default function ProgressBar({ progressData, postOutputValue }) {
  const [positiveProgress, setPositiveProgress] = useState(
    progressData.positiveProgress
  );
  const [neutralProgress, setNeutralProgress] = useState(
    progressData.neutralProgress
  );
  const [negativeProgress, setNegativeProgress] = useState(
    progressData.negativeProgress
  );

  const data = [
    {
      id: "Positive",
      percent: positiveProgress,
    },
    {
      id: "Neutral",
      percent: neutralProgress,
    },
    {
      id: "Negative",
      percent: negativeProgress,
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div className="grid gap-y-3" key={item.id}>
          <div className="relative h-1 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-white"
              style={{ width: `${item.percent}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>{item.id}</p>
            {/* <div className="flex-1 h-[1px] bg-white" /> */}
            <hr className="flex-1 mx-10" />
            <p className="min-w-[40px] text-right">
              {item.percent === undefined ? "0" : item.percent}%
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
