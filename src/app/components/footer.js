import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt  } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-gradient-to-r from-slate-700 to-slate-950">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold">Bab ul Islam School System</h3>
            <p className="mt-2 text-gray-400">
            J9M8+FR5, karol war, Karol Lahore, Punjab, Pakistan, Lahore, Pakistan
            </p>
            <p className="mt-2 text-gray-400">Phone: (92) 349 3198986</p>
            <p className="mt-2 text-gray-400">Landline: (92) 42 36821222</p>
            <p className="mt-2 text-gray-400">Email: babulislam10097@gmail.com</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/">
                  <div className="text-gray-400 hover:text-white ">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/admissions">
                  <div className="text-gray-400 hover:text-white">Admission</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-gray-400 hover:text-white">Contact</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="text-gray-400 hover:text-white">About Us</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/babulislamschoolsystem10097"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://maps.app.goo.gl/5zZ295vWqCVwYwx76"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaMapMarkerAlt  size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 mt-8 text-center text-gray-400 border-t border-gray-700">
          <p>&copy; 2024 Bab ul Islam School System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
