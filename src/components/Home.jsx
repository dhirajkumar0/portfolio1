import profilePic from "../assets/img/profile-picture.jpg";
import Button from "./Button";
import Card from "./Card";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const Home = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="profile-pic">
          <img src={profilePic} alt="" />
        </div>
        <h6>Hi, I'm Omar</h6>
        <h1 className="g-color">
          building digital products, brands, and experience.
        </h1>
        <Button text="latest shots" icon={<BsArrowUpRight />} />
      </div>
      <section className="section">
        <div className="cards-container">
          <h3 className="g-color">
            Collaborate with brands and agencies to create impactful results.
          </h3>
          <div className="cards">
            {data.map((d) => (
              <Card key={d.title} title={d.title} text={d.text} icon={d.icon} />
            ))}
          </div>
        </div>
      </section>
      <div className="line"></div>
      <section className="section">
        <h1 className="g-color text">Tell me about your next project</h1>
        <Button
          text="Get in touch"
          icon={<AiOutlineMail style={{ fontSize: "20" }} />}
          href="mailto:Omar@gmail.com"
        />
      </section>
    </>
  );
};

export default Home;
