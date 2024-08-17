import { Helmet } from "react-helmet-async";
import UseMyToast from "../../Components/UseMyToast";
import useMyToast from "../../Hooks/useMyToast";
import { useLoaderData } from "react-router-dom";
import CardComponent from "../../Components/CardComponent";
import BannerSlider from "../../Components/BannerSlider";




const Home = () => {
  const cards = useLoaderData()
  const Toast = useMyToast();
  Toast("Logged in Successfully");

  return (
    <div>
      <Helmet>
        <title>Harmony Homes | Home</title>
      </Helmet>
      <UseMyToast />
      <BannerSlider></BannerSlider>


    
    <div className="text-center text-[5vw] bg-[#f6f3f3] pt-[2vw]">Estates</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around bg-[#f6f3f3] py-[5vw]">
    {
      cards.map(card => <CardComponent key={card.id} card={card}></CardComponent>)
    }
    
    </div>

    </div>
  );
};

export default Home;
