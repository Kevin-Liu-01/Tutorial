import "../App.css";
import React from "react";
import Navbar from "../elements/Navbar";

function FindClient() {
  return (
    <div className=" min-h-screen bg-gray-100 ">
      <Navbar page="" />
      <div class="">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-300">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
              Rules
            </h1>
          </div>
          <div class="mt-4">
            <p class="mt-2">1. No blank nicknames.</p>
            <p class="mt-2">2. No inappropriate nicknames. </p>
            <p class="mt-2">3. No sexually explicit nicknames. </p>
            <p class="mt-2">4. No offensive nicknames. </p>
            <p class="mt-2">
              5. No nicknames with unusual or unreadable Unicode.{" "}
            </p>
            <p class="mt-2">
              6. Do not include inappropriate, sexually explicit, or offensive
              messaging in your profile.{" "}
            </p>
            <p class="mt-2">
              7. Membership is granted to minors (under 18 years) but only as
              tutors.
            </p>
            <p class="mt-2">
              8. Moderators reserve the right to change any profile information
              and take down profiles.{" "}
            </p>
            <p class="mt-2">
              9. Moderators reserve the right to use their own discretion
              regardless of any rule.{" "}
            </p>
            <p class="mt-2">
              10. No exploiting loopholes in the rules (please report them).{" "}
            </p>
            <p class="mt-2">
              11. Do not contact other members of Tutorial without the intention
              of seeking tutoring.{" "}
            </p>
            <p class="mt-2">12. Rules apply to clients and tutors. </p>
            <p class="mt-2">
              13. No bugs, exploits, glitches, hacks, bugs, etc.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
export default FindClient;
