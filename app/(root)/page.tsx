import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Saksham', lastName: 'Sharma', email: 'sssharma@pm.me'};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1041.32}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 234.33}, {currentBalance: 459.34}]}
        />
    </section>
  )
}

export default Home