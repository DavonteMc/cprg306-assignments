export default function Item({ id, name, quantity, category }) {
    // let { name, quantity, category } = props
  
    return (
      <li key={id} className="text-xl text-white font-bold bg-slate-900 m-4 p-2">
        {name}
        <p className="text-sm font-normal">
          Buy {quantity} in {category}
        </p>
      </li>
    );
}
