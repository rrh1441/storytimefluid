// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { BookOpen, Mail } from "lucide-react"; // Only import needed icons

const Footer = () => {
  return (
    <footer className="bg-[#FEF7CD]/40 pt-16 pb-12 border-t border-[#06D6A0]/20 mt-auto">
      <div className="container mx-auto px-6"> {/* Outer div inside footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {/* Grid div */}
          {/* Logo Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1"> {/* Logo column div */}
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-6 w-6 text-[#8A4FFF]" />
              <span className="text-xl font-display font-bold text-[#4FB8FF]">StoryTime</span>
            </Link>
            <p className="text-[#6b7280] mb-4 text-sm">
              Create magical, personalized children's stories with AI assistance and bring them to life with your own voice.
            </p>
          </div> {/* Closes Logo column div */}

          {/* Product Links Column */}
          <div> {/* Product links column div */}
            <h3 className="text-sm font-semibold text-[#FF9F51] uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li> <a href="/#how-it-works" className="text-[#6b7280] hover:text-[#8A4FFF] transition-colors text-sm"> How It Works </a> </li>
              <li> <Link to="/create-story" className="text-[#6b7280] hover:text-[#8A4FFF] transition-colors text-sm"> Create Story </Link> </li>
              <li> <Link to="/stories" className="text-[#6b7280] hover:text-[#8A4FFF] transition-colors text-sm"> Story Library </Link> </li>
              <li> <a href="mailto:support@simpleappsgroup.com" className="text-[#6b7280] hover:text-[#8A4FFF] transition-colors flex items-center space-x-1 text-sm"> <Mail className="h-4 w-4" /> <span>Contact Us</span> </a> </li>
            </ul>
          </div> {/* Closes Product links column div */}
        </div> {/* Closes Grid div */}

        {/* Bottom Copyright Section */}
        <div className="border-t border-[#06D6A0]/20 pt-8"> {/* Copyright div */}
          <p className="text-[#6b7280] text-sm text-center">
            &copy; {new Date().getFullYear()} StoryTime. All rights reserved. Made with Magic ✨.
          </p>
          {/* --- The entire multi-line comment block from lines 39-44 in original is REMOVED --- */}
        </div> {/* Closes Copyright div */}
      </div> {/* Closes container div */}
    </footer>
  );
};

export default Footer;