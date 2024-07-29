import Image from "next/image";
import Header from "./components/Header";

// This will be our landing page
// We are creating a motivational Ai extension that will help users to stay motivated
// Users will enter times when they should be at the gym and the Ai will remind them if they are on their screen during that time

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="text-4xl font-bold text-center">Welcome to Moti Ai</h1>
          <p className="text-center">
            We are creating a motivational Ai extension that will help users to
            stay motivated
          </p>
          <p className="text-center">
            Users will enter times when they should be at the gym and the Ai
            will remind them if they are on their screen during that time
          </p>
        </div>
      </div>
    </div>
  );
}
