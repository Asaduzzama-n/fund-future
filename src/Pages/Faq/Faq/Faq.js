import React from 'react';

const Faq = () => {
    return (
        <div className='text-accent font-semibold'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold mb-20">Frequently Asked Questions</h1>
                <h2 className="text-4xl font-bold mb-4">What is FundFuture?</h2>
                <p className="mb-4 my-10">FundFuture is a crowdfunding platform that connects entrepreneurs and startups with investors who are looking for new and innovative ideas to invest in. We make it easy for entrepreneurs to create campaigns and attract investors, while providing investors with a wide range of investment opportunities.</p>
                <h2 className="text-4xl font-bold mb-4">How does FundFuture work?</h2>
                <p className="mb-4 my-10">Entrepreneurs create campaigns on FundFuture, outlining their business ideas, goals, and funding needs. Investors can browse these campaigns and choose to invest in the ones that interest them. If a campaign meets its funding goal, the entrepreneur receives the funds and can start bringing their idea to life.</p>
                <h2 className="text-4xl font-bold mb-4">What types of campaigns can be created on FundFuture?</h2>
                <p className="mb-4 my-10">FundFuture supports campaigns for a wide range of business ideas, including technology startups, social impact initiatives, creative projects, and more. As long as the campaign meets our community guidelines and terms of service, it can be created on our platform.</p>
                <h2 className="text-4xl font-bold mb-4">Is my investment in a campaign on FundFuture secure?</h2>
                <p className="mb-4 my-10">We take the security of our users very seriously and use industry-standard encryption and security measures to protect our users' data and transactions. However, as with any investment, there is always a risk of loss. We encourage investors to carefully review each campaign before making an investment decision.</p>
                <h2 className="text-4xl font-bold mb-4">How does FundFuture make money?</h2>
                <p className="mb-4 my-10">FundFuture charges a small percentage of the funds raised by campaigns on our platform as a fee. This fee helps us cover our operational costs and continue to improve our platform.</p>
            </div>
        </div>
    );
};

export default Faq;