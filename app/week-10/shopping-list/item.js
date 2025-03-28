export default function Item({ id, name, quantity, category, onIngrdntSelection }) {
    const cleanName = () => {
      const newName = name.match(/^([^,0-9]+?)(?=\s*[,0-9]|\s*\p{Emoji})/u);
      return newName ? newName[0].trim().replace(/\s/g, "_") : name; ;
    };

  return (
    <button
      key={id}
      className="text-xl flex-col place-items-start font-bold bg-slate-900 w-full mb-3 p-3 rounded-xl hover:bg-indigo-600"
      onClick={() => onIngrdntSelection(cleanName())}
    >
      <li className="ml-4">{name}</li>
      <p className="ml-4 text-sm font-normal">
        Buy {quantity} in {category}
      </p>
    </button>
  );
}
