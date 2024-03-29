import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../core/components";

export const AboutModule: FC = (): JSX.Element => {
     const navigate = useNavigate();

     return (
          <div className="bg-white px-8 sm:px-40 py-16 sm:py-44">
               <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="w-full">
                         <p className="text-emerald-500 text-base sm:text-xl font-medium tracking-wide sm:tracking-wider mb-4 sm:mb-6">
                              About Our Foundetion
                         </p>
                         <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-6 sm:mb-12 w-full">
                              जय साई पदयात्री मित्र मंडळ नालासोपारा या मंडळाची स्थापना 2001 साली, श्री पंकज निसर (साई
                              सेवक) (संस्थापक) यांनी केली.
                         </h1>
                         <p className="text-sm sm:text-base text-gray-500 tracking-normal sm:tracking-wide font-light leading-7 mb-5 sm:mb-10">
                              गुढीपाडवा ते श्री राम नवमी हा पदयात्री सोहळा उपक्रम त्यांनी चालू केला आणि त्यांच्या या
                              उपक्रमाला अनेक साईभक्तांनी, रहिवाशांनी, कित्येक लोकांनी साथ दिले आज या मंडळाला 24 वर्षे
                              पूर्ण होणार असून मंडळ अनेक समस्या मधून पुढे वाटचाल करीत आहे.
                         </p>
                         <p className="text-sm sm:text-base text-gray-500 tracking-normal sm:tracking-wide font-light leading-7 mb-5 sm:mb-12">
                              सर्व अटी नियमानुसार सर्व पदयात्रिना श्री क्षेत्र शिर्डी येथे रामनवमीनिमित्त, हजारो साई
                              भक्त चालत जाताना आपल्याला या 24 वर्षात बघायला मिळाले. अनेक संकट आले, पण त्या संकटांना तोड
                              देत मंडळ प्रगती पथावर आहे. मंडळाचे अध्यक्ष, उपाध्यक्ष, खजिनदार आणि कार्यकरी यांच्या
                              मार्गदर्शनाने हे मंडळ सामाजिक उपक्रम ही राबवितात.
                         </p>
                         <div className="sm:block hidden">
                              <Button value="About US" onClick={() => navigate("/about")} />
                         </div>
                         <div className="sm:hidden block">
                              <Button value="About US" onClick={() => navigate("/about")} sm />
                         </div>
                    </div>
                    <div className="relative w-full bg-white sm:block hidden">
                         <div className="flex flex-col items-end">
                              <img src="./images/about1.jpg" alt="about-1" className="w-96" />
                         </div>
                         <div className="absolute -bottom-8 left-28">
                              <img
                                   src="./images/about2.jpg"
                                   alt="about-2"
                                   className="w-64 border-r-[14px] border-t-[14px] border-emerald-500"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};
