import React from 'react';

const FamiliarisationPolicy = () => {
  return (
   <div className="flex justify-center items-center">
    <div className="max-w-7xl w-full">
     <div className=" min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-sm">
        
        {/* Main Title Badge */}
        <div className="inline-block px-4 py-1 mb-6" style={{ backgroundColor: '#43bfb1' }}>
          <h1 className="text-white font-bold text-sm uppercase tracking-wide">
            Policy on Familiarisation Programme
          </h1>
        </div>

        {/* Intro Statement */}
        <p className="text-xl font-bold mb-8 leading-snug">
          We are a very subtle organization and we like to create examples from our work, 
          we are more practical than any industry providing our scope of services.
        </p>

        {/* Content Sections */}
        <section className="space-y-6 text-sm leading-relaxed text-gray-600">
          <div>
            <h2 className="font-bold text-gray-900 mb-2">Preamble</h2>
            <p>
              Regulation 25(7) of the SEBI (LODR) Regulations, 2015 inter-alia stipulates that the Company 
              shall familiarize the Independent Directors with the Company, their roles, rights, 
              responsibilities in the Company, nature of the Industry in which the Company operates, 
              business model of the Company, etc., through various programmes.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-2">Purpose and Objective</h2>
            <p>
              The familiarisation programme is structured to assist the Independent Directors to 
              understand the Company and its business so as to enable him in effective discharge of his duties.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-2">Overview of the Familiarisation process</h2>
            <p className="mb-3">
              At the time of the appointment, the Independent Directors are informed about their role and 
              responsibilities and are given an overview of business, operations and business model of the 
              Company including an overview on Power, Sponge Iron and Steel Industry Sector. Immediately 
              after appointment Independent Director are also provided with copies of the following documents:
            </p>
            <ul className="list-none space-y-1 pl-1">
              <li>A) Annual Reports of the Company of the last three years;</li>
              <li>B) Criteria of Independence applicable on Independent Directors as per the Regulation 16(b) of the SEBI (LODR) Regulations, 2015 and the Companies Act, 2013</li>
              <li>C) Copies of code of conduct and Ethics for Board Members, Code for Prevention of Insider Trading in Vaswani Industries Limited Equity Shares/Securities and other policies.</li>
              <li>D) Regular Familiarisation modules Presentations on the business and performance of the Company are made at the Board Meetings to familiarize the Independent Directors with the strategy, operations and functions of the Company.</li>
              <li>E) Independent Directors have the freedom to interact with the Companys management during the Board/ Committee of Directors meetings or otherwise.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-2">Board Members are provided with following Information:</h2>
            <ul className="list-none space-y-1 pl-1">
              <li>A) Each director of the Company has complete access to any information relating to the Company.</li>
              <li>B) The Board members are provided with internal policies to enable them to familiarize with the Company’s procedures and practices.</li>
              <li>C) Board Members are promptly updated on any change and new development with regard to relevant regulatory requirement such as SEBI regulations, Companies Act etc.</li>
              <li>D) Familiarisation programmes are also proposed to be conducted on need basis during the term of the directors.</li>
              <li>E) The Board members are also made aware about the compliances applicable on the Company by way of quarterly compliances report.</li>
              <li>F) Need Based training is provided to the Board Members on various matters. The Board Members based on their requirement attend various seminars, conferences, training programmes from time to time.</li>
              <li>G) The Board members are also encouraged to advise the Company to adopt further programmes for their familiarization with the Company.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-2">Disclosure of the Policy:</h2>
            <p>This policy shall be uploaded on the Companys website for public information.</p>
          </div>

          <div>
            <h2 className="font-bold text-gray-900 mb-2">Review of the Program:</h2>
            <p>
              The Board will review this program and make revisions as may be required. During the Financial 
              Year 2021-2022, VIL has organized a programme for the Independent Directors on March 11.03.2022
            </p>
          </div>
        </section>

        {/* Data Table */}
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border-collapse border" style={{ borderColor: '#43bfb1' }}>
            <tbody className="text-xs sm:text-sm">
              <tr className="border-b" style={{ borderColor: '#43bfb1' }}>
                <td className="p-4 border-r font-semibold w-1/2" style={{ borderColor: '#43bfb1' }}>
                  Details of Familiarisation Programmes imparted to Independent Directors Number of programmes attended by Independent Directors (during the year and on a cumulative basis till date)
                </td>
                <td className="p-4">
                  Various areas including Overview of Business Activities & Financial Status of the Company, Power & Steel Sector Scenario and Role & Responsibilities of Board & Independent Directors as per Companies Act, 2013 and SEBI (LODR) Regulations, 2015.
                </td>
              </tr>
              <tr className="border-b" style={{ borderColor: '#43bfb1' }}>
                <td className="p-4 border-r font-semibold" style={{ borderColor: '#43bfb1' }}>
                  Number of programmes attended by Independent Directors (during the year and on a cumulative basis till date)
                </td>
                <td className="p-4">
                  During the Year only one programme attended by the Independent director
                </td>
              </tr>
              <tr className="border-b" style={{ borderColor: '#43bfb1' }}>
                <td className="p-4 border-r font-semibold" style={{ borderColor: '#43bfb1' }}>
                  Number of hours spent by Independent Directors in such programmes (during the year and on cumulative basis till date)
                </td>
                <td className="p-4">
                  Around 2 hours 30 minutes
                </td>
              </tr>
              <tr>
                <td className="p-4 border-r font-semibold" style={{ borderColor: '#43bfb1' }}>
                  Purpose of Programme
                </td>
                <td className="p-4 uppercase">
                  Project Expansion
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
   </div>
   </div>
  );
};

export default FamiliarisationPolicy;