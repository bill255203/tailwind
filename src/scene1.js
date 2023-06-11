import Man from './man.png';
import './index.css';
function scene1() {
  return (
    <div className='bg-[#9775FA] h-[812px]'>
      <img
        src={Man}
        alt='man'
        className='absolute w-[375px] h-[812px] left-0 top-0'
      />
      <div className='absolute w-[345px] h-[244px] left-[15px] top-[553px] bg-white rounded-[20px]'></div>
      <div className='absolute w-[261px] h-[28px] left-[57px] top-[578px] bg-white font-sans font-[600] not-italic text-[25px] tracking-[-0.0075em] leading-[110%]'>
        Look Good, Feel Good
      </div>
      <div className='absolute w-[294px] h-[42px] left-[40px] top-[616px] bg-white font-sans font-[400] not-italic text-[15px] leading-[140%] text-center text-[#8F959E]'>
        Create your individual & unique style and look amazing everyday.
      </div>
      <div className='flex flex-row justify-center items-center p-[10px] gap-[10px] absolute w-[152px] h-[60px] left-[30px] top-[678px] bg-[#F5F6FA] rounded-[10px]'>
        <div className='absolute w-[36px] h-[19px] bg-[#F5F6FA] font-sans font-[500] not-italic text-[17px] leading-[110%] flex-none order-[0] grow-0 text-center text-[#8F959E]'>
          Men
        </div>
      </div>
      <div className='flex flex-row justify-center items-center p-[10px] gap-[10px] absolute w-[152px] h-[60px] left-[192px] top-[678px] bg-[#9775FA] rounded-[10px]'>
        <div className='absolute w-[62px] h-[19px] bg-[#9775FA]  font-sans font-[500] not-italic text-[17px] leading-[110%] flex-none order-[0] grow-0 text-center text-white'>
          Women
        </div>
      </div>

      <div className='absolute w-[36px] h-[19px] left-[169px] top-[758px] bg-white font-sans font-[500] not-italic text-[17px] leading-[110%] text-center text-[#8F959E]'>
        Skip
      </div>
    </div>
  );
}

export default scene1;
