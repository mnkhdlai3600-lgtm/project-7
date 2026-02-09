import { MapPin, ChevronRight, ShoppingCart, User } from "lucide-react";

function Header() {
  return (
    <div className="bg-black w-screen h-17 flex px-35 justify-between items-center">
      <div className="flex gap-4">
        <img className="h-11.5" src="icon.png" alt="" />
        <div>
          <div className="text-white text-[20px] flex text-center font-semibold">
            <p>Nom</p>
            <span className="text-red-500">Nom</span>
          </div>
          <p className="text-white text-[12px]">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-3.25">
        <div className="relative flex items-center">
          <input
            className="peer bg-white w-62.75 h-9 rounded-full focus:outline-none pl-3"
            type="text"
            name=""
            placeholder=""
          />

          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[12px] pointer-events-none w-full peer-focus:hidden">
            <MapPin className="text-red-500 w-5 h-5" />
            <p className="text-red-500 font-medium whitespace-nowrap flex gap-1">
              Delivery address:
              <span className="text-gray-400">Add Location</span>
            </p>
            <ChevronRight className="text-gray-400 w-5 h-5" />
          </div>
        </div>
        <button className="w-9 h-9 flex justify-center items-center rounded-full bg-white">
          <ShoppingCart className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 flex justify-center items-center rounded-full bg-red-500">
          <User className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
