// import F from './f.png';
// import G from './g.png';
// import T from './t.png';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGoogle,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

function scene2() {
  return (
    <div className='bg-white'>
      <div className='absolute w-[45px] h-[45px] left-[20px] top-[45px]  bg-[#F5F6FA] rounded-full'>
        <Stack direction='row' alignItems='center' spacing={1}>
          <IconButton aria-label='delete' size='large'>
            <ArrowBackIcon />
          </IconButton>
        </Stack>
      </div>
      <div className='absolute left-[20%] right-[20.27%] top-[12.93%] bottom-[83.25%] font-sans not-italic font-[600] text-[28px] tracking-[-0.0075em] leading-[110%] rounded-[10px]'>
        Let’s Get Started
      </div>
      <div className='absolute w-[335px] h-[50px] left-[20px] right-[20px] top-[321px] bottom-[441px] bg-[#4267B2] rounded-[10px]'></div>
      {/* <img
        src={F}
        alt='F'
        className='absolute w-[22px] h-[22px] left-[136px] top-[335px]'
      /> */}
      <FontAwesomeIcon
        icon={faFacebookF}
        size='2xs'
        style={{ color: '#ffffff' }}
        className='absolute w-[22px] h-[22px] left-[136px] top-[335px]'
      />
      <div className='absolute w-[78px] h-[22px] left-[162px] top-[335px] text-white font-sans font-[600] not-italic text-[17px] leading-[22px] tracking-[-0.408px]'>
        Facebook
      </div>
      <div className='absolute w-[335px] h-[50px] left-[20px] right-[20px] top-[381px] bottom-[381px] bg-[#1DA1F2] rounded-[10px]'></div>
      {/* <img
        src={T}
        alt='T'
        className='absolute w-[22px] h-[22px] left-[146.5px] top-[395px]'
      /> */}
      <FontAwesomeIcon
        icon={faTwitter}
        size='2xs'
        style={{ color: '#ffffff' }}
        className='absolute w-[22px] h-[22px] left-[146.5px] top-[395px]'
      />
      <div className='absolute w-[57px] h-[22px] left-[172.5px] top-[395px] text-white font-sans font-[600] not-italic text-[17px] leading-[22px] tracking-[-0.408px]'>
        Twitter
      </div>
      <div className='absolute w-[335px] h-[50px] left-[20px] right-[20px] top-[441px] bottom-[321px] bg-red-500 rounded-[10px]'></div>
      {/* <img
        src={G}
        alt='G'
        className='absolute w-[22px] h-[22px] left-[150px] top-[458.5px]'
      /> */}
      <FontAwesomeIcon
        icon={faGoogle}
        size='2xs'
        style={{ color: '#ffffff' }}
        className='absolute w-[18px] h-[18px] left-[147px] top-[455.5px]'
      />
      <div className='absolute w-[58px] h-[22px] left-[172px] top-[455px] text-white font-sans font-[600] not-italic text-[17px] leading-[22px] tracking-[-0.408px]'>
        Google
      </div>
      <div className='absolute flex items-center w-[231px] h-[17px] left-[72px] top-[695px] bg-white font-sans font-[400] not-italic text-[15px] leading-[110%] text-center text-[#8F959E]'>
        Already have an account?{' '}
        <div className='font-bold text-black'> Signin</div>
      </div>
      <div className='flex flex-row justify-center items-start pt-[15px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] absolute w-[375px] h-[75px] left-[0px] top-[737px] bg-[#9775FA]'>
        <div className='flex-none order-0 grow-0 w-[152px] h-[19px] font-sans font-[500] not-italic text-[17px] leading-[110%] text-[#FEFEFE]'>
          Create an Account
        </div>
      </div>
    </div>
  );
}

export default scene2;
