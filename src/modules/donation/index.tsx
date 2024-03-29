import React, { FC, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

import { IDonation } from '../../core/interface';
import { DonationInitialValues } from '../../validation';
import { useNewDonationMutation } from '../../core/services';

import { Button, Input } from '../../core/components';

export const DonationModule: FC = () => {
   const [newDonation, setNewDonation] = useState<IDonation>(DonationInitialValues);

   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const programId = searchParams.get('programId');
   const eventId = searchParams.get('eventId');

   const [
      NewDonation,
      {
         data,
         error,
         isError,
         isSuccess,
         isLoading,
      }
   ] = useNewDonationMutation();

   useEffect(() => {
      if (isError) {
         console.log(error);
      }

      if (isSuccess) {
         setNewDonation(DonationInitialValues);
         console.log("🚀 ~ useEffect ~ data:", data);
         window.open(data?.data?.url as string, '_self');
      }
   }, [isError, error, isSuccess, data, navigate]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewDonation((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleAmountChange = (amount: number) => {
      setNewDonation((prev) => ({
         ...prev,
         amount
      }));
   }

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      const donationDoc: IDonation = newDonation;

      // donationDoc.referenceId = programId || eventId || COMMON.EMPTY_STRING;
      donationDoc.userId = uuidv4();
      donationDoc.amount = Number(donationDoc.amount);

      try {
         await NewDonation(donationDoc);
      } catch (err) {
         toast.error("Error sending message!");
      }
   };


   return (
      <div className="w-full">
      <h4 className="text-blue-950 text-xl sm:text-3xl font-normal mb-12">I Would Like To Donate</h4>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-16 gap-x-28">
         <div className="col-span-4 sm:col-span-8">
            {(programId || eventId) ? (
               <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-4 mb-6">
                  <Button value="Monthly" onClick={() => handleAmountChange(500)} sm styles="rounded" />
                  <Button value="Quarterly" onClick={() => handleAmountChange(1000)} sm styles="rounded" />
                  <Button value="Semi-Annual" onClick={() => handleAmountChange(2500)} sm styles="rounded" />
                  <Button value="Yearly" onClick={() => handleAmountChange(5000)} sm styles="rounded" />
               </div>
            ) : null}
            <form onSubmit={handleSubmit} className="flex flex-wrap items-start justify-between gap-y-6 sm:gap-y-8 w-full">
               <Input
                  type="number"
                  name="amount"
                  value={newDonation.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  disabled={isLoading}
                  required
               />
               <Input
                  type="text"
                  name="userName"
                  value={newDonation.userName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                  required
               />
               <Input
                  type="email"
                  name="email"
                  value={newDonation.email}
                  onChange={handleChange}
                  placeholder="Email"
                  disabled={isLoading}
                  required
               />
            <Input
               type="text"
               name="mobile"
               value={newDonation.mobile}
               onChange={handleChange}
               disabled={isLoading}
               placeholder="Mobile"
            />
               <Button
                  value="Donate Now"
                  disabled={isLoading}
                  sm
               />
            </form>
         </div>
         <div className="col-span-4 sm:block hidden">
            <h1 className="text-3xl text-slate-600 font-medium tracking-wide leading-10 mb-8">
               Please come forward and contribute. Your contribution will transform lives.
            </h1>
            <div className="text-slate-400 font-light text-base tracking-wide space-y-3.5">
               <p>Children Got Life-Saving Treatment.</p>
               <p>People Served Nutritious Meals.</p>
               <p>Children Received Education.</p>
               <p>Trees and Animals Helped.</p>
               <p>People Served Nutritious Meals.</p>
               <p>People Helped Overall Through All Programmes.</p>
            </div>
            
         </div>
      </div>
   </div>
   );
};