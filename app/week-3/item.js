export default function Item({ name, quantity, category }) {
  // let { name, quantity, category } = props

  return (
    <li className="text-xl font-bold bg-slate-900 m-4 p-2">
      {name}
      <li className="text-sm font-normal bg-zinc-800">
        Buy {quantity} in {category}
      </li>
    </li>
  );
}
