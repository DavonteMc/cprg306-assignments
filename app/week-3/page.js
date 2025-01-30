import ItemList from "./item-list";

export default function Page() {
  return (
    <body className="text-white bg-slate-950 ">
      <main>
        <h1 className="text-3xl font-bold p-2">Shopping List</h1>
        <ItemList />
      </main>
    </body>
  );
}
