import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home= async() => {
    const looggedIn=await getLoggedInUser();
  return (
<section className='home'>
    <div className="home-content">
        <header className='home-header'>
           <HeaderBox
           type="greeting"
           title="Welcome"
           user={`${looggedIn?.firstName} ${looggedIn?.lastName}`||'shivam'}
           subtext="Access and manage your account and transcations efficeintly"
           />
<TotalBalanceBox
accounts={[]}
totalBanks={1}
totalCurrentBalance={1250.35}

/>




        </header>
        recent Transactions

    </div>
    <RightSidebar user={looggedIn}
    transactions={[]}
    banks={[{currentBalance:123.50},{currentBalance:500}]}/>
</section> 
  )
}

export default Home