import React from 'react';

const Contact = () => {
    return (
        <div className='my-20'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="font-semibold mb-4">We would love to hear from you. Please use the form below to get in touch with us, and we will get back to you as soon as possible.</p>
                <form className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input type="text" className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-primary" />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-primary"></textarea>
                    </div>
                    <div className="col-span-2 text-right">
                        <button className="bg-accent hover:bg-primary text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:border-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;