import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const IndexPage = () => {
  const [formStep, setFormStep] = React.useState(0);
  useEffect(() => {
    document.body.style.backgroundColor = "#14532d";

    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, []);

  const { watch } = useForm();
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderButton = () => {
    if (formStep > 5) {
      return undefined;
    } else if (formStep === 5) {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      );
    }
  };
  return (
    <div className="h-[88.8vh] bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "50vh",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-16 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Intern's <span className="text-yellow-500">Work Search </span>
        </h1>
        <p className="text-green-200 mt-2">Submit your project here !!</p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form>
            {formStep === 0 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="Contributor's name"></label>
                <input
                  type="text"
                  id="Contributor's Name"
                  name="Contributor's Name"
                  className="text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                  placeholder="Contributor's Name"
                />
              </section>
            )}
            {formStep === 1 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">Mentor Details</h2>
                <label htmlFor="Mentor"></label>
                <input
                  type="text"
                  id="Mentor"
                  name="Mentor"
                  className="text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                  placeholder="Mentor"
                />
              </section>
            )}
            {formStep === 2 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">Project Details</h2>
                <label htmlFor="Project Name"></label>
                <input
                  type="text"
                  id="Project Name"
                  name="Project Name"
                  className="text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                  placeholder="Project Name"
                />
              </section>
            )}
            {formStep === 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">Description</h2>
                <label htmlFor="Description"></label>
                <input
                  type="text"
                  id="Description"
                  name="Short Description"
                  className="text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                  placeholder="Short Description"
                />
              </section>
            )}
            {formStep === 4 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">Description</h2>
                <label htmlFor="Keywords"></label>
                <input
                  type="text"
                  id="keywords"
                  name="Tags/Keywords"
                  className="text-input outline-none bg-gray-100 w-[100%] p-4 rounded-md"
                  placeholder="Tags/Keywords"
                />
              </section>
            )}
            {formStep === 5 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Legal Information
                </h2>
                <div className="block mt-6">
                  <input
                    name="toc"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <div className="block mt-6">
                  <input
                    name="pp"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
              </section>
            )}
            {formStep === 6 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Thank you for submitting the project
                </h2>
                <h3 className="font-semibold mb-8">
                  The Project has been submitted for approval,once approved the
                  project will be visible to search. In case the project is not
                  approved in 7 days,please contact{" "}
                  <u>fakabbir.amin@siemens.com</u>.
                </h3>
              </section>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
