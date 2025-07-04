import React from "react";
import { Link, Outlet } from "react-router";
import image1 from "../../pages/category/img category/Frame 5.png";
import image2 from "../../pages/category/img category/Frame 37477.svg";
import { useTranslation } from "react-i18next";

const Layout = () => {
  let { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <header className="absolute z-50 w-full">
        <div className="w-[93%] m-auto flex items-center justify-between p-[25px]">
          <img src={image1} alt="" />

          <div className="flex items-center gap-[35px]">
            <details>
              <summary>{t("Example.1")}</summary>
              <Link to={"/"}>
                <p>Sobir</p>
              </Link>
              <Link to={"/home2"}>
                <p>sobir2</p>
              </Link>
            </details>
            <details>
              <summary>{t("Example.2")}</summary>
              <Link to={"/about"}>
                <p>Rahmatjon</p>
              </Link>
              <Link to={"/about2"}>
                <p>Rahmatjon2</p>
              </Link>
            </details>
            <details>
              <summary>{t("Example.3")}</summary>
              <Link to={"/catalog"}>
                <p>Azam</p>
              </Link>
              <Link to={"/catalog2"}>
                <p>Azam2</p>
              </Link>
            </details>
            <details>
              <summary>{t("Example.4")}</summary>
              <Link to={"/contact"}>
                <p>Nozina</p>
              </Link>
              <Link to={"/contact2"}>
                <p>Nozina2</p>
              </Link>
            </details>
            <details>
              <summary>{t("Example.5")}</summary>
              <Link to={"/main"}>
                <p>Yoqub</p>
              </Link>
              <Link to={"/main2"}>
                <p>Yoqub2</p>
              </Link>
            </details>
            <details>
              <summary>{t("Example.6")}</summary>
              <Link to={"/category"}>
                <p>Fahim</p>
              </Link>
              <Link to={"/category2"}>
                <p>Fahim2</p>
              </Link>
            </details>
          </div>

          <div>
            <button className="bg-[#C31E26] text-white font-bold px-[30px] py-[8px] rounded-xl">
              {t("Example.7")}
            </button>
          </div>

          <details>
            <summary>🌐 </summary>
            <div className="flex flex-col items-center gap-[10px]">
              <button
                onClick={() => TranslateClick("ru")}
                className=" w-[45px]"
              >
                Ru
              </button>
              <button
                onClick={() => TranslateClick("en")}
                className=" w-[45px]"
              >
                En
              </button>
            </div>
          </details>
        </div>
      </header>
      <main> 
        <Outlet />
      </main>
      <footer>
        <div className="bg-[#FFC62B] text-[#1B1B1B] py-[85px]">
          <div className="w-[93%] m-auto flex items-center justify-between">
            <h1 className="text-[40px] font-[500] w-[780px]">
              {t("Example.8")}
            </h1>
            <div className="flex flex-col items-start gap-[10px] w-[500px]">
              <p className="text-[#070707] font-[500]">{t("Example.9")}</p>
              <button className="bg-[#C31E26] text-white font-[500] px-[35px] py-[7px] rounded-xl">
                See More
              </button>
            </div>
          </div>

          <div className="w-[95%] m-auto flex items-center justify-between mt-[55px] ">
            <div className="flex flex-col items-start gap-[25px]">
              <div className="bg-gradient-to-r from-[#e0cda5] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#C31E26] text-[22px] font-[600]">
                    {t("Example.11")}
                  </h2>
                  <p className="text-[#C31E26] font-[500]">{t("Example.12")}</p>
                </div>
                <button className="bg-[#C31E26] font-bold text-white px-[10px] py-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#ffac06] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#1B1B1B] text-[22px] font-[600]">
                    {t("Example.13")}
                  </h2>
                  {/* <p>{t('Example.12')}</p> */}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#ffac06] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#1B1B1B] text-[22px] font-[600]">
                    {t("Example.14")}
                  </h2>
                  {/* <p>{t('Example.12')}</p> */}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#ffac06] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#1B1B1B] text-[22px] font-[600]">
                    {t("Example.15")}
                  </h2>
                  {/* <p>{t('Example.12')}</p> */}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#ffac06] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#1B1B1B] text-[22px] font-[600]">
                    {t("Example.16")}
                  </h2>
                  {/* <p>{t('Example.12')}</p> */}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#ffac06] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#1B1B1B] text-[22px] font-[600]">
                    {t("Example.17")}
                  </h2>
                  {/* <p>{t('Example.12')}</p> */}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gradient-to-r from-[#ffac06] to-[#ebb00f] text-[#1B1B1B] w-[625px]  flex rounded-xl justify-between items-center p-[25px]">
                <div>
                  <h2 className="text-[#1B1B1B] text-[22px] font-[600]">
                    {t("Example.18")}
                  </h2>
                  {/* <p>{t('Example.12')}</p> */}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <img
              className="w-[650px] rounded-xl h-[750px]"
              src={`data:image/jpeg;base64,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`}
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#070707] py-[55px]">
          <div className="w-[95%] m-auto flex flex-col items-center gap-[50px]">
            <h1 className="text-white text-[40px] text-center">
              {t("Example.19")}
            </h1>

            <div className="flex items-center ">
              <img
                className="w-[320px] h-[280px] rounded-xl relative z-[0] rotate-[-10deg]"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s`}
                alt=""
              />
              <img
                className="w-[385px] h-[380px] rounded-xl z-10"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
                alt=""
              />
              <img
                className="w-[320px] h-[280px] rounded-xl rotate-[10deg]"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s`}
                alt=""
              />
            </div>

            <p className='font-[500] text-white text-[22px] text-center' >Sarah Hamilton</p>

<div className='flex text-white items-center gap-[25px]'>
  <button className='border px-[15px] py-[15px] rounded-full font-bold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg></button>
  <button className='border px-[15px] py-[15px] rounded-full font-bold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
</div>



          </div>

    

    </div>


    <div className="w-[95%] m-auto bg-[#070707] text-white p-[25px] mb-[50px] rounded-xl mt-[70px] flex justify-between">
      <div className="flex flex-col items-start justify-between ">
        <img src={image1} alt="" />
        <p className="w-[270px] font-[500]">{t('Example.20')}</p>
        <p className="w-[355px] font-[500]">{t('Example.21')}</p>
        <div className="bg-[#5f5f5f] w-[300px] flex justify-between items-center rounded-xl p-[8px]">
        <p>{t('Example.22')}</p>
          <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
        </div>
        <p className="w-[280px] font-[500]">{t('Example.23')}</p>
      </div>

      <div className="flex flex-col items-end gap-[45px]">
        <img src={image2} alt="" />
        <div className="flex items-center gap-[95px]">
          <div className="flex flex-col items-start gap-[15px]">
          <p className="text-[23px] font-[500]">{t('Example.24')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
          <p className="text-[23px] font-[500]">{t('Example.25')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
          <p className="text-[23px] font-[500]">{t('Example.26')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          <p className="text-[#575757] font-[500]">{t('Example.27')}</p>
          </div>
        </div>
        <div className="flex items-center gap-[40px]">
          <p>{t('Example.28')}</p>
          <p>{t('Example.29')}</p>
          <p>{t('Example.30')}</p>
        </div>
      </div>

        </div>

    </footer>
    </div>
  );
};

export default Layout;
