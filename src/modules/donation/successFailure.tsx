import React, { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdError, MdCheckCircle } from "react-icons/md";

import { useLazyCheckStatusQuery } from '../../core/services';

import { Loader, Button } from '../../core/components';


export const SuccessFailureModule: FC = () => {
   const { merchantTransactionId } = useParams();
   const navigate = useNavigate();   
   const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

   const [CheckStatus, { data, error, isError, isSuccess, isLoading }] = useLazyCheckStatusQuery();

   useEffect(() => {
      if (isError) {
         console.log(error);
         return;
      }

      if (isSuccess) {
         if (data?.data?.status === "SUCCESS") {
            setIsPaymentSuccess(true);
            setTimeout(() => {
               navigate("/", { replace: true });
            }, 5000);
         }
      }

      (async () => {
         await CheckStatus({ transactionId: merchantTransactionId as string });
      })();
   }, [merchantTransactionId, isSuccess, isError, error, data, CheckStatus, setIsPaymentSuccess, navigate]);

   if (isLoading) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Loader />
         </div>
      );
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         {isPaymentSuccess ? (
         <SuccessPage />
         ) : (
         <FailedPage />
         )}
      </div>
   );
};

function SuccessPage() {
   return (
      <div className="bg-emerald-50 w-full h-screen overflow-hidden">
         <div className="flex flex-col items-center justify-center h-screen w-full overflow-hidden">
            <MdCheckCircle className="text-8xl sm:text-9xl text-emerald-500 mb-4 sm:mb-6 animate__animated animate__heartBeat" />
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-500 mb-2.5">Payment Successful</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-10 sm:mb-16">Thank you for your payment!</p>
         </div>
      </div>
   );
}

function FailedPage() {
   return (
      <div className="relative bg-red-50 w-full h-screen overflow-hidden">
         <div className="flex flex-col items-center justify-center h-screen m-auto w-full overflow-hidden">
            <MdError className="text-8xl sm:text-9xl text-red-500 mb-4 sm:mb-6 animate__animated animate__heartBeat" />
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-2.5">Payment Failed</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-10 sm:mb-16">Oops! Something went wrong with your payment.</p>
            <Button value="Try again" onClick={() => window.history.back()} danger />
         </div>
      </div>
   );
}