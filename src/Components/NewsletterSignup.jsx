import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="bg-base-200 max-w-7xl mx-auto mb-10 py-16 px-4 rounded">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
        Stay Updated with History
        </h2>
        <p className="text-base-content/80 text-sm mb-6">
          Subscribe to get the latest historical artifacts, stories, and
          discoveries delivered right to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto flex-grow"
            required
          />
          <button
            type="submit"
            className="btn btn-primary bg-[#FF6652] border-none hover:bg-[#e85a48]"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-base-content/60 mt-3">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
