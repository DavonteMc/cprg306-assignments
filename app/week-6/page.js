import ItemList from "./item-list";

export default function Page() {
  return (
    <body className="bg-indigo-950">
      <main className="m-4 items-center text-white bg-indigo-950">
        <h1 className="text-3xl font-bold p-2">Shopping List</h1>
        <div className="w-2/5 bg-gray-800 p-4">
            <ItemList />
        </div>
      </main>
    </body>
  );
}

