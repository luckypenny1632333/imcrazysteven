// @flow strict

import * as React from 'react';
import Link from "next/link";
import { FaExternalLinkAlt } from 'react-icons/fa';

function CertificateCard({ certification }) {
  const { title, issuedDate, institution, link, description } = certification;

  return (
    <div className="bg-[#1a1443] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#16f2b3]/20 border border-[#1a1443] hover:border-[#16f2b3]/40 h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-[#16f2b3] text-sm mb-1">{institution}</p>
          <p className="text-gray-400 text-sm">{issuedDate}</p>
        </div>
        
        {description && (
          <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        )}
        
        {link && (
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-2 text-[#16f2b3] hover:text-white text-sm transition-colors duration-300"
          >
            View Certificate
            <FaExternalLinkAlt size={12} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
