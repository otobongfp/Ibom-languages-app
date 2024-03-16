import { stadium } from "../assets/images";

const About = () => {
  return (
    <div className="h-[80vh] overflow-y-auto">
      <div className="mx-4 bg-white rounded shadow h-full max-h-full">
        <p className="m-4 pt-4 text-[2rem]">About</p>
        <div className="m-4 grid lg:grid-cols-12 gap-4 md:gap-10">
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
          </div>
          <div className="col-span-6 ">
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
