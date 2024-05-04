import { BiMoneyWithdraw } from 'react-icons/bi';
import CardDataStats2 from '../../components/CardDataStats2';
import LeadsReport from '../../components/LeadsReport';
import LineImage from '../../assets/line.svg';
import routes from '../../navigation/routes';

const data = [
  {
    title: 'Buy Airtime',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: routes.BUY_AIRTIME_PAGE,
  },
  {
    title: 'Buy Data',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: routes.BUY_DATA_PAGE,
  },
  {
    title: 'Pay Cable Tv',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: routes.PAY_CABLE_TV_PAGE,
  },
  {
    title: 'Electricity',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: '',
  },
  {
    title: 'Betting',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: '',
  },
  {
    title: 'Internet',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: '',
  },
  {
    title: 'Tickets',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: '',
  },
  {
    title: 'Giftcards',
    icon: <BiMoneyWithdraw className=" text-xl sm:text-2xl" />,
    link: '',
  },
];

const DashboardPage: React.FC = () => {
  return (
    <>
      <h1 className="my-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
        Hello Asuquo 👋🏽
      </h1>

      <h2 className="mb-4  font-medium">15th Nov 2023 • 09:47</h2>

      <div className="relative rounded-2xl bg-graydark p-8 text-white md:p-9 lg:p-10">
        <img
          className="absolute inset-0 z-1 h-full w-full opacity-30"
          src={LineImage}
          draggable={false}
        />
        <p className="text-white">Your available balance:</p>
        <p className="z-9 mt-3 text-xl font-bold text-white md:text-2xl lg:text-3xl">
          ₦46,350,060.00
        </p>

        <div className="flex flex-wrap  items-center justify-between gap-10">
          <div>
            <p className="mb-2 mt-5"> 0768010549</p>
            <p>Allison Eyo, Access Bank</p>
          </div>
          <button className="z-[2] rounded-2xl bg-[#1D992E]  px-4 py-3 text-white">
            Fund Wallet
          </button>
        </div>
      </div>

      <h2 className="mb-5 mt-20  font-medium">
        What will you like to do today?
      </h2>

      <div className="mb-10 grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {data.map(({ icon, link, title }, key) => (
          <CardDataStats2 key={key} title={title} children={icon} link={link} />
        ))}
      </div>

      <LeadsReport />
    </>
  );
};

export default DashboardPage;
