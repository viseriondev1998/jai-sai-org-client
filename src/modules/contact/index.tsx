import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TfiMobile, TfiEmail } from "react-icons/tfi";
import { toast } from "react-toastify";

import { IUserContact } from "../../core/interface";
import { ContactInitialValues } from "../../validation";
import { useNewUserContactMutation } from "../../core/services";

import { Button, Input } from "../../core/components";

export const ContactModule: FC = () => {
     const [newContact, setNewContact] = useState<IUserContact>(ContactInitialValues);
     const navigate = useNavigate();

     const [NewUserContact, { data, error, isError, isSuccess, isLoading }] = useNewUserContactMutation();

     useEffect(() => {
          if (isError) {
               console.log(error);
          }

          if (isSuccess) {
               toast.success(data?.data || "Message sent successfully!");
               setNewContact(ContactInitialValues);
               navigate("/");
          }
     }, [isError, error, isSuccess, data, navigate]);

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setNewContact((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = async (e: any) => {
          e.preventDefault();
          const contactDoc: IUserContact = newContact;

          try {
               await NewUserContact(contactDoc);
          } catch (err) {
               toast.error("Error sending message!");
          }
     };

     return (
          <div className="w-full">
               <h4 className="text-blue-950 text-xl sm:text-3xl font-normal mb-6">Get in Touch</h4>
               <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-16 gap-x-28">
                    <div className="col-span-4 sm:col-span-8">
                         <form
                              onSubmit={handleSubmit}
                              className="flex flex-wrap items-start justify-between gap-y-6 sm:gap-y-8 w-full"
                         >
                              <textarea
                                   rows={6}
                                   name="message"
                                   value={newContact.message}
                                   onChange={handleChange}
                                   placeholder="Enter your message here"
                                   required
                                   className={`border border-slate-300 bg-${
                                        isLoading ? "slate-200" : "transparent"
                                   } rounded-sm text-sm w-full focus:outline-none active:outline-none focus:border-emerald-500 active:border-emerald-500 px-3 sm:px-4 py-2.5 sm:py-3.5 placeholder-slate-400 duration-150`}
                              />
                              <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 w-full">
                                   <Input
                                        type="text"
                                        name="fullName"
                                        value={newContact.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        disabled={isLoading}
                                        required
                                   />
                                   <Input
                                        type="email"
                                        name="email"
                                        value={newContact.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        disabled={isLoading}
                                        required
                                   />
                              </div>
                              <Input
                                   type="text"
                                   name="subject"
                                   value={newContact.subject}
                                   onChange={handleChange}
                                   disabled={isLoading}
                                   placeholder="Subject"
                              />
                              <Button value="Send Message" disabled={isLoading} sm />
                         </form>
                    </div>
                    <div className="col-span-4 flex flex-col gap-y-5 sm:gap-y-10">
                         <div className="flex items-start gap-x-3 flex-col">
                              <IoHomeOutline className="text-lg sm:text-2xl text-slate-400 mt-1" />
                              <div>
                                   <h4 className="text-blue-950 font-semibold text-sm sm:text-base mb-1">
                                        OM SHANTI WELFARE TRUST
                                   </h4>
                                   <p className="text-slate-500 text-sm sm:text-base font-light">
                                        OM SHANTI CLINIC, NEAR JANTA BAKERY,Road no. 03, ganga society, Vikhroli
                                        parksite 400079
                                   </p>
                              </div>
                         </div>
                         <div className="flex items-start gap-x-3">
                              <TfiMobile className="text-lg sm:text-2xl text-slate-400 mt-1" />
                              <div>
                                   <h4 className="text-blue-950 text-sm sm:text-base font-light mb-1">
                                        +91 99204 41626
                                   </h4>
                                   <p className="text-slate-500 text-sm sm:text-base font-light uppercase">
                                        Mon to Fri 9am to 6pm
                                   </p>
                              </div>
                         </div>
                         <div className="flex items-start gap-x-3">
                              <TfiEmail className="text-lg sm:text-2xl text-slate-400 mt-1" />
                              <div>
                                   <h4 className="text-blue-950 text-sm sm:text-base font-light mb-1 underline">
                                        omshantiwelfareturst@gmail.com
                                   </h4>
                                   <p className="text-slate-500 text-sm sm:text-base font-light">
                                        Send us your query anytime!
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
