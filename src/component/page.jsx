import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";


export default function Page() {
    return (
        <div className="h-full w-full">
            <Header/>
               <main>
                  <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                     <Sidebar/>
                     
                  </div>
               </main>
            <Footer/>
        </div>
    );
}
