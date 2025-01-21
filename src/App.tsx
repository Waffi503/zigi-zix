import "./App.css";
import { Button } from "@/components/ui/button";
import Benefits from "./benefits";

function App() {
  return (
    <>
      <header>
        <div className="h-[100px] bg-green">
          <div className="mx-24 flex-row justify-between flex h-full items-center">
            <div className="h-full">
              <img src="./logo-zix.png" className="my-4" alt="logo" />
            </div>
            <div className="flex flex-row justify-between items-center ">
              <ul className="flex flex-row justify-between items-center gap-5">
                <li className="text-xl font-m">¿Qué es Zix?</li>
                <li className="text-xl">¿Cómo funciona?</li>
                <li className="text-xl ">Beneficios</li>
                <li>
                  <Button className=" px-10 py-4 text-xl" variant={"blue"}>
                    Puntos de recarga
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-black">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-20">
            <img src="./logo-zix-verde.png" alt="logo-zix" />
          </div>
          <div className="mt-10 text-center">
            <h1 className="text-green text-[75px]/[90px] font-black">
              Mové tu pisto con{" "}
              <span className="text-blue px-2 bg-green rounded-[40px]">
                WhatsApp
              </span>
            </h1>
            <p className="text-white text-[32px]/[32px] mt-10">
              Mandá, pagá, recibí pagos y juntá dinero al chilazo con tu
              WhatsApp.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-green rounded-[80px] mt-[464px]">
          <div className="relative w-[844px] h-[460px]">
            <div className="absolute z-10 -top-[456px] ">
              <img
                src="./phone.png"
                alt="celular"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute z-0 -top-[376px] -left-[257px]">
              <img src="./stars_black.png" alt="stars" />
            </div>
            <div className="absolute z-0 -bottom-[75px] -right-[122px]">
              <img src="./stars_green.png" alt="stars" />
            </div>
          </div>
          <div className="w-full z-10">
            <div className="flex flex-col bg-black mx-[100px] rounded-[40px] my-10 p-10 z-10">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-[68px]/[82px] font-bold text-white">
                    ZIX te permite
                  </p>
                </div>
                <div>
                  <Button className=" px-10 py-4 text-xl" variant={"blue"}>
                    Conocé el ZIX
                  </Button>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-10">
                <div className="flex flex-col justify-between   w-[374px] h-[482px] bg-blacklight rounded-[40px]">
                  <p className="text-green text-[40px]/[40px] font-bold p-5">
                    Recargar tu WhatsApp con ZIX
                  </p>
                  <div className="p-[10px]">
                    <img src="./zix/phone_money.png" alt="icon1" />
                  </div>
                </div>
                <div className="flex flex-col justify-between   w-[374px] h-[482px] bg-blue rounded-[40px]">
                  <div>
                    <p className="text-white text-[40px]/[40px] font-bold px-5 pt-5">
                      Pagar en Comercios
                    </p>
                    <p className="text-white text-[20px]/[24px] px-5 pt-[10px]">
                      Pagá en establecimientos habilitados usando tus ZIX.
                    </p>
                  </div>
                  <div className="p-[10px]">
                    <img src="./zix/receive.png" alt="icon1" />
                  </div>
                </div>
                <div className="flex flex-col justify-between   w-[374px] h-[482px] bg-blacklight rounded-[40px]">
                  <div>
                    <p className="text-green text-[40px]/[40px] font-bold px-5 pt-5">
                    Guardar y <br />
                    Retirar Dinero
                    </p>
                    <p className="text-gray text-[20px]/[24px] px-5 pt-[10px]">
                    Depositá efectivo en tu cuenta de ZIX y retiralo cuando lo necesités, en comercios participantes.
                    </p>
                  </div>

                  <div className="p-[10px]">
                    <img src="./zix/send_money.png" alt="icon1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
    </>
  );
}

export default App;
