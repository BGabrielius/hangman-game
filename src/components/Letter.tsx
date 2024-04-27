interface Props {
  letter: string;
  action?: (e: any) => void;
  type: 'primary' | 'secondary';
  revealed?: boolean;
  selected?: boolean;
}

const Letter: React.FC<Props> = ({
  letter,
  action,
  type,
  revealed,
  selected,
}) => {
  const onKeyDown = (e: any) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (action) action(e);
    }
  };
  return (
    <li
      id={selected ? '' : 'letterParent'}
      role={type === 'secondary' ? 'button' : 'listitem'}
      tabIndex={type === 'secondary' && !selected ? 0 : -1}
      aria-disabled={selected}
      onClick={action}
      onKeyDown={onKeyDown}
      className={` 
    ${
      type === 'primary'
        ? `${
            revealed
              ? 'bg-c-blue shadow-s-primary'
              : 'bg-c-blue/25 shadow-s-transparent'
          } flex items-center justify-center  h-16 md:h-20 lg:h-28 2xl:h-32 w-6 sm:w-[34px] md:w-12 lg:w-[72px] 2xl:w-24 rounded-[8px] sm:rounded-[12px] md:rounded-[24px] lg:rounded-[32px] 2xl:rounded-[40px] px-1 py-1 md:px-3 lg:px-8 lg:py-2 2xl:px-10 2xl:py-0`
        : `${
            selected
              ? 'bg-white/50 duration-1000'
              : 'bg-white hover:bg-c-blue hover:cursor-pointer'
          } flex items-center justify-center w-[28.89px] h-[56px] md:w-16 md:h-[84px] rounded-[8px] md:rounded-[24px] md:px-6 md:py-[6px] 2xl:px-[46px] `
    }`}
    >
      <p
        id={selected ? '' : 'letterChild'}
        className={` 
        ${
          type === 'primary'
            ? `${
                revealed ? '' : 'hidden'
              } font-bold text-[40px] text-white md:text-[52px] lg:text-[64px] 2xl:text-f-heading-l`
            : `${
                selected
                  ? 'text-c-darknavy/75 duration-1000 animate-ping-once'
                  : 'text-c-darknavy'
              } text-[24px]  md:text-f-heading-m`
        }`}
      >
        {letter}
      </p>
    </li>
  );
};

export default Letter;
