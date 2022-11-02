import React from 'react';

const Faq = () => {
    return (
      <div className="flex flex-col gap-1 w-11/12 mx-auto my-10">
        <h1 className='text-center text-3xl pb-3 bg-slate-50'>Frequently Asked Question (FAQ)</h1>
        <div className="collapse collapse-plus border rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Q : 1 Why did you choose us?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-bold">Ans : </span> Because we provide a
              basic to advanced course.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Faq;