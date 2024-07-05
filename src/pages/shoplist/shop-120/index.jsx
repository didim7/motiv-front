import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import MetaComponent from "@/components/common/MetaComponent";
import Shop120 from "@/components/shoplist/Shop120";
const metadata = {
  title: "Shop 120 ",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ShopPage120() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <Shop120 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
