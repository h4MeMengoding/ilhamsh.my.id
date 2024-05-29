import Breakline from '@/common/components/elements/Breakline';
import { GITHUB_ACCOUNTS } from '@/common/constant/github';

import CodingActive from './CodingActive';
import Contributions from './Contributions';
import SpoLast from './SpotifyLastPlayed';

const Dashboard = () => {
  return (
    <>
      <CodingActive />
      <Breakline className='mb-8 mt-10' />
      <div className='space-y-10'>
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
            />
          ),
        )}
      </div>
      <Breakline className='mb-8 mt-10' />
      <SpoLast />
    </>
  );
};

export default Dashboard;
