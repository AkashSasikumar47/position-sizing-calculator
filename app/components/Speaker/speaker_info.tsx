import React, { useEffect, useState } from 'react'

const SpeakerInfo: React.FC<{ onGenerationComplete: () => void; }> = ({ onGenerationComplete }) => {

  //add the second letter twice for the generative content
  const name = 'Seenthil Kumar J';
  const desig = 'Asssistant Professor, KIT';
  const content = `Seenthil Kumar J is an Assistant Professor at Kalaignarkarunanidhi Institute of Technology, Coimbatore, with a robust passion for research in the fields of Deep Learning, Natural Language Processing, Machine Learning, and Data Mining. He is also an Intel-certified instructor specializing in Quantum Machine Learning. With years of experience in Computer Science and Engineering, Senthil has a proven track record in higher education, guiding students and researchers through cutting-edge technologies. His commitment to solving complex problems and his insatiable thirst for knowledge drive his work in AI. Senthil is enthusiastic about sharing his expertise with students, aiming to inspire the next generation of engineers.`;

  const [nameCompleted, setNameCompleted] = useState(false);
  const [desigCompleted, setDesigCompleted] = useState(false);
  const [contentCompleted, setContentCompleted] = useState(false);

  const nameGen = () => { setNameCompleted(true) };
  const desigGen = () => { setDesigCompleted(true) };
  const contentGen = () => { setContentCompleted(true) };

  useEffect(() => {
    if (contentCompleted) {
      onGenerationComplete();
    }
  }, [contentCompleted]);

  return (
    <div>
      <GenContent
        className='mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl'
        showGenerating={false}
        text={name}
        speed={30}
        complete={nameGen}
      />
      {nameCompleted && <GenContent
        className='mb-4 md:mb-6 text-xl text-neonCyan font-sans font-bold'
        showGenerating={false}
        text={desig}
        speed={25}
        complete={desigGen}
      />}
      {desigCompleted && <GenContent
        className='text-justify mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg'
        showGenerating={false}
        text={content}
        speed={10}
        complete={contentGen}
      />}
    </div>
  );
};

export default SpeakerInfo

interface GenContentProps {
  className: string;
  showGenerating: boolean;
  text: string;
  speed: number;
  complete: VoidFunction;
}

const GenContent: React.FC<GenContentProps> = ({ className, showGenerating, text, speed, complete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!showGenerating) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {


        if (currentIndex < text.length - 1) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          currentIndex++;
        }

        else if (currentIndex === text.length - 1) {
          clearInterval(intervalId);
          setCompleted(true);
          complete();
        }
      }, speed);

      return () => clearInterval(intervalId);
    } else {
      setDisplayedText('');
    }
  }, [showGenerating, text]);

  return (
    <div
      className={className}
    >
      {showGenerating
        ? (<span>⚪</span>)
        : (<div>{displayedText}{!completed ? <span>⚪</span> : null}</div>)
      }
    </div>
  );
};