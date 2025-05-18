export default function InformationCard() {
  const testInformation = {
    Id: "test_123",
    Description: "Testatakseen ohtu-kurssia",
    Lang: "fi",
    "Created at": "1.1.2011",
  };

  const assitantProfile = {
    Id: "asst_123",
    Name: "ohtu-assistant",
    Description: "Ohtu-kurssin assistentti",
    Instructions:
      "Olen ohtu-kurssin assistentti, joka auttaa opiskelijoita kurssilla.",
    tools: ["rag.semantic", "rag.info"],
  };

  const retrievalScoreAnalysis = {
    Accuracy: 0.9,
    Precision: 0.8,
    Recall: 0.7,
  };

  const generationScoreAnalysis = {
    "LLM-evaluated score": 0.85,
    "Self-evaluated score": 0.75,
  };

  return (
    <div className="flex flex-row bg-zinc-700 py-9 mt-10">
      <div className="flex-1 px-10 flex flex-col gap-8">
        <div>
          <h3>Test information</h3>
          <div className="flex flex-col gap-1">
            {Object.entries(testInformation).map(([key, value]) => (
              <div key={key} className="flex flex-row gap-2">
                <p className="font-bold text-lime-300">{key}:</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Assistant profile</h3>
          <div className="flex flex-col gap-1">
            {Object.entries(assitantProfile).map(([key, value]) => (
              <div key={key} className="flex flex-row gap-2">
                <p className="font-bold text-orange-300">{key}:</p>
                <p>{typeof value === "string" ? value : value.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 px-10 flex flex-col gap-8 border-l border-zinc-600">
        <div>
          <h3>Retrieval score analysis (avg)</h3>
          <div className="flex flex-row gap-4 mt-3">
            {Object.entries(retrievalScoreAnalysis).map(([key, value]) => (
              <div
                key={key}
                className="min-w-36 flex flex-col gap-2 bg-zinc-600 p-4 rounded-lg"
              >
                <p className="font-bold text-purple-300">{key}</p>
                <p className="font-bold text-2xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Generation score analysis (avg)</h3>
          <div className="flex flex-row gap-4 mt-3">
            {Object.entries(generationScoreAnalysis).map(([key, value]) => (
              <div
                key={key}
                className="min-w-36 flex flex-col gap-2 bg-zinc-600 p-4 rounded-lg"
              >
                <p className="font-bold text-blue-300">{key}</p>
                <p className="font-bold text-2xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
