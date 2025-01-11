import { dokuLogo, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (

    // <Section crosses>
      <Section id="how-to-use">
      <div className="container lg:flex">
        <div className="max-w-[30rem]">
          <h2 className="h2 mb-4 md:mb-8">
          AI-assisteret journalføring for hurtigere og mere præcis dokumentation  
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button href="#contact" className="!bg-black hover:!bg-black !text-white font-semibold">Skriv dig op nu!</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {/* {collabText} */}
          </p>

          <div className="relative left-1/2 flex w-[20rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            {/* Logo container - centered vertically, right side */}
            <div className="absolute right-[-74px] top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <img
                src={dokuLogo}
                className="w-[60%] h-[60%] object-contain"
                alt="brainwave"
              />
            </div>

            {/* App icons circle */}
            <ul className="absolute inset-0">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    {/* </Section> */}
    </Section>
  );
};

export default Collaboration;
