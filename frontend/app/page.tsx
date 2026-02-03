import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import BackedBy from "./components/BackedBy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Form />
        <BackedBy />
      </main>
      <Footer />
    </>
  );
}
