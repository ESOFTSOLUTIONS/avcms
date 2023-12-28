import React, { useRef } from "react";

function Newsletter() {
  const emailInputRef = useRef(null);

  const callSubscribers = () => {
    console.log("callSubscribers", emailInputRef.current.value);
  }

  return (
    <div className="mt-[50px]">
      <div className="page-width">
        <div className="rounded p-[30px] bg-[#E8D5C4]">
          <div className="mb-3">
            <h2 className="text-center">NEWSLETTER</h2>
            <p className="text-center">
              Subscribe to our newsletter and get 10% off your first purchase!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2 w-[380px]">
              <input
                ref={emailInputRef}
                className="border border-divider rounded p-2"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="button" onClick={callSubscribers}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};
