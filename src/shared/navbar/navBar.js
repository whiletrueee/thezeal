function Navbar() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let m = new Date();
    let w = new Date();
    let din = new Date();
    let year = new Date();
    let weekDay = day[w.getDay()];
    let month = months[m.getMonth()];


    return (
      <div className="mx-auto maxWidth">
      <div className="mt-2 flex justify-around items-center md:space-x-7 lg:space-x-12 mx-3 p-5">
        <div>
          <div className="border-2 border-black font-secondary text-sm lg:text-base p-5 font-semibold action912px">
            "All the News
            <br />
            That's Fit to Display "
          </div>
        </div>

        <div className="font-primary text-9xl flex justify-center items-center change986px">
          The Zeal
        </div>

        <div className="w-2/12 boder-2 flex flex-col justify-center items-center action912px">
          <div className="font-sans font-black text-sm md:text-base">Late Edition</div>
          <div className="font-secondary text-xs">
            "Today, abundant sunshine, a mild af ternoon, a light breeze, high
            66. To night, partly cloudy skies, low 51. To morrow, partly sunny,
            mild, high 63. Weather map appears on Page A20"
          </div>
        </div>

      </div>
      <div className="flex justify-around mx-9 mt-2 px-4 border-t-2 border-b-4 border-black py-1">
      <div className="text-sm">© 2021 The Zeal Company</div>
        <div className="font-secondary text-base flex justify-center items-center md:gap-6 lg:gap-12">
          <div className="cursor-pointer hover:text-gray-400">Health</div>
          <div className="cursor-pointer hover:text-gray-400">Business</div>
          <div className="cursor-pointer hover:text-gray-400">Entertainment</div>
          <div className="cursor-pointer hover:text-gray-400">Science</div>
          <div className="cursor-pointer hover:text-gray-400">Technology</div>
          <div className="cursor-pointer hover:text-gray-400">Sports</div>
        </div>
        <div className="flex justify-center items-center">
        <div className="">INDIA, {weekDay.toUpperCase()}, {month.toUpperCase()} {din.getDate()}, {year.getFullYear()}</div>
        </div>
      </div>
    </div>
    );
}
export default Navbar;