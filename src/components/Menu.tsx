import MenuIcon from "./icons/Menu";
import ListIcon from "./icons/List";

export default function Menu() {
  return (
    <>
      <header className="bg-[#f3f4f6] w-screen h-[57px] absolute left-0 top-0"></header>
      <div className="*:p-[.25rem] bg-[#f3f4f6] h-screen absolute left-0 top-0 flex flex-col">
        <div className="border-r border-b border-gray-300">
          <MenuIcon />
        </div>
        <div className="grid place-items-center hover:cursor-pointer my-[1.5rem]">
          <ListIcon />
        </div>
      </div>
    </>
  );
}
