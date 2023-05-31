import React from "react";
import Features from "./Features";
import LearnMore from "./LearnMore";
import { cards } from "./Arrays";

export default function Section() {
  return (
    <>
      <div className="mx-3 my-8 md:mt-32">
        <p className="text-center text-3xl font-bold text-primaryColor my-3 md:text-4xl">
          {" "}
          A Superior Guest Experience
        </p>
        <p className="text-center text-xl leading-8 text-text md:w-[42rem] md:mx-auto">
          MeetLink's Visitor Management System is a fully integrated solution
          designed to reduce the operational costs associated with Organisation
          entry and establish a secure environment for visitors and employees.
        </p>
      </div>

      {/* THREE COLUMN CARD SECTION */}

      <div className="mx-5 md:flex md:justify-between md:mx-32 md:py-12">
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <img src={card.img} className="w-28 mt-9" />
              <p className="text-primaryColor font-bold text-xl mb-8">
                {card.title}
              </p>
              {card.list.map((item) => (
                <p key={item} className="text-text leading-5 md:leading-6">
                  {item}
                </p>
              ))}

              <div className="md:my-auto">
                <LearnMore />
              </div>
            </div>
          );
        })}
      </div>

      {/* FEATURES SECTION */}

      <Features
        style="md:flex md:flex-row-reverse"
        alt="Scheduling"
        img="images/mockup.png"
        title="Schedule Meetings Seamlessly"
        content="Experience the freedom from scheduling headaches as Meetlink automates the entire process, enabling you to focus on what truly matters - productive and meaningful face-to-face interactions. Seamlessly connect with colleagues, clients, and partners, and make every meeting count."
      />
      <Features
        style="md:flex md:flex-row"
        alt="Integate Access"
        img="images/admin-dashboard-mockup.png"
        title="Integrate Your Access Control System"
        content='Effortlessly synchronize visitor and employee data with your access control system, enabling seamless integration. Employ the convenience of unique QR codes or Access Codes to grant access precisely when needed. Securities or staffs can stay informed in real-time about the presence of individuals within the premises. Bid farewell to any concerns about unauthorized access. Indeed, as the famous saying goes, "Peter has left the building."'
      />
      <Features
        style="md:flex md:flex-row-reverse"
        img="images/security-mockup.png"
        alt="Organisation Safety"
        title="Secure the Workplace."
        content="MeetLink’s pre-arrival check-in requirements ensure organisation security and compliance. Elevate your organization’s physical security and gain greater control over unauthorized entries with our powerful Meetlink portal. Enjoy real-time visitor insights, streamline security processes, and ensure enhanced safety for everyone."
      />
    </>
  );
}
