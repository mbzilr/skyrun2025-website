import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const eventDateUTC = new Date("2026-01-30T20:00:00Z").getTime(); // Ubah menjadi Tanggal sebenarnya.
  const eventDate = new Date(eventDateUTC - 7 * 60 * 60 * 1000); // Dalam WIB.
  const [timeRemaining, setTimeRemaining] = useState(
    eventDate - new Date().getTime()
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = Math.max(prevTime - 1000, 0);
        if (newTime === 0) clearInterval(countdownInterval);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col items-center justify-center md:px-6 md:py-6">
      <div className="bg-stone-100 p-4 md:p-8 mb-8 md:mb-0 rounded-lg shadow-lg w-full max-w-xs sm:max-w-lg text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          Waktu Tersisa:
        </h2>
        {timeRemaining > 0 ? (
          <div className="grid grid-cols-2 sm:flex sm:flex-nowrap sm:space-x-4 gap-x-4 gap-y-2 justify-center items-center">
            {/* Days */}
            <div className="flex flex-col items-center w-20 sm:w-auto">
              <span className="text-4xl sm:text-5xl font-bold">
                {String(days).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Hari</span>
            </div>
            <span className="text-4xl sm:text-5xl font-bold hidden sm:block">
              :
            </span>

            {/* Hours */}
            <div className="flex flex-col items-center w-20 sm:w-auto">
              <span className="text-4xl sm:text-5xl font-bold">
                {String(hours).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Jam</span>
            </div>
            <span className="text-4xl sm:text-5xl font-bold hidden sm:block">
              :
            </span>

            {/* Minutes */}
            <div className="flex flex-col items-center w-20 sm:w-auto">
              <span className="text-4xl sm:text-5xl font-bold">
                {String(minutes).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Menit</span>
            </div>
            <span className="text-4xl sm:text-5xl font-bold hidden sm:block">
              :
            </span>

            {/* Seconds */}
            <div className="flex flex-col items-center w-20 sm:w-auto">
              <span className="text-4xl sm:text-5xl font-bold">
                {String(seconds).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Detik</span>
            </div>
          </div>
        ) : (
          <p className="text-lg sm:text-xl font-semibold text-black mt-3 sm:mt-4">
            This event has concluded.
          </p>
        )}
      </div>
    </div>
  );
}
