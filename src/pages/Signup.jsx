import Section from "../components/Section";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const Signup = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [isLoadingIp, setIsLoadingIp] = useState(true);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
      } finally {
        setIsLoadingIp(false);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <Section className="overflow-hidden">
      <div className="container">
        <div className="max-w-[640px] mx-auto">
          <h1 className="h1 mb-6 text-center">Start din gratis prøveperiode</h1>
          <p className="text-n-4 text-lg text-center mb-12">
            Prøv DokuDok gratis i 14 dage - ingen binding eller kreditkort påkrævet
          </p>
          
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-n-4 text-sm mb-2">Fornavn</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-n-3 focus:outline-none focus:border-[#1E9AFC]"
                  placeholder="Dit fornavn"
                />
              </div>
              <div className="flex-1">
                <label className="block text-n-4 text-sm mb-2">Efternavn</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-n-3 focus:outline-none focus:border-[#1E9AFC]"
                  placeholder="Dit efternavn"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-n-4 text-sm mb-2">Klinik navn</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-n-3 focus:outline-none focus:border-[#1E9AFC]"
                placeholder="Din kliniks navn"
              />
            </div>
            
            <div>
              <label className="block text-n-4 text-sm mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-n-3 focus:outline-none focus:border-[#1E9AFC]"
                placeholder="din@email.dk"
              />
            </div>
            
            <div>
              <label className="block text-n-4 text-sm mb-2">Telefon</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-lg border border-n-3 focus:outline-none focus:border-[#1E9AFC]"
                placeholder="+45 12 34 56 78"
              />
            </div>

            <div className="relative">
              <label className="block text-n-4 text-sm mb-2 flex items-center gap-2">
                IP Adresse
                <div className="group relative">
                  <span className="cursor-help text-n-4 text-sm">ℹ️</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-n-6 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                    Påkrævet for at whiteliste din kliniks adgang.{" "}
                    <a 
                      href="https://whatismyipaddress.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#1E9AFC] hover:underline"
                    >
                      Find din IP her
                    </a>
                  </div>
                </div>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-n-3 focus:outline-none focus:border-[#1E9AFC]"
                  placeholder={isLoadingIp ? "Henter IP adresse..." : "f.eks. 192.168.1.1"}
                  pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
                  title="Indtast en gyldig IP-adresse (f.eks. 192.168.1.1)"
                />
                {isLoadingIp && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1E9AFC]"></div>
                  </div>
                )}
              </div>
              <div className="space-y-1 mt-1">
                <p className="text-xs text-n-4">Din IP-adresse er påkrævet for at sikre sikker adgang til platformen</p>
                {!isLoadingIp && ipAddress && (
                  <p className="text-xs text-[#1E9AFC]">
                    ✓ Vi har automatisk hentet din IP adresse. Bemærk at services kun kan bruges på pågældende IP adresse.
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-4">
              <Button className="w-full">Start din gratis prøveperiode</Button>
            </div>
            
            <p className="text-n-4 text-sm text-center mt-4">
              Ved at oprette en konto accepterer du vores{" "}
              <a href="#" className="text-[#1E9AFC] hover:underline">
                Vilkår og betingelser
              </a>
              {" "}og{" "}
              <a href="#" className="text-[#1E9AFC] hover:underline">
                Privatlivspolitik
              </a>
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Signup; 