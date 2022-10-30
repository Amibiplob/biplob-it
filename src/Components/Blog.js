import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-1 w-11/12 mx-auto my-10">
      <div className="collapse collapse-plus border rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q : 1 what is cors?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">Ans : </span> Cross-origin resource
            sharing (CORS) is a mechanism that allows restricted resources on
            a web page to be requested from another domain outside the domain
            from which the first resource was served.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus border rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q : 2 Why are you using Firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">Ans : </span>Firebase
            Authentication provides backend services, easy-to-use SDKs, and
            ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook, and Twitter, and
            more.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus border rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q : 3 How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">Ans : </span>The private route component
            is similar to the public route. The only change is the redirect URL
            and authenticate condition. If the user is not authenticated, he
            will be redirected to the login page and the user can only access
            the authenticated routes if he is authenticated (logged in).
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus border rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q : 4 What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">Ans : </span>It is used as a backend
            service where JavaScript works on the server-side of the
            application. This way, javascript is used on both the frontend and
            the backend. Node. JS runs on the Chrome V8 engine, which converts
            javascript code into machine code. It is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
