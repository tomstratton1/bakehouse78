import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <section className="text-center">
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto px-4 mt-6 mb-8">
        <ul className="flex flex-wrap justify-center items-center gap-6 text-lg text-charcoal">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 text-pink-500" />
            <a
              href="https://www.instagram.com/bakehouse.78/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @bakehouse.78
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTiktok} className="w-8 h-8 text-black" />
            <a
              href="https://www.tiktok.com/@bakehouse.78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @bakehouse.78
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faFacebook} className="w-8 h-8 text-blue-700" />
            <a
              href="https://www.facebook.com/hashtag/bakehouse78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
