import CategoryItem from "./CategoryItem";

export default function Category() {
  return (
    <div className="w-full flex items-center mx-0 mt-6 mb-6">
      <CategoryItem name="Song" />
      <CategoryItem name="Author" />
      <CategoryItem name="Kind of Musics" />
    </div>
  );
}
