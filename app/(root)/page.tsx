import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home= () => {
    const looggedIn={firstName:'Aditya',lastName:'Singh',email:'adityakumarsingh3101@gmail.com'};
  return (
<section className='home'>
    <div className="home-content">
        <header className='home-header'>
           <HeaderBox
           type="greeting"
           title="Welcome"
           user={looggedIn?.firstName||'Guest'}
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