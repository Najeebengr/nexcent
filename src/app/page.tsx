import Pricing from "./views/Pricing";
import Banner from "./views/Banner";
import BlogList from "./views/BlogList";
import Community from "./views/Community";
import Feature from "./views/Feature";
import Feedback from "./views/Feedback";
import Secure from "./views/Secure";

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <Feature single={false}/>
      <Community single={false}/> 
      <Secure />
      <Feedback single={false}/>
      <BlogList single={false} />
      <Pricing single={false} />
    </main>
  );
}
