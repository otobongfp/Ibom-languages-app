import { stadium } from "../assets/images";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div className="h-[500px]">
      <div className="mx-4 bg-white rounded shadow h-full max-h-full">
        <p className="m-4 mt-4 text-[2rem]">About</p>
        <div className="m-4 grid md:grid-cols-12">
          <div className="col-span-6">
            <p>
              Using the best-of-breed cutting edge app development, artificial
              intelligence etc. we want to power local content, language
              learning, translation, name databases, native idioms/proverbs, and
              entertainment - comics, animated movies, apps & games, etc in at
              least Ibibio, Annang & Oro
            </p>
            <p>
              This current pipeline serves to help us gather the body of the
              language as a valid first step to help us build language models
              and other tools around the language while allowing researchers and
              other contributors to bring their experience to the fore as a
              means to get the Ibom native group of language available on a
              global stage for posterity and a means for serving local contents.
            </p>
            <ul className="mt-4">
              <Link>
                <li>
                  <FaGithub className="text-[24px]" />
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <div>
              <img src={stadium} className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
