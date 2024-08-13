import Nav from "./components/Nav";
import { CustomerReviews, Services,SpecialOffer,Subscribe,SuperQuality,Footer,PopularProducts,Hero } from "./sections";


const App = () => (
    
    <main className="relative">
        <section>
            <Nav/>
        </section>
        
        <section className="xl:padding-l wide:padding-r padding-b"> 
            <Hero/>

        </section>
        <section className="padding">
            <PopularProducts/>
        </section>
        <section className="padding">
            <SuperQuality/>
        </section>
        <section className="padding-x py-10">
            <Services/>
        </section>
        <section className="sm:px-16 px-8 sm:py-24 py-12">
            <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
            <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
            <Footer/>
        </section>

    </main>
);
export default App