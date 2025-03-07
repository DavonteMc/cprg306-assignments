export default function Item({ id, name, quantity, category }) {
    // let { name, quantity, category } = props
  
    return (
      <li key={id} className="text-xl font-bold bg-slate-900 mb-3 p-3">
        {name}
        <p className="text-sm font-normal">
          Buy {quantity} in {category}
        </p>
      </li>
    );
}
