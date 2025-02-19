import ItemList from "./item-list";

export default function Page() {
  return (
    <body className="text-white bg-indigo-950">
      <main className="m-4 items-center">
        <h1 className="text-3xl font-bold p-2">Shopping List</h1>
        <div className="w-1/3">
            <ItemList />
        </div>
      </main>
    </body>
  );
}

