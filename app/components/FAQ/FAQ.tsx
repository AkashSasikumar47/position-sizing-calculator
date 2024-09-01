import React, { useState } from 'react';
import './anime.css';
import Query from './Query';
import Chat from './Chat';

const FAQ = () => {
  interface FAQ {
    no: number;
    question: string;
    answer: string;
  }

  const [FAQs] = useState<FAQ[]>([
    //add second letter twice for the answer
    {
      no: 1,
      question: "How do I register for the E-volve event?",
      answer: "Yoou can register for the E-volve event by clicking the 'Register' button on this website or scanning the provided QR code to access the registration page."
    },
    {
      no: 2,
      question: "Is there a registration fee for E-volve?",
      answer: "Noo, E-volve is a free event for all participants. However, registration is required to secure your spot."
    },
    {
      no: 3,
      question: "What should I bring to the event?",
      answer: "Wee recommend bringing a laptop for the hands-on workshop sessions, along with a notebook and pen for taking notes."
    },
    {
      no: 4,
      question: "Do I need any prior knowledge or experience to attend the E-volve event?",
      answer: "Noo prerequisites are required to attend the E-volve event. The sessions are designed to be beginner-friendly, making them accessible to all students regardless of their background or experience level."
    },
    {
      no: 5,
      question: "Will I receive a certificate for participating?",
      answer: "Yees, all participants who attend the event will receive a certificate of participation, which will be emailed to you after the event."
    },
    {
      no: 6,
      question: "Will I receive OD for participating?",
      answer: "Yees, all participants who attend the event will receive OD for participation, which will be emailed to you after the event."
    }
  ]);

  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);

  const handleFAQClick = (FAQ: FAQ) => {
    setSelectedFAQ(FAQ);
  };

  return (
    <section>
      <div className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto mb-10 items-center justify-center text-center">
          <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
            Have questions about the E-volve event? I am here to guide you through everything you need to know. Let's explore some common queries!
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center h-auto">
          <div className="mockup-phone mx-auto">
            <div className="camera" />
            <div className="display">
              <div
                className="artboard artboard-demo phone-1"
                style={{ backgroundImage: "url('/assets/Img/cyberpunk.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {selectedFAQ ? (
                  <Chat question={selectedFAQ.question} answer={selectedFAQ.answer} key={0} />
                ) : (
                  <div className="bg-gray-800 rounded-xl text-white text-center p-4">Select a question to see the answer.</div>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
              {FAQs.length === 0 ? (
                <div className="flex items-center justify-center col-span-full mt-6">
                  <p className="text-center text-neonCyan">All questions have been answered!</p>
                </div>
              ) : (
                FAQs.map((FAQ) => (
                  <Query
                    key={FAQ.no}
                    question={FAQ.question}
                    handleClick={() => handleFAQClick(FAQ)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;