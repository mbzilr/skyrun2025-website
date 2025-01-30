import CountdownTimer from "./ui/CountdownTimer";

export default function Main() {
  return (
    <div className="p-2" id="main-body">
      {/* Header of SKYRUN 2025 */}
      <div className="text-center text-4xl font-black">
        <h1 className="md:text-7xl">SKYRUN 2025</h1>
        <h2 className="text-2xl md:text-4xl">Hari, XX BULAN 2025</h2>
      </div>
      {/* Countdown Timer */}  
        <CountdownTimer />
      {/* Explanation of Event */}
      <div className="px-8 md:px-72 md:text-lg text-sm">
        <p className="font-semibold">
          <b>SKYRUN</b> merupakan suatu program kerja <b> Sie. Olahraga OSIS Gardika
          Mahawira SMA Labschool Kebayoran </b> yang merupakan acara FUN RUN dengan
          jarak rute sejauh 5 kilometer. <br /> <br />
          Acara ini terbuka bagi masyarakat umum.
          <b> SKYRUN</b> diselenggarakan secara berkala oleh murid <b> SMA Labschool
          Kebayoran </b> sejak tahun 2015 dan berkembang secara progresif seiring
          berjalannya waktu dengan inovasi dan ide-ide kreatif yang muncul. <br />
          Pada
          tahun 2025 ini, SKYRUN hadir dengan inovasi baru untuk memperbesar
          skala acara dengan menyelenggarakan SKYRUN 2025 di Gelora Bung Karno. <br />
          Kegiatan ini diharapkan dapat memberikan dampak positif serta
          pengalaman yang tak terlupakan bagi peserta dan penyelenggara secara
          keseluruhan.
        </p>
      </div>
      {/* Venue */}

      {/*  Lomba best costume */}

      {/* Registration card */}

      {/* Route (Rute) */}

      {/* Racepack Kit */}

      {/* Doorprize */}

      {/* Gallery */}

      {/* Sponsors */}

    </div>
  );
}
