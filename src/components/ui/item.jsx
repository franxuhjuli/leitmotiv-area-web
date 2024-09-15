
export function Item (props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2 px-2 py-2 bg-white text-teal-700 rounded-md">{props.icon}</div>
      <p className="font-medium">{props.text}</p>
      <p>{props.subtext}</p>
    </div>
  );
}
