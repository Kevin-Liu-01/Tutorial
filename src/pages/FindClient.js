import "../App.css";
import React, { useEffect, useState } from "react";
import Constants from "./config";
import axios from "axios";
import Navbar from "../elements/Navbar";

function FindClient() {
  const [initialList, setInitialList] = useState([]);
  const [gridNum, setGridNum] = useState(3);

  //menu states
  const [menuState, setMenuState] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(true);
  const [daysController, setDaysController] = useState(true);
  const [subjectController, setSubjectController] = useState(true);
  const [virtController, setVirtController] = useState(true);
  const [timeController, setTimeController] = useState(true);

  //Day states
  const [monday, setMon] = useState(false);
  const [tuesday, setTue] = useState(false);
  const [wednesday, setWed] = useState(false);
  const [thursday, setThu] = useState(false);
  const [friday, setFri] = useState(false);
  const [saturday, setSat] = useState(false);
  const [sunday, setSun] = useState(false);
  //subject states
  const [math, setMATH] = useState(false);
  const [phys, setPHYS] = useState(false);
  const [chem, setCHEM] = useState(false);
  const [bio, setBIO] = useState(false);
  const [eng, setENG] = useState(false);
  const [cs, setCS] = useState(false);
  const [ush, setUSH] = useState(false);
  //time-of-day states
  const [morn, setMorn] = useState(false);
  const [noon, setNoon] = useState(false);
  const [evening, setEve] = useState(false);
  //virtual or in person states
  const [virtual, setVirtual] = useState(false);
  const [person, setPerson] = useState(false);

  function sortAscending() {
    const tempArray = initialList;
    tempArray.sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
    setMenuState(false);
    setInitialList(tempArray);
  }
  function sortDescending() {
    const tempArray = initialList;
    tempArray.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
    setMenuState(false);
    setInitialList(tempArray);
  }

  function handleMenu() {
    if (gridNum === 3) {
      setGridNum(2);
    } else {
      setGridNum(3);
    }
  }

  const TutorComponent = (props) => {
    return (
      <div class="flex ">
        <div class="bg-gray-50 shadow-lg overflow-hidden rounded-lg grow">
          <div class="px-4 py-5 sm:px-6 shadow-lg bg-white">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {props.data.name.toString()}
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and contact info.
            </p>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              ZIP Code: {props.data.zip}
            </p>
          </div>
          <div class="border-t border-gray-200">
            <dl class="grow">
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Meeting</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.data.virt_status ? "In-Person" : "Virtual"}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Subject</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.data.subj_status}
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Email</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.data.email}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Rate/Hour</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  ${props.data.rate}/hour
                </dd>
              </div>

              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-7 sm:gap-2 sm:px-6">
                <div
                  class={
                    props.data.mon_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Mon
                </div>
                <div
                  class={
                    props.data.tues_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Tue
                </div>
                <div
                  class={
                    props.data.weds_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Wed
                </div>
                <div
                  class={
                    props.data.thurs_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Thu
                </div>
                <div
                  class={
                    props.data.fri_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Fri
                </div>
                <div
                  class={
                    props.data.sat_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Sat
                </div>
                <div
                  class={
                    props.data.sun_status
                      ? "text-xs text-center text-indigo-600 overflow-hidden font-semibold"
                      : "text-gray-400 text-xs text-center overflow-hidden"
                  }
                >
                  Sun
                </div>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div
                  class={
                    props.data.morn_status
                      ? "text-indigo-600 text-center text-base font-semibold"
                      : "text-gray-400 text-center"
                  }
                >
                  Morning
                </div>
                <div
                  class={
                    props.data.noon_status
                      ? "text-indigo-600 text-center text-base font-semibold"
                      : "text-gray-400 text-center"
                  }
                >
                  Noon
                </div>
                <div
                  class={
                    props.data.evening_status
                      ? "text-indigo-600 text-center text-base font-semibold"
                      : "text-gray-400 text-center"
                  }
                >
                  Evening
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  grow">
                <dt class="text-sm font-medium text-gray-500 ">About</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                  {props.data.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  };
  function MapTutors() {
    if (initialList.length > 0) {
      return initialList.map((currentTutor) => {
        return (
          <TutorComponent
            data={currentTutor}
            deleteRecord={currentTutor}
            key={currentTutor._id}
          >
            {currentTutor}
          </TutorComponent>
        );
      });
    } else {
      return (
        <div class="col-span-3 text-center mt-96 text-white">
          <div class=" font-extrabold text-2xl">Error 01: </div>
          <div class="text-xl ">
            Please wait for the server to load our tutors. Thank you!
          </div>
        </div>
      );
    }
  }
  function FilteredList() {
    return initialList
      .filter(
        (tutor) =>
          (monday && tutor.mon_status === true) ||
          (tuesday && tutor.tues_status === true) ||
          (wednesday && tutor.weds_status === true) ||
          (thursday && tutor.thurs_status === true) ||
          (friday && tutor.fri_status === true) ||
          (saturday && tutor.sat_status === true) ||
          (sunday && tutor.sun_status === true) ||
          (math && tutor.subj_status === "Math") ||
          (bio && tutor.subj_status === "Biology") ||
          (cs && tutor.subj_status === "Computer Science") ||
          (ush && tutor.subj_status === "U.S. History") ||
          (phys && tutor.subj_status === "Physics") ||
          (chem && tutor.subj_status === "Chemistry") ||
          (eng && tutor.subj_status === "English") ||
          (morn && tutor.morn_status === true) ||
          (noon && tutor.noon_status === true) ||
          (evening && tutor.evening_status === true) ||
          (virtual && tutor.virt_status === false) ||
          (person && tutor.virt_status === true)
      )

      .map((currentTutor) => {
        return (
          <TutorComponent
            data={currentTutor}
            deleteRecord={currentTutor}
            key={currentTutor._id}
          >
            {currentTutor}
          </TutorComponent>
        );
      });
  }

  function ListBody() {
    if (
      monday ||
      tuesday ||
      wednesday ||
      thursday ||
      friday ||
      saturday ||
      sunday ||
      math ||
      cs ||
      bio ||
      phys ||
      chem ||
      ush ||
      eng ||
      morn ||
      noon ||
      evening ||
      virtual ||
      person
    ) {
      return <FilteredList />;
    } else {
      return <MapTutors />;
    }
  }

  // This method will get the data from the database.
  useEffect(() => {
    axios
      .get(`${Constants.SERVER_HOST}/client`)
      .then((response) => {
        console.log(
          `/client/ returned response from: ${Constants.SERVER_HOST}/client/`
        );
        setInitialList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className=" min-h-screen">
      <Navbar page="FindClient" />
      <div class="bg-gray-100 ">
        <div>
          {/*Mobile filter dialog*/}
          <div
            class={mobileFilter ? "invisible" : "relative z-40 lg:hidden"}
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25"></div>

            <div class="fixed inset-0 flex z-40">
              <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div class="px-4 flex items-center justify-between">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFilter(!mobileFilter)}
                    class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/*Filters */}
                <form class="mt-4 border-t border-gray-200">
                  <div class="border-t border-gray-200 px-4 py-6">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        class="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">
                          {" "}
                          Days Available{" "}
                        </span>
                        <span class="ml-6 flex items-center">
                          <div onClick={() => setDaysController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setDaysController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        daysController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="Monday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setMon(!monday)}
                          ></input>
                          <label
                            for="filter-color-0"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Monday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="Tuesday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setTue(!tuesday)}
                          ></input>
                          <label
                            for="filter-color-1"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            Tuesday
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="}
                            Wednesday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setWed(!wednesday)}
                          ></input>
                          <label
                            for="filter-color-2"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Wednesday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="day"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setThu(!thursday)}
                          ></input>
                          <label
                            for="filter-color-3"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Thursday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-4"
                            name="color[]"
                            value="Friday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setFri(!friday)}
                          ></input>
                          <label
                            for="filter-color-4"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Friday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setSat(!saturday)}
                          ></input>
                          <label
                            for="filter-color-5"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Saturday{" "}
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setSun(!sunday)}
                          ></input>
                          <label
                            for="filter-color-5"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Sunday{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        class="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900"> Subject</span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setSubjectController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setSubjectController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        subjectController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-6">
                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-0"
                            name="color[]"
                            value="Mathematics"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setMATH(!math)}
                          ></input>
                          <label
                            for="filter-color-0"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            Mathematics
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-1"
                            name="color[]"
                            value="Chemistry"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setCHEM(!chem)}
                          ></input>
                          <label
                            for="filter-mobile-color-1"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            Chemistry
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="Physics"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setPHYS(!phys)}
                          ></input>
                          <label
                            for="filter-color-2"
                            class="ml-3  min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Physics{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="Bio"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setBIO(!bio)}
                          ></input>
                          <label
                            for="filter-mobile-color-3"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Biology{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-4"
                            name="color[]"
                            value="English"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setENG(!eng)}
                          ></input>
                          <label
                            for="filter-mobile-color-4"
                            class="ml-3  min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            English{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-5"
                            name="color[]"
                            value="CS"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setCS(!cs)}
                          ></input>
                          <label
                            for="filter-mobile-color-5"
                            class="ml-3  min-w-0 flex-1 text-gray-600"
                          >
                            Computer Science
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-6"
                            name="color[]"
                            value="USH"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setUSH(!ush)}
                          ></input>
                          <label
                            for="filter-mobile-color-6"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            U.S. History{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-6">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        class="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">
                          {" "}
                          Times Available{" "}
                        </span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setTimeController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setTimeController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        timeController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-0"
                            name="color[]"
                            value="Morning"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setMorn(!morn)}
                          ></input>
                          <label
                            for="filter-mobile-color-0"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Morning (7 AM - 12 PM)
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-1"
                            name="color[]"
                            value="Noon"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setNoon(!noon)}
                          ></input>
                          <label
                            for="filter-mobile-color-1"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            Noon (12 PM - 3 PM)
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-2"
                            name="color[]"
                            value="Evening"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setEve(!evening)}
                          ></input>
                          <label
                            for="filter-mobile-color-2"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Evening (3 PM - 9 PM)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-6">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        class="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">
                          {" "}
                          Virtual or In-Person{" "}
                        </span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setVirtController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setVirtController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        virtController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-mobile-color-0"
                            name="color[]"
                            value="Virtual"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setVirtual(!virtual)}
                          ></input>
                          <label
                            for="filter-mobile-color-0"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            {" "}
                            Virtual Tutoring
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="In-Person"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setPerson(!person)}
                          ></input>
                          <label
                            for="filter-color-1"
                            class="ml-3 min-w-0 flex-1 text-gray-600"
                          >
                            In-Person Tutoring
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/*Browser*/}
          <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-300">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                Find a Client
              </h1>

              <div class="flex items-center">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      onClick={() => setMenuState(!menuState)}
                      class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      Sort
                      <svg
                        class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    class={
                      menuState
                        ? "origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 opacity-100 scale-100"
                        : "origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in duration-75 opacity-0  scale-95"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div class="py-1" role="none">
                      {/*
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                */}

                      <button
                        onClick={() => sortAscending()}
                        class="text-gray-500 hover:bg-gray-100 hover:text-black block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        {" "}
                        Rate/Hour: Low to High{" "}
                      </button>

                      <button
                        onClick={() => sortDescending()}
                        class="text-gray-500 hover:bg-gray-100 hover:text-black block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        {" "}
                        Rate/Hour: High to Low{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  class="p-2 -m-2 l-3 ml-2 mr-2 text-gray-400 hover:text-gray-500"
                  onClick={() => handleMenu()}
                >
                  <span class="sr-only">View grid</span>
                  {/* Heroicon name: solid/view-grid */}
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="p-2 -m-2 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFilter(!mobileFilter)}
                >
                  <span class="sr-only">Filters</span>

                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" class="pt-6 pb-24">
              <h2 id="products-heading" class="sr-only">
                Filters
              </h2>

              <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/*Filters */}
                <form class="hidden lg:block">
                  <div class="border-b border-gray-200 py-6">
                    <h3 class="-my-3 flow-root">
                      <button
                        type="button"
                        class="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">
                          {" "}
                          Days Available{" "}
                        </span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setDaysController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setDaysController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        daysController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="Monday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setMon(!monday)}
                          ></input>
                          <label
                            for="filter-color-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Monday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="Tuesday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setTue(!tuesday)}
                          ></input>
                          <label
                            for="filter-color-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Tuesday
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setWed(!wednesday)}
                          ></input>
                          <label
                            for="filter-color-2"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Wednesday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setThu(!thursday)}
                          ></input>
                          <label
                            for="filter-color-3"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Thursday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-4"
                            name="color[]"
                            value="green"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setFri(!friday)}
                          ></input>
                          <label
                            for="filter-color-4"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Friday{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setSat(!saturday)}
                          ></input>
                          <label
                            for="filter-color-5"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Saturday{" "}
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setSun(!sunday)}
                          ></input>
                          <label
                            for="filter-color-5"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Sunday{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="border-b border-gray-200 py-6">
                    <h3 class="-my-3 flow-root">
                      <button
                        type="button"
                        class="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900"> Subject</span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setSubjectController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setSubjectController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        subjectController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="Monday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setMATH(!math)}
                          ></input>
                          <label
                            for="filter-color-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Mathematics
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="Tuesday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setCHEM(!chem)}
                          ></input>
                          <label
                            for="filter-color-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Chemistry
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setPHYS(!phys)}
                          ></input>
                          <label
                            for="filter-color-2"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Physics{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setBIO(!bio)}
                          ></input>
                          <label
                            for="filter-color-3"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Biology{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-4"
                            name="color[]"
                            value="green"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setENG(!eng)}
                          ></input>
                          <label
                            for="filter-color-4"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            English{" "}
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setCS(!cs)}
                          ></input>
                          <label
                            for="filter-color-5"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Computer Science
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setUSH(!ush)}
                          ></input>
                          <label
                            for="filter-color-5"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            U.S. History{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200 py-6">
                    <h3 class="-my-3 flow-root">
                      <button
                        type="button"
                        class="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">
                          {" "}
                          Times Available{" "}
                        </span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setTimeController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setTimeController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        timeController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="Monday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setMorn(!morn)}
                          ></input>
                          <label
                            for="filter-color-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Morning (7 AM - 12 PM)
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="Tuesday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setNoon(!noon)}
                          ></input>
                          <label
                            for="filter-color-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            Noon (12 PM - 3 PM)
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setEve(!evening)}
                          ></input>
                          <label
                            for="filter-color-2"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Evening (3 PM - 9 PM)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200 py-6">
                    <h3 class="-my-3 flow-root">
                      <button
                        type="button"
                        class="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span class="font-medium text-gray-900">
                          {" "}
                          Virtual or In-Person{" "}
                        </span>

                        <span class="ml-6 flex items-center ">
                          <div onClick={() => setVirtController(true)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={() => setVirtController(false)}>
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </h3>
                    <div
                      class={
                        virtController
                          ? "pt-6 transition ease-out duration-100 opacity-100 scale-100"
                          : "pt-6 transition ease-in duration-75 invisible h-0  scale-95"
                      }
                      id="filter-section-0"
                    >
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="Monday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setVirtual(!virtual)}
                          ></input>
                          <label
                            for="filter-color-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            {" "}
                            Virtual Tutoring
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="Tuesday"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 hover:bg-indigo-500  focus:ring-indigo-500"
                            onClick={() => setPerson(!person)}
                          ></input>
                          <label
                            for="filter-color-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            In-Person Tutoring
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Grid*/}
                <div class="lg:col-span-3">
                  <div class="border-4 border-dashed border-gray-200 rounded-lg h-[800px] lg:h-[1140px] bg-gradient-to-r from-indigo-500 to-violet-500 overflow-auto ">
                    <div
                      class={
                        gridNum === 2
                          ? "grid grid-cols-2 gap-4 p-4 "
                          : "grid sm:grid-cols-3 grid-cols-1 gap-4 p-4 "
                      }
                    >
                      <ListBody />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default FindClient;
