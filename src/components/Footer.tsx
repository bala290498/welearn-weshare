import { Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 md:py-10 px-4">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 
              className="text-2xl font-bold mb-4 italic uppercase"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              <span className="block leading-tight" style={{ color: '#004aad' }}>We Learn</span>
              <span className="block leading-tight" style={{ color: '#00bf63' }}>We Share</span>
            </h3>
            <p className="text-sm">Learn Together. Grow Together.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#courses" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Courses
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#talent-portal" className="hover:text-white transition">
                  Talent Portal
                </a>
              </li>
              <li>
                <a href="/become-trainer" className="hover:text-white transition">
                  Become a Trainer
                </a>
              </li>
              <li>
                <a href="/opportunities" className="hover:text-white transition">
                  Opportunities
                </a>
              </li>
              <li>
                <a href="/community-voice" className="hover:text-white transition">
                  Community Voice
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} WeLearnWeShare. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#terms" className="text-sm hover:text-white transition">
                Terms
              </a>
              <a href="#privacy" className="text-sm hover:text-white transition">
                Privacy
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#twitter"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

