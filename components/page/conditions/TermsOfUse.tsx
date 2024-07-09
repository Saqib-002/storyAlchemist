import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TermsOfUse = () => {
  return (
    <section className="p-8 md:px-20 max-w-[800px] mx-auto pt-36 leading-[2rem] text-justify">
      <div className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-8 py-8 text-light-700 backdrop-blur">
      <p className="paragraph-regular my-10 text-center text-dark-100">
        Updated: July 01, 2024
      </p>
      <h1 className="h1-bold text-center text-dark-100">Terms of Use</h1>
      <p className="paragraph-regular mx-auto my-10 max-w-[800px] text-dark-100">
        Thank you for using Documentrio!<br /><br />
        These Terms of Use apply to your use of our AI-based documentary generation services, along with any associated software applications and websites (all together,
        “Services”). These Terms form an agreement between you and Documentrio, and they include our Service Terms and important provisions for resolving disputes
        through arbitration. By using our Services, you agree to these Terms.
        <br /><br />
        If you reside in the European Economic Area, Switzerland, or the UK, your use of the Services is governed by these terms.
        <br /><br />
        Our Business Terms govern the use of our enterprise solutions, APIs, and other services for businesses and developers.
        <br /><br />
        Our Privacy Policy explains how we collect and use personal information. Although it does not form part of these Terms, it is an important document that you should 
        read. 
        </p>
        <h1 className="h1-bold text-left text-dark-100">Who We Are</h1>
        <br /><br />
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Documentrio is an AI research and deployment company. Our mission is to ensure that artificial intelligence benefits all of humanity. For more information 
        about Documentrio, please visit www.documentrio.ai
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Registration and Access</h1>
        <h2 className="h2-bold text-left text-dark-100 py-4">Minimum Age</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You must be at least 13 years old or the minimum age required in your country to consent to use the Services. If you are under 18, you must have your parent or legal
        guardian’s permission to use the Services.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-8">Registration</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You must provide accurate and complete information to register for an account to use our Services. You may not share your account credentials or make your account 
        available to anyone else and are responsible for all activities that occur under your account. If you create an account or use the Services on behalf of another 
        person or entity, you must have the authority to accept these Terms on their behalf.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Using Our Services</h1>
        <h2 className="h2-bold text-left text-dark-100 py-4">What You Can Do</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Subject to your compliance with these Terms, you may access and use our Services. In using our Services, you must comply with all applicable laws as well as our 
        Sharing & Publication Policy, Usage Policies, and any other documentation, guidelines, or policies we make available to you.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">What You Cannot Do</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You may not use our Services for any illegal, harmful, or abusive activity. For example, you may not:
        </p>
        <ul className="font-medium text-dark-100 list-disc pl-6">
          <li>Use our Services in a way that infringes, misappropriates, or violates anyone’s rights.</li>
          <li>Modify, copy, lease, sell, or distribute any of our Services.</li>
          <li>Attempt to or assist anyone to reverse engineer, decompile, or discover the source code or underlying components of our Services, including our models, 
            algorithms, or systems (except to the extent this restriction is prohibited by applicable law).</li>
          <li>Automatically or programmatically extract data or Output (defined below).</li>
          <li>Represent that Output was human-generated when it was not.</li>
          <li>Interfere with or disrupt our Services, including circumventing any rate limits or restrictions or bypassing any protective measures or safety mitigations we 
            put on our Services.</li>
          <li>Use Output to develop models that compete with Documentrio.</li>
        </ul>
        <h2 className="h2-bold text-left text-dark-100 py-4">Software</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Our Services may allow you to download software, such as mobile applications, which may update automatically to ensure you’re using the latest version. Our software 
        may include open source software that is governed by its own licenses that we’ve made available to you.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Corporate Domains</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        If you create an account using an email address owned by an organization (for example, your employer), that account may be added to the organization's business account
        with us, in which case we will provide notice to you so that you can help facilitate the transfer of your account (unless your organization has already provided 
        notice to you that it may monitor and control your account). Once your account is transferred, the organization’s administrator will be able to control your account, 
        including being able to access Content (defined below) and restrict or remove your access to the account.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Third Party Services</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Our services may include third-party software, products, or services (“Third Party Services”) and some parts of our Services, like our browse feature, may include 
        output from those services (“Third Party Output”). Third Party Services and Third Party Output are subject to their own terms, and we are not responsible for them.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Feedback</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We appreciate your feedback, and you agree that we may use it without restriction or compensation to you.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Content</h1>
        <h2 className="h2-bold text-left text-dark-100 py-4">Your Content</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You may provide input to the Services (“Input”) and receive output from the Services based on the Input (“Output”). Input and Output are collectively “Content.” 
        You are responsible for Content, including ensuring that it does not violate any applicable law or these Terms. You represent and warrant that you have all rights, 
        licenses, and permissions needed to provide Input to our Services.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Ownership of Content</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        As between you and Documentrio, and to the extent permitted by applicable law, you (a) retain your ownership rights in Input and (b) own the Output. We hereby 
        assign to you all our right, title, and interest, if any, in and to Output.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Similarity of Content</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Due to the nature of our Services and artificial intelligence generally, output may not be unique and other users may receive similar output from our Services. Our 
        assignment above does not extend to other users’ output or any Third Party Output.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Our Use of Content</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We may use Content to provide, maintain, develop, and improve our Services, comply with applicable law, enforce our terms and policies, and keep our Services safe.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Opt Out</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        If you do not want us to use your Content to train our models, you can opt out by following the instructions in this Help Center article [insert link]. Please note 
        that in some cases this may limit the ability of our Services to better address your specific use case.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Accuracy</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Artificial intelligence and machine learning are rapidly evolving fields of study. We are constantly working to improve our Services to make them more accurate, 
        reliable, safe, and beneficial. Given the probabilistic nature of machine learning, use of our Services may, in some situations, result in Output that does not 
        accurately reflect real people, places, or facts.
        <br /><br />
        When you use our Services you understand and agree:
        </p>
        <ul className="font-medium text-dark-100 list-disc pl-6">
          <li>Output may not always be accurate. You should not rely on Output from our Services as a sole source of truth or factual information, or as a substitute for 
            professional advice.</li>
          <li>You must evaluate Output for accuracy and appropriateness for your use case, including using human review as appropriate, before using or sharing Output from 
            the Services.</li>
          <li>You must not use any Output relating to a person for any purpose that could have a legal or material impact on that person, such as making credit, educational, 
            employment, housing, insurance, legal, medical, or other important decisions about them.</li>
          <li>Our Services may provide incomplete, incorrect, or offensive Output that does not represent Documentrio’s views. If Output references any third party 
            products or services, it doesn’t mean the third party endorses or is affiliated with Documentrio.</li>
        </ul>
        <h2 className="h2-bold text-left text-dark-100 py-4">Our IP Rights</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We and our affiliates own all rights, title, and interest in and to the Services. You may only use our name and logo in accordance with our Brand Guidelines.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Paid Accounts</h1>
        <h2 className="h2-bold text-left text-dark-100 py-4">Billing</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        If you purchase any Services, you will provide complete and accurate billing information, including a valid payment method. For paid subscriptions, we will 
        automatically charge your payment method on each agreed-upon periodic renewal until you cancel. You’re responsible for all applicable taxes, and we’ll charge tax 
        when required. If your payment cannot be completed, we may downgrade your account or suspend your access to our Services until payment is received.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Service Credits</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You can pay for some Services in advance by purchasing service credits. All service credits are subject to our Service Credit Terms.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Cancellation</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You can cancel your paid subscription at any time. Payments are non-refundable, except where required by law. These Terms do not override any mandatory local laws 
        regarding your cancellation rights.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Changes</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We may change our prices from time to time. If we increase our subscription prices, we will give you at least 30 days’ notice and any price increase will take effect 
        on your next renewal so that you can cancel if you do not agree to the price increase.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Termination and Suspension</h1>
        <h2 className="h2-bold text-left text-dark-100 py-4">Termination</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You are free to stop using our Services at any time. We reserve the right to suspend or terminate your access to our Services or delete your account if we determine:
        <br /><br />
        </p>
        <ul className="font-medium text-dark-100 list-disc pl-6">
          <li>You breached these Terms or our Usage Policies.</li>
          <li>We must do so to comply with the law.</li>
          <li>Your use of our Services could cause risk or harm to Documentrio, our users, or anyone else.</li>
        </ul>
        <br /><br />
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We also may terminate your account if it has been inactive for over a year and you do not have a paid account. If we do, we will provide you with advance notice.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Appeals</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        If you believe we have suspended or terminated your account in error, you can file an appeal with us by contacting our Support team [insert link].
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Discontinuation of Services</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We may decide to discontinue our Services, but if we do, we will give you advance notice and a refund for any prepaid, unused Services.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Disclaimer of Warranties</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        OUR SERVICES ARE PROVIDED “AS IS.” EXCEPT TO THE EXTENT PROHIBITED BY LAW, WE AND OUR AFFILIATES AND LICENSORS MAKE NO WARRANTIES (EXPRESS, IMPLIED, STATUTORY, OR 
        OTHERWISE) WITH RESPECT TO THE SERVICES, AND DISCLAIM ALL WARRANTIES INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
        SATISFACTORY QUALITY, NON-INFRINGEMENT, AND QUIET ENJOYMENT, AND ANY WARRANTIES ARISING OUT OF ANY COURSE OF DEALING OR TRADE USAGE. WE DO NOT WARRANT THAT THE 
        SERVICES WILL BE UNINTERRUPTED, ACCURATE OR ERROR-FREE, OR THAT ANY CONTENT WILL BE SECURE OR NOT LOST OR ALTERED.
        <br /><br />
        YOU ACCEPT AND AGREE THAT ANY USE OF OUTPUTS IS AT YOUR OWN DISCRETION AND RISK, AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY LOSS OR DAMAGE THAT RESULTS FROM THE 
        USE OF SERVICES.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Limitation of Liability</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        EXCEPT TO THE EXTENT PROHIBITED BY LAW, WE AND OUR AFFILIATES AND LICENSORS WILL NOT BE LIABLE UNDER THESE TERMS FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
        EXEMPLARY, OR PUNITIVE DAMAGES, LOST REVENUES, LOST PROFITS, LOST DATA, OR LOST OPPORTUNITIES, EVEN IF WE KNEW OR SHOULD HAVE KNOWN THAT SUCH DAMAGES WERE POSSIBLE.
        <br /><br />
        OUR AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO THE 
        GREATER OF (A) THE AMOUNTS PAID BY YOU TO US FOR THE SERVICES IN THE 12 MONTHS IMMEDIATELY PRECEDING THE EVENT THAT GAVE RISE TO THE CLAIM OR (B) $100.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Dispute Resolution</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We want to address your concerns without needing a formal legal case. Before filing a claim against Documentrio, you agree to try to resolve the dispute 
        informally by contacting us at support@documentrio.ai We’ll try to resolve the dispute informally by contacting you. If a dispute is not resolved within 30 days of 
        submission, you or Documentrio may bring a formal proceeding.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">No Class Actions</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You may only resolve disputes with us on an individual basis and may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative 
        action.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Governing Law</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        These Terms are governed by and construed in accordance with the laws of the state of [Your State], without regard to conflict of law principles.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Arbitration</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Any dispute arising out of or relating to these Terms or the Services will be exclusively resolved by binding arbitration as described below. You agree to give up 
        your right to go to court (except for matters that may be taken to small claims court) to assert or defend your rights under these Terms.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Rules</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Arbitration will be conducted by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, unless you are not a resident of the United States, 
        in which case arbitration will be conducted by the International Chamber of Commerce (ICC) under its International Arbitration Rules.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Process</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        A party seeking arbitration must first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal Express (signature required) or, 
        only if the other party has not provided a current physical address, then by electronic mail. Documentrio’s address for notice is: [Your Address].
        <br /><br />
        The arbitration will be conducted by a single arbitrator in the county (or parish) where you live or work or another location that we agree to. The arbitrator may 
        award relief only individually and only to the extent necessary to resolve your individual claim(s).
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Fees</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Each party will be responsible for their own costs of arbitration.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">Modifications to These Terms</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We may modify these Terms from time to time. If we make material changes, we’ll provide notice as appropriate under the circumstances 
        (e.g., by displaying a notice within the Services or by sending you an email). By continuing to use the Services after the changes take effect, you 
        agree to the revised Terms.
        </p>
        <h1 className="h1-bold text-left text-dark-100 py-4">General</h1>
        <h2 className="h2-bold text-left text-dark-100 py-4">Entire Agreement</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        These Terms constitute the entire agreement between you and Documentrio with respect to the subject matter of these Terms and supersede and 
        replace any prior or contemporaneous agreements, or terms.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Waiver, Severability, and Assignment</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Our failure to enforce a provision is not a waiver of our right to do so later. If a provision is found unenforceable, the remaining provisions will 
        remain in full effect. You may not assign any of your rights under these Terms, and any attempt to do so will be void. We may assign our rights to 
        any of our affiliates or subsidiaries, or to any successor in interest of any business associated with the Services.
        </p>
        <h2 className="h2-bold text-left text-dark-100 py-4">Force Majeure</h2>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We will not be liable for any delay or failure to perform any obligation under these Terms where the delay or failure results from any cause beyond our reasonable 
        control, including acts of God, labor disputes or other industrial disturbances, electrical or power outages, utilities or other telecommunications failures, earthquake, s
        torms, or other elements of nature, blockages, embargoes, riots, acts or orders of government, acts of terrorism, or war.
        </p>
        </div>
      {/* <Accordion
        type="single"
        collapsible
        className="grid gap-4 sm:grid-cols-2"
      >
        <AccordionItem
          value="item-1"
          className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-4  py-1 text-light-700 backdrop-blur"
        >
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </section>
  );
};

export default TermsOfUse;
