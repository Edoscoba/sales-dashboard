import { ChartColumnStacked, ChevronDown, DiamondPlus, Group, HandHelping, MessageCircleHeart, PackageSearch, Percent, Settings, SquareDashedKanban, X } from 'lucide-react'
import Logo from './Logo'
import profile from "../assets/profile.jpg"

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="toggle-sidebar" className="opacity-0 invinsible w-0 h-0 absolute top-[-999px] peer" />
      <aside className='fixed top-0 left-[-500px] lg:left-0 h-full min-h-screen w-full max-w-[400px] lg:w-[250px] bg-base p-4 border-bordercolor lg:border-r-2 flex flex-col items-stretch justify-between transition-all duration-500 peer-checked:left-0 z-50'>
        {/* Sidebar top start */}
        <div className="flex
        items-center justify-between">
          <Logo />
          <label htmlFor="toggle-sidebar" className="size-12 flex item-center justify-center rounded-full cursor-pointer p-2  hover:bg-secondary/50 lg:hidden">
            <X />
          </label>
        </div>
        {/* Sidebar top end */}
        {/* Sidebar middle start */}
        <div className="flex-1 mt-8 border-bordercolor border-b overflow-hidden overflow-y-auto">

          <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tcolor rounded-md bg-secondary">

            <Group />
            <h3 className="test-lg">Dashboard</h3>
          </a>

          <label >

            <input type="checkbox" className="opacity-0 invisible w-0 h-0 absolute top-[-999px] peer" />
            <div className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted hover:text-tcolor rounded-md hover:bg-secondary">
              <PackageSearch />
              <h3 className="text-lg">Products</h3>
              <div className="ml-auto">
                <ChevronDown />
              </div>
            </div>


            <div className="max-h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:max-h-[200px]">
              <div className="p-2">
                <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted rounded-md hover:text-primary">
                  <DiamondPlus />
                  <h3 className="test-sm">Add Products</h3>
                </a>
                <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted rounded-md hover:text-primary">
                  <SquareDashedKanban />
                  <h3 className="test-sm">Manage Products</h3>
                </a>
                <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted rounded-md hover:text-primary">
                  <Percent />
                  <h3 className="test-sm">Sales</h3>
                  <span className="ml-auto py-1 px-2 rounded-lg bg-primary text-white text-xs">New</span>
                </a>

              </div>

            </div>
          </label>

          <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted hover:text-tcolor rounded-md hover:bg-secondary">
            <MessageCircleHeart />
            <h3 className="test-lg">Chats</h3>
            <div className="ml-auto size-4 text-sm bg-red-600 text-white flex item-center justify-center rounded-full">
              8
            </div>
          </a>

          <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted hover:text-tcolor rounded-md hover:bg-secondary">
            <ChartColumnStacked />
            <h3 className="test-lg">Analytics</h3>
          </a>
        </div>
        {/* Sidebar middle end */}


        {/* Sidebar bottom start */}
        <div className="">
          <div className="my-4 border-b border-bordercolor">
            <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted hover:text-tcolor rounded-md hover:bg-secondary">
              <Settings />
              <h3 className="test-lg">settings</h3>
            </a>
            <a href="#" className="flex items-center gap-2 my-3 py-2 px-4 transition-all text-tmuted hover:text-tcolor rounded-md hover:bg-secondary">
              <HandHelping />
              <h3 className="test-lg">Help</h3>
            </a>
          </div>
          <div className="flex gap-4">
            <div className="size-8 overflow-hidden rounded-full">
              <img src={profile} alt="profile" />

            </div>
            <div className="">
              <h4 className="text-sm">Obi simon</h4>
              <p className="text-xs text-tmuted">Manager</p>
            </div>
            <div className="ml-auto transition-all text-tmuted hover:text-tcolor">
              <ChevronDown />
            </div>
          </div>
        </div>
        {/* Sidebar Bottom end  */}

      </aside>


    </>)

}
export default Sidebar

