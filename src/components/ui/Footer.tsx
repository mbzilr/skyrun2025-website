export default function Footer() {
    return (
      <footer className="bg-stone-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-6">SMA Labschool Kebayoran's 5K Fun Run</h2>
  
          {/* Social Media Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <a
              href="#"
              className="flex items-center gap-2 text-lg hover:text-blue-400 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.5v-9.294H9.692v-3.622h3.133V8.413c0-3.1 1.893-4.788 4.658-4.788 1.324 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.122c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
              Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-lg hover:text-blue-400 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.993 9.993 0 0 1-2.828.775 4.933 4.933 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.184A4.92 4.92 0 0 0 16.616 3c-2.726 0-4.938 2.205-4.938 4.92 0 .385.045.76.126 1.12-4.102-.205-7.738-2.168-10.173-5.144a4.865 4.865 0 0 0-.666 2.473c0 1.708.87 3.216 2.188 4.096a4.903 4.903 0 0 1-2.24-.615v.061c0 2.385 1.697 4.376 3.946 4.827a4.93 4.93 0 0 1-2.233.085 4.926 4.926 0 0 0 4.604 3.417A9.87 9.87 0 0 1 0 21.54a13.933 13.933 0 0 0 7.548 2.209c9.057 0 14.009-7.498 14.009-13.99 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.557z" />
              </svg>
              Twitter
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-lg hover:text-blue-400 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.385.6.11.82-.26.82-.577v-2.176c-3.34.726-4.043-1.61-4.043-1.61-.546-1.385-1.334-1.755-1.334-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.833 2.805 1.304 3.49.997.108-.776.42-1.305.764-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.467-2.38 1.235-3.22-.124-.305-.535-1.533.118-3.19 0 0 1.007-.322 3.3 1.23.958-.266 1.987-.398 3.008-.402 1.02.004 2.05.136 3.008.402 2.293-1.552 3.298-1.23 3.298-1.23.655 1.657.244 2.885.12 3.19.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.922.43.37.81 1.102.81 2.22v3.293c0 .32.22.693.825.575C20.565 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
  
          {/* Contact Info */}
          <div className="text-center md:text-left mb-6">
            <p className="text-lg font-semibold">Contact Person</p>
            <p>Nama 1: no telp / insta or line or whatever &#40; MEDIA PARTNER &#41;</p>
            <p>Nama 2: no telp / insta or line or whatever idk &#40; FNB &#41;</p>
            <p>Nama 3: no telp / insta or line or whatever idk lol &#40; SPONSORS &#41;</p>
            <p>Malik: https://github.com/mbzilr | @malikbazilrabbani on IG. &#40; Website 💻 &#41;</p>
            <p>Email: publikskyrun@gmail.com</p>
          </div>
  
          {/* Copyright */}
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Skyrun. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  