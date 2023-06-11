import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function scene3() {
  return (
    <div>
      <div className='absolute w-[45px] h-[45px] left-[20px] top-[45px]  bg-[#F5F6FA] rounded-full'>
        <Stack direction='row' alignItems='center' spacing={1}>
          <IconButton aria-label='delete' size='large'>
            <ArrowBackIcon />
          </IconButton>
        </Stack>
      </div>
      <div className='absolute left-[36%] right-[36.27%] top-[12.93%] bottom-[83.25%] font-sans not-italic font-[600] text-[28px] tracking-[-0.0075em] leading-[110%] rounded-[10px] text-[#1D1E20]'>
        Sign Up
      </div>
      <FontAwesomeIcon
        icon={faCheck}
        size='sm'
        style={{ color: '#34c358' }}
        className='absolute w-[11.67px] h-[11.67px] left-[339.17px] top-[322.67px]'
      />
      <div className='absolute w-[63px] h-[14px] left-[20px] top-[288px] bg-white font-sans font-[400] not-italic text-[13px] leading-[110%] text-[#8F959E]'>
        Username
      </div>
      <div className='absolute w-[107px] h-[17px] left-[20px] top-[317px] bg-white font-sans font-[500] not-italic text-[15px] leading-[110%] text-[#1D1E20]'>
        Esther Howard
      </div>
      <div className='absolute w-[335px] h-[0px] left-[20px] top-[349px] border-[1px] border-solid border-[#E7E8EA] '></div>
      <div className='absolute w-[63px] h-[14px] left-[20px] top-[369px] bg-white font-sans font-[400] not-italic text-[13px] leading-[110%] text-[#8F959E]'>
        Password
      </div>
      <div className='absolute w-[101px] h-[17px] left-[20px] top-[398px] bg-white font-sans font-[500] not-italic text-[15px] leading-[110%] text-[#1D1E20]'>
        HJ@#9783kja
      </div>
      <div className='absolute w-[335px] h-[0px] left-[20px] top-[430px] border-[1px] border-solid border-[#E7E8EA] '></div>
      <div className='absolute w-[193px] h-[17px] left-[20px] top-[479px] bg-white font-sans font-[500] not-italic text-[15px] leading-[110%] text-[#1D1E20]'>
        bill.sanders@example.com
      </div>
      <div className='absolute w-[35px] h-[12px] left-[320px] top-[400px] bg-white font-sans font-[400] not-italic text-[11px] leading-[110%] text-[#34C559]'>
        Strong
      </div>
      <div className='absolute w-[87px] h-[14px] left-[20px] top-[450px] bg-white font-sans font-[400] not-italic text-[13px] leading-[110%] text-[#8F959E]'>
        Email Address
      </div>
      <FontAwesomeIcon
        icon={faCheck}
        size='sm'
        style={{ color: '#34c358' }}
        className='absolute w-[11.67px] h-[11.67px] left-[339.17px] top-[484.67px]'
      />
      <div className='absolute w-[335px] h-[0px] left-[20px] top-[511px] border-[1px] border-solid border-[#E7E8EA] '></div>
      <div className='absolute w-[88px] h-[14px] left-[20px] top-[553px] font-manrope font-[500] not-italic text-[13px] leading-[110%] text-[#1D1E20]'>
        Remember me
      </div>
      <div className='absolute w-[30px] h-[18px] left-[325px] top-[551px] bg-[#34C759] rounded-[99px]'></div>
      <div className='absolute w-[15.88px] h-[15.68px] left-[337.94px] top-[552.16px] bg-white rounded-full shadow'></div>
      <div className='flex flex-row justify-center items-start pt-[15px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] absolute w-[375px] h-[75px] left-[0px] top-[737px] bg-[#9775FA]'>
        <div className='flex-none order-0 grow-0 w-[64px] h-[19px] font-sans font-[500] not-italic text-[17px] leading-[110%] text-[#FEFEFE]'>
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default scene3;
