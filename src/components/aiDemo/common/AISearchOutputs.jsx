import React, { useState } from "react";

export default function AISearchOutputs(data) {
  const [AISearchOutputsData, setAISearchOutputsData] = useState(data.data);

  return (
    <div className="grid gap-y-6">
      {AISearchOutputsData.map((item, index) => (
        <div className="grid gap-y-3" key={index}>
          <div>
            <p className="text-xl">{item.title}</p>
          </div>
          <div className="flex gap-x-3">
            {item.options.map((child, childIndex) => (
              <a
                className="text-lg px-2 py-1 bg-white/[.1] rounded-md"
                href=""
                key={childIndex}
              >
                {child.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
