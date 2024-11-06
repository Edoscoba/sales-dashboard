import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Statistics from "./components/Statistics";
import Transactions from "./components/Transactions";
import User from "./components/User";

function App() {
  return (
    <>
      <Sidebar />
      <main className="grid grid-cols-1 md:grid-cols-[auto_300px] lg:pl-[250px]">
        {/* column 1 start */}
        <section className="p-4 md:pb-16">
          <Navbar />
          <Statistics />
          <Transactions />
        </section>
        {/* column  1 end */}
        {/* column 2 start */}
        <section className="p-4 pb-16 border-bordercolor lg:border-l-2">
          <User />
        </section>
        {/* column 2 end */}
      </main>
    </>
  );
}

export default App;
