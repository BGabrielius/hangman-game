'use client';

import { useRef, useState, useEffect } from 'react';
interface Props {
  reEvaluate: () => void;
  onFalseGuess: () => void;
}
interface Health {
  fullHP: number | null;
  timesReduced: number;
  current: number | null;
}

const HealthBar: React.FC<Props> = ({ reEvaluate, onFalseGuess }) => {
  // variables

  // state
  const [health, setHealth] = useState<Health>({
    fullHP: null,
    timesReduced: 0,
    current: null,
  });
  const [isMounted, setIsMounted] = useState<boolean>(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ref
  const widthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMounted && widthRef.current) {
      setIsMounted(true);
      setHealth({
        ...health,
        fullHP: widthRef.current?.offsetWidth,
        current: widthRef.current?.offsetWidth,
      });
    }
  }, [isMounted, health]);

  const updateX = () => {
    if (health.timesReduced === 7) {
      setHealth({ ...health, current: 0, timesReduced: 8 });
      return;
    }

    if (health.fullHP && health.current) {
      let dmgPerMiss = Math.ceil(health.fullHP * 0.125);

      setHealth({
        ...health,
        timesReduced: health.timesReduced + 1,
        current:
          health.timesReduced === 0
            ? Math.floor(health.fullHP - dmgPerMiss)
            : Math.floor(health.current - dmgPerMiss),
      });
    }
  };

  return (
    <>
      {/* <button onClick={() => updateX()}>TEST</button> */}
      <div
        onClick={() => onFalseGuess}
        className='bg-white w-[57px] h-[16px] sm:w-[90px] md:w-[161px]  md:h-[31px] 2xl:w-[240px] rounded-[96px] p-1 md:px-3 md:py-2'
      >
        <div
          ref={widthRef}
          className='bg-c-darknavy w-full h-full rounded-[96px]'
          style={
            health.timesReduced === 0
              ? { width: '100%' }
              : health.timesReduced === 8
              ? { display: 'none' }
              : { width: health.current }
          }
        ></div>
      </div>
    </>
  );
};

export default HealthBar;
