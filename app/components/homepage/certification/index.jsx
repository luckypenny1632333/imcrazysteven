'use client'
import Image from "next/image";
import { useState } from "react";
import { certifications } from "@/utils/data/certifications";
import CertificateCard from "./certificate-card";

function Certification() {
	const [showAll, setShowAll] = useState(false);
	const initialDisplayCount = 4; 

	const displayedCertifications = showAll
		? certifications
		: certifications.slice(0, initialDisplayCount);

	const toggleShowAll = () => {
		setShowAll(!showAll);
	};

	return (
		<div id="certification" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
			<Image
				src="/section.svg"
				alt="Hero"
				width={1572}
				height={795}
				className="absolute top-0 -z-10"
			/>
			<div className="flex justify-center -translate-y-[1px]">
				<div className="w-3/4">
					<div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
				</div>
			</div>

			<div className="flex justify-center my-5 lg:py-8">
				<div className="flex items-center">
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
					<span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
						Certifications
					</span>
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
				</div>
			</div>

			<div className="py-8">
				<div>
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
						{
							displayedCertifications.map(certification => (
								<div key={certification.id} identifier={`certification-${certification.id}`}>
									<CertificateCard certification={certification} />
								</div>
							))
						}
					</div>

					{certifications.length > initialDisplayCount && (
						<div className="flex justify-center mt-10">
							<button
								onClick={toggleShowAll}
								className="bg-[#1a1443] hover:bg-[#16f2b3]/20 text-white hover:text-[#16f2b3] border border-[#1a1443] hover:border-[#16f2b3]/40 px-6 py-3 rounded-md transition-all duration-300"
							>
								{showAll ? "Show Less" : "View More"}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Certification;
