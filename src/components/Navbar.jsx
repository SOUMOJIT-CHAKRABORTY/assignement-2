import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <section className=''>
        <div className='flex justify-between mr-5 gap-5'>
          <h1>logo</h1>
          <div className='flex justify-between gap-4 font-semibold items-center'>
            <h2>Home</h2>
            <h2>Shop</h2>
            <h2>About</h2>
            <h2>Contact us</h2>
            <h2>Blogs</h2>
          </div>
            <div className="relative flex">
            <input type="text" className="rounded-[30px] bg-transparent border border-gray-600 px-4 text-gray-300 text-lg" placeholder="Search" />
            <span className="absolute right-3 top-3">
            <CiSearch />

            </span>
            </div>
          <div className='flex justify-between items-center space-x-8 ml-10'>
            <CiHeart size={30}/>
            <BsCart3 size={30} />
            <button className="px-8 py-3 bg-green-400 text-white font-semibold text-sm rounded-[20px]">Account</button>
          </div>
        </div>
      </section>
  )
}

export default Navbar