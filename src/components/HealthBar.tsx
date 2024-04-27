interface Props {
  currentHealth: number;
}

const HealthBar: React.FC<Props> = ({ currentHealth }) => {
  return (
    <>
      <div className='bg-white w-[57px] h-[16px] sm:w-[90px] md:w-[161px]  md:h-[31px] 2xl:w-[240px] rounded-[96px] p-1 md:px-3 md:py-2'>
        <div
          className='bg-c-darknavy w-full h-full rounded-[96px] duration-1000'
          style={{ width: `${currentHealth}%` }}
        ></div>
      </div>
    </>
  );
};

export default HealthBar;
