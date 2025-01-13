import React from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';

const About = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <Heading
          tag="Om DokuDok"
          title="Vores historie og mission"
          text="Vi kombinerer passion for teknologi og sundhed med et mål om at skabe reelle forbedringer for læger, klinikker og patienter."
        />
        
        <div className="mt-10 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">Hvilket problem vil vi løse?</h3>
            <p className="text-gray-600">
              Læger og sundhedspersonale bruger op til 40% af deres tid på administrative opgaver som journalføring og dokumentation. Dette skaber stress og reducerer deres tid med patienter. Mange oplever at tage arbejdet med hjem, hvilket går ud over deres arbejdsglæde og livskvalitet.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">Vores løsning</h3>
            <p className="text-gray-600">
              Med DokuDok skaber vi AI-drevne værktøjer, der automatiserer dokumentationsarbejdet, så læger og sundhedspersonale kan fokusere på det, der virkelig betyder noget – deres patienter. Vi tilbyder transskription, journaludkast, attestudkast og informationssøgning i en samlet, brugervenlig platform.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">Hvad driver os?</h3>
            <p className="text-gray-600">
              DokuDok blev født ud af en dyb forståelse for, hvordan dokumentationskrav påvirker hverdagen i sundhedssektoren. Vi så begge vores forældre, der arbejder inden for almen medicin, kæmpe med den tunge dokumentationsbyrde. Givet vores unikke position som AI-ingeniører med en baggrund i IT-sikkerhed, så vi vores snit til at skabe en løsning, der kunne hjælpe dem og andre i sundhedssektoren.
            </p>
            <p className="text-gray-600 mt-4">
              Vores mål er at forbedre folkesundheden ved at hjælpe læger med at bruge deres tid og energi der, hvor de gør den største forskel: hos patienterne. Vi brænder for teknologi og innovation, men endnu mere for at løse reelle problemer og skabe en positiv indvirkning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">Vores vision</h3>
            <p className="text-gray-600">
              Vi ønsker at være en drivkraft i at revolutionere sundhedssektoren ved at gøre dokumentation til en problemfri og effektiv proces. Vores vision er at give sundhedsprofessionelle værktøjer, der sparer tid, forbedrer arbejdsglæde og sikrer højere kvalitet i patientplejen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">Vores team</h3>
            <p className="text-gray-600">
              Bag DokuDok står Johan og Andreas – to ingeniører med en passion for AI og softwareudvikling. Vores personlige relationer til sundhedssektoren, kombineret med vores tekniske baggrund, giver os en unik forståelse af brugernes behov. Sammen med sundhedsfaglige eksperter arbejder vi på at skabe løsninger, der gør en reel forskel.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">Datasikkerhed og compliance</h3>
            <p className="text-gray-600">
            Vi er stolte af at levere innovative løsninger, der opfylder de højeste standarder inden for datasikkerhed og GDPR-compliance. Fra krypteret datatransmission til avancerede anonymiseringsprocedurer sikrer vi, at brugernes data altid behandles med den største omhu. Med over 7 års erfaring inden for IT-sikkerhed gennem vores arbejde hos SecureDevice, et af Danmarks førende IT-sikkerhedsselskaber, er cybersikkerhed en kerneværdi og fundamentet for vores tilgang til løsninger i sundhedssektoren.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
