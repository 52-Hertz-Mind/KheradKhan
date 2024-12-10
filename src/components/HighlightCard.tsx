interface HighlightCardData {
  id: string;
  highlight: string;
}

function HighlightCard({ id, highlight }: HighlightCardData) {
  return (
    <div
      className="size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
      key={id}
    >
      <p>{highlight}</p>
    </div>
  );
}

export default HighlightCard;
