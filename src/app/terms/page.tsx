import moment from 'moment';

export default function Page() {
  const effectiveDate = moment('2023-07-19');

  const terms = [
    {
      heading: '1. Scope of Services',
      children: [
        {
          content:
            'Durrrian provides software design and coding services for software projects. These services may include but are not limited to, website design, mobile application development, software consultation, and project management. The specifics of the services to be provided will be outlined in a separate agreement between Durrrian and the client.',
        },
      ],
    },
    {
      heading: '2. Eligibility',
      children: [
        {
          content:
            'By using our Services, you represent and warrant that you have the legal capacity and authority to enter into this Agreement and that you are at least 18 years old. If you are accessing or using our Services on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to this Agreement.',
        },
      ],
    },
    {
      heading: '3. Engagement and Payment Terms',
      children: [
        {
          content:
            "The engagement and payment terms for Durrrian's services will be outlined in a separate agreement or contract between Durrrian and the client. These terms may include project milestones, payment schedules, deliverables, and any other relevant details.",
        },
      ],
    },
    {
      heading: '4. Intellectual Property Rights',
      children: [
        {
          content:
            'Durrrian retains all intellectual property rights, including copyrights, in any software, designs, code, or other deliverables created as part of the Services, unless otherwise agreed upon in writing. The client shall have a non-exclusive, non-transferable license to use the deliverables for their intended purpose.',
        },
      ],
    },
    {
      heading: '5. Confidentiality',
      children: [
        {
          content:
            "Durrrian agrees to treat all information provided by the client as confidential and will not disclose it to any third party without the client's prior written consent, except as required by law.",
        },
      ],
    },
    {
      heading: '6. Limitation of Liability',
      children: [
        {
          content:
            'Durrrian will make reasonable efforts to provide high-quality services; however, we do not guarantee the accuracy, completeness, or reliability of any deliverables or the suitability of the Services for a particular purpose. In no event shall Durrrian be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our Services.',
        },
      ],
    },
    {
      heading: '7. Termination',
      children: [
        {
          content:
            'Either party may terminate the engagement or this Agreement for any reason by providing written notice to the other party. Upon termination, the client shall pay any outstanding fees and expenses incurred up to the termination date.',
        },
      ],
    },
    {
      heading: '8. Governing Law and Jurisdiction',
      children: [
        {
          content:
            'This Agreement shall be governed by and construed in accordance with the laws of Indonesia. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts in Indonesia.',
        },
      ],
    },
    {
      heading: '9. Amendments',
      children: [
        {
          content:
            'Durrrian reserves the right to modify, amend, or update this Agreement at any time. We will provide notice of any material changes to this Agreement through our website or other means. Your continued use of the Services after such notice constitutes your acceptance of the modified Agreement.',
        },
      ],
    },
    {
      heading: '10. Entire Agreement',
      children: [
        {
          content:
            'This Agreement, along with any separate agreement or contract between Durrrian and the client, constitutes the entire agreement between the parties regarding the subject matter herein and supersedes all prior or contemporaneous agreements, understandings, and representations.',
        },
      ],
    },
  ];

  return (
    <main className="py-20 px-4 w-full max-w-[1000px] mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Terms and Conditions of Durrrian</h1>
        <h2 className="text-lg">
          Effective Date: {effectiveDate.format('DD MMMM YYYY')}
        </h2>
      </header>

      {terms.map(({ heading, children }, i) => {
        return (
          <section key={i} className="space-y-2">
            <h3 className="font-medium text-lg">{heading}</h3>

            {children.map(({ content }, i) => {
              return (
                <p key={`${heading}-${i}`} className="text-justify">
                  {content}
                </p>
              );
            })}
          </section>
        );
      })}

      <p>
        By using our Services, you acknowledge that you have read, understood,
        and agreed to be bound by this Agreement.
      </p>
    </main>
  );
}
