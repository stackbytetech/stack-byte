
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">SB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack Byte</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered landing pages for businesses. Professional, fast, and conversion-focused.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Landing Pages</li>
              <li className="text-sm text-muted-foreground">AI Design</li>
              <li className="text-sm text-muted-foreground">Conversion Optimization</li>
              <li className="text-sm text-muted-foreground">SEO Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">stackbyte.tech@gmail.com</p>
              <div className="flex space-x-4 pt-2">
                <a href="mailto:stackbyte.tech@gmail.com" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Stack Byte. All rights reserved. | 
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
