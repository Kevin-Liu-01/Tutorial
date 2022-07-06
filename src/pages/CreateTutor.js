import "../App.css";
import axios from "axios";
import Constants from "./config.js";
import React, { useState } from "react";

function CreateTutor(props) {
  //Day states
  const [monday, setMon] = useState(false);
  const [tuesday, setTue] = useState(false);
  const [wednesday, setWed] = useState(false);
  const [thursday, setThu] = useState(false);
  const [friday, setFri] = useState(false);
  const [saturday, setSat] = useState(false);
  const [sunday, setSun] = useState(false);
  //profile states
  const [subj, setSubj] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  //time-of-day states
  const [morn, setMorn] = useState(false);
  const [noon, setNoon] = useState(false);
  const [evening, setEve] = useState(false);
  //virtual or in person states
  const [virtual, setVirtual] = useState(false);
  console.log(subj);
  // This function will handle the submission.    

  async function onSubmit(e) {
    e.preventDefault();
    const name=firstName+" "+lastName
    // When post request is sent to the create url, axios will add a new tutor(newperson) to the database.
    const newTutor = {
      name: name,
      mon_status: monday,
      tues_status: tuesday,
      weds_status: wednesday,
      thurs_status: thursday,
      fri_status: friday,
      sat_status: saturday,
      sun_status: sunday,
      morn_status: morn,
      noon_status: noon,
      evening_status: evening,
      subj_status: subj,
      virt_status: virtual,
      desc: desc,
      rate: rate,
      email: email,
      zip: zip,
    };

    axios.post(`${Constants.SERVER_HOST}/tutor/add`, newTutor).then((res) => {
      console.log(res.data);
    });
    console.log("new person has been crated");

    console.log("Timer begin");

    await new Promise((resolve) => setTimeout(resolve, 4000));


    // We will empty the state after posting the data to the database
  }
  return (
    <div className=" min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class=" ">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form >
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={() =>
                            setFirst(
                              document.getElementById("first-name").value
                            )
                          }
                        />
                      </div>

                      <div class="col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={() =>
                            setLast(document.getElementById("last-name").value)
                          }
                        />
                      </div>
                      <div class="col-span-3">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Email{" "}
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            {" "}
                            Find me at:{" "}
                          </span>
                          <input
                            type="text"
                            name="Email"
                            id="Email"
                            class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="johndoe@gmail.com"
                            onChange={() =>
                              setEmail(document.getElementById("Email").value)
                            }
                          />
                        </div>
                      </div>
                      <div class="col-span-3">
                        <label
                          for="rate"
                          class="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Rate{" "}
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            {" "}
                            $/hour:{" "}
                          </span>
                          <input
                            type="number"
                            name="Rate"
                            id="Rate"
                            class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="40.00"
                            max="999"
                            onChange={() =>
                              setRate(document.getElementById("Rate").value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="Desc"
                        class="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        About{" "}
                      </label>
                      <div class="mt-1">
                        <textarea
                          id="Desc"
                          name="Desc"
                          rows="3"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="What do you want others to know about you or your services?"
                          onChange={() =>
                            setDesc(document.getElementById("Desc").value)
                          }
                        ></textarea>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                    <div class="grid grid-cols-2 gap-6">
                      <fieldset class="col-span-2 md:col-span-1">
                        <legend class="contents text-base font-medium text-gray-900">
                          Subject
                        </legend>
                        <p class="text-sm text-gray-500">
                          Select what subject you are willing to offer tutoring
                          in.
                        </p>
                        <div class="mt-4 space-y-4">
                          <div class="flex items-center">
                            <input
                              id="Mathematics"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(
                                  document.getElementById("Mathematics").id
                                )
                              }
                            />
                            <label
                              for="Mathematics"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              Mathematics{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="Chemistry"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(document.getElementById("Chemistry").id)
                              }
                            />
                            <label
                              for="Chemistry"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              Chemistry{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="Physics"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(document.getElementById("Physics").id)
                              }
                            />
                            <label
                              for="Physics"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              Physics{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="Biology"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(document.getElementById("Biology").id)
                              }
                            />
                            <label
                              for="Biology"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              Biology{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="English"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(document.getElementById("English").id)
                              }
                            />
                            <label
                              for="Friday"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              English{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="Computer Science"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(
                                  document.getElementById("Computer Science").id
                                )
                              }
                            />
                            <label
                              for="Computer Science"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              Computer Science{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="U.S. History"
                              name="Subjects"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() =>
                                setSubj(
                                  document.getElementById("U.S. History").id
                                )
                              }
                            />
                            <label
                              for="U.S. History"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              U.S. History{" "}
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset class="col-span-2 md:col-span-1">
                        <legend class="contents text-base font-medium text-gray-900">
                          Virtual/In-Person
                        </legend>
                        <p class="text-sm text-gray-500">
                          Choose whether you will tutor virtually or in-person.
                        </p>
                        <div class="mt-4 space-y-4 col-span-3">
                          <div class="flex items-center">
                            <input
                              id="Virtual"
                              name="VirtualorPerson"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() => setVirtual(false)}
                            />
                            <label
                              for="Virtual"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              Virtual{" "}
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="In-Person"
                              name="VirtualorPerson"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              onChange={() => setVirtual(true)}
                            />
                            <label
                              for="In-Person"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {" "}
                              In-Person{" "}
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  We will only use this information to verify your identity.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="country"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label
                          for="street-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autocomplete="street-address"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autocomplete="address-level2"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autocomplete="address-level1"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="postal-code"
                          class="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          maxlength="5"
                          autocomplete="postal-code"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={() =>
                            setZip(document.getElementById("postal-code").value)
                          }
                        />
                      </div>
                      <div class="col-span-6">
                        <label class="block text-sm font-medium text-gray-700">
                          {" "}
                          Upload your ID{" "}
                        </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
                          <div class="space-y-1 text-center">
                            <svg
                              class="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                              <label
                                for="file-upload"
                                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  class="sr-only"
                                />
                              </label>
                              <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                              PNG, JPG up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6"></div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Availability
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Select what times you are available to offer tutoring.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={onSubmit} action="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <fieldset>
                      <legend class="sr-only">Availability by Time</legend>
                      <div
                        class="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        Availability by Time
                      </div>
                      <div class="mt-4 space-y-4">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Morning"
                              name="Morning"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Morning"
                              class="font-medium text-gray-700"
                              onChange={() => setMorn(!morn)}
                            >
                              Morning
                            </label>
                            <p class="text-gray-500">
                              Indicate that you are available from 7 AM - 12 PM
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Noon"
                              name="Noon"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setNoon(!noon)}
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="Noon" class="font-medium text-gray-700">
                              Noon
                            </label>
                            <p class="text-gray-500">
                              Indicate that you are available from 12 PM - 3 PM
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Evening"
                              name="Evening"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setEve(!evening)}
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Evening"
                              class="font-medium text-gray-700"
                            >
                              Evening
                            </label>
                            <p class="text-gray-500">
                              Indicate that you are available from 3 PM - 9 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="contents text-base font-medium text-gray-900">
                        Availability by Week
                      </legend>
                      <p class="text-sm text-gray-500">
                        Select what days you are available to offer tutoring.
                      </p>
                      <div class="mt-4 space-y-4">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Monday"
                              name="Monday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setMon(!monday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Monday"
                              class="font-medium text-gray-700"
                            >
                              Monday
                            </label>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Tuesday"
                              name="Tuesday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setTue(!tuesday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Tuesday"
                              class="font-medium text-gray-700"
                            >
                              Tuesday
                            </label>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Wednesday"
                              name="Wednesday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setWed(!wednesday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Wednesday"
                              class="font-medium text-gray-700"
                            >
                              Wednesday
                            </label>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Thursday"
                              name="Thursday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setThu(!thursday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Thursday"
                              class="font-medium text-gray-700"
                            >
                              Thursday
                            </label>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Friday"
                              name="Friday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setFri(!friday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Friday"
                              class="font-medium text-gray-700"
                            >
                              Friday
                            </label>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Saturday"
                              name="Saturday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setSat(!saturday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Saturday"
                              class="font-medium text-gray-700"
                            >
                              Saturday
                            </label>
                          </div>
                        </div>
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="Sunday"
                              name="Sunday"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onChange={() => setSun(!sunday)}

                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="Sunday"
                              class="font-medium text-gray-700"
                            >
                              Sunday
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTutor;
