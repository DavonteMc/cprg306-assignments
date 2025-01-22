export default function Item({ name, quantity, category }) {
  return (
    <li className="text-xl font-bold bg-slate-900 p-2 my-4 w-15 m-10 ">
      {name}
      <li className="font-normal">
        Buy {quantity} in {category}
      </li>
    </li>
  );
}
