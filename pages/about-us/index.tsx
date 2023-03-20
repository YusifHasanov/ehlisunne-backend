import Footer from '@/src/components/footer/Footer'
import Head from 'next/head'
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className=' ' >
        <Head><title>Haqqımızda</title></Head>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl text-center font-bold leading-9 dark:text-gray-300 text-gray-800 pb-4">Biz kimik?</h3>
              <p className="font-normal text-base leading-6 dark:text-gray-300 text-gray-600 ">
                Allaha iman edən bir kimsə, şübhəsiz, Onu sevir, çünki imanı ilə bilir ki, hər şeyi Allah xəlq etmiş, özünü və bütün sevdiklərini yoxluqdan var etmiş, onu hədsiz nemətlərlə təmin etmişdir. Həmçinin cənnəti əbədi olaraq ona və bütün möminlərə vəd etmişdir.

                Belə uca, mərhəmətli bir yaradıcını tanıyan, əlbəttə, Onu bütün qəlbi ilə sevəcəkdir. Məhz möminlərin Allah sevgisinə Quran belə işarə edir: “Allah onları sevər, onlar da Allahı sevərlər.” (Maidə, 54). Allahı sevən bir insanın onun rizasını və sevgisini qazanmağa çalışması lazımdır.

                Biz də – bir qrup mömin Əhli-Sünnə bayrağı altında toplaşaraq Allahın pak dinini insanlara çatdırmağa çalışırıq. Bu layihəmizin adı da “Əhli-Sünnə Mədrəsəsi”dir.

                Bu layihə qədim üsula bağlı qalaraq batil firqələrə qarşı sipər, bilgisizlərə çıraq, ruhən ölənlərə nəfəs niyyəti ilə Allah üçün xidmətdədir. Çalışmaq bizdən, müvəffəqiyyət Allahdandır!
              </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-bold leading-9 dark:text-gray-300 text-gray-800 pb-4 text-center">Xocalarımız</h4>
              <p className="font-normal text-base leading-6 dark:text-gray-300 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://pbs.twimg.com/profile_images/1587100276779106304/pcjfzYNO_400x400.jpg" alt="Alexa featured Img" />
                  <img className="md: hidden block" src="https://pbs.twimg.com/profile_images/1587100276779106304/pcjfzYNO_400x400.jpg" alt="Alexa featured Img" />
                  <p className="font-medium text-xl leading-5 dark:text-gray-300  text-gray-800 mt-4">Firudin Babaoğlu</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ytimg.com/vi/1fN_4ED8IYk/maxresdefault.jpg" alt="Olivia featured Img" />
                  <img className="md:hidden block" src="https://i.ytimg.com/vi/1fN_4ED8IYk/maxresdefault.jpg" alt="Olivia featured Img" />
                  <p className="font-medium text-xl leading-5 dark:text-gray-300 text-gray-800 mt-4">Ramazan Heydərov</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                  <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                  <p className="font-medium text-xl leading-5 dark:text-gray-300 text-gray-800 mt-4">Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                  <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                  <p className="font-medium text-xl leading-5 dark:text-gray-300 text-gray-800 mt-4">Elijah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs


