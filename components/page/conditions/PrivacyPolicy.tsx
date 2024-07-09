import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicy = () => {
  return (
    <section className="p-8 md:px-20 max-w-[800px] mx-auto pt-36 leading-[2rem] text-justify">
      <div className="h-max rounded-xl border border-primary-500 bg-primary-800/25 px-8 py-8 text-light-700 backdrop-blur">
      <p className="paragraph-regular my-10 text-center text-dark-100">
        Updated: July 01, 2024
      </p>
      <h1 className="h1-bold text-center text-dark-100">Privacy Policy</h1>
      <p className="paragraph-regular mx-auto my-10 max-w-[800px] text-dark-100">
        We at Documentrio (“Documentrio”, “we”, “our” or “us”) respect your privacy and are strongly committed to keeping
        secure any information we obtain from you or about you. This Privacy Policy describes our practices with respect to Personal 
        Information we collect from or about you when you use our website, applications, and services (collectively, “Services”). 
        This Privacy Policy does not apply to content that we process on behalf of customers of our business offerings, such as our 
        API. Our use of that data is governed by our customer agreements covering access to and use of those offerings.
        </p>
        <h1 className="h1-bold text-left text-dark-100">Personal Information We Collect</h1>
        <br /><br />
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We collect personal information relating to you (“Personal Information”) as follows:
        </p>
        <h3 className="h3-bold text-left text-dark-100 pt-8">Personal Information You Provide</h3>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We collect Personal Information if you create an account to use our Services or communicate with us as follows:
        </p>
        <ul className="font-medium text-dark-100 list-disc pl-6">
          <li><strong>Account Information:</strong> When you create an account with us, we will collect information associated with your account, 
          including your name, contact information, account credentials, payment card information, and transaction history.</li>
          <li><strong>User Content:</strong> When you use our Services, we collect Personal Information that is included in the input, file 
          uploads, or feedback that you provide to our Services.</li>
          <li><strong>Communication Information:</strong> If you communicate with us, we collect your name, contact information, and the contents
          of any messages you send.</li>
          <li><strong>Social Media Information:</strong> We have pages on social media sites like Instagram, Facebook, Medium, Twitter, YouTube, 
          and LinkedIn. When you interact with our social media pages, we will collect Personal Information that you elect to provide to us, 
          such as your contact details. In addition, the companies that host our social media pages may provide us with aggregate information 
          and analytics about our social media activity.</li>
          <li><strong>Other Information You Provide:</strong> We collect other information that you may provide to us, such as when you 
          participate in our events or surveys or provide us with information to establish your identity.</li>
        </ul>
        <h3 className="h3-bold text-left text-dark-100 pt-8">Personal Information We Receive Automatically From Your Use of the Services</h3>
        <p>When you visit, use, or interact with the Services, we receive the following information about your visit, use, or interactions:</p>
        <ul className="font-medium text-dark-100 list-disc pl-6">
          <li><strong>Log Data:</strong> nformation that your browser or device automatically sends when you use our Services. Log data 
          includes your Internet Protocol address, browser type and settings, the date and time of your request, and how you interact with 
          our Services.</li>
          <li><strong>Usage Data:</strong> We may automatically collect information about your use of the Services, such as the types of content 
          that you view or engage with, the features you use and the actions you take, as well as your time zone, country, the dates and times 
          of access, user agent and version, type of computer or mobile device, and your computer connection.</li>
          <li><strong>Communication Information:</strong> If you communicate with us, we collect your name, contact information, and the contents
          of any messages you send.</li>
          <li><strong>Device Information:</strong> Includes name of the device, operating system, device identifiers, and browser you are 
          using. Information collected may depend on the type of device you use and its settings.</li>
          <li><strong>Cookies:</strong> We use cookies to operate and administer our Services, and improve your experience. A “cookie” is a 
          piece of information sent to your browser by a website you visit. You can set your browser to accept all cookies, to reject all 
          cookies, or to notify you whenever a cookie is offered so that you can decide each time whether to accept it. However, refusing a 
          cookie may in some cases preclude you from using, or negatively affect the display or function of, a website or certain areas or 
          features of a website.</li>
          <li><strong>Analytics:</strong> We may use a variety of online analytics products that use cookies to help us analyze how users 
          use our Services and enhance your experience when you use the Services.</li>
        </ul>
        <h1 className="h1-bold text-left text-dark-100">How We Use Personal Information</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">We may use Personal Information for the following purposes:
        </p>
          <ul className="font-medium text-dark-100 list-disc pl-6">
            <li>To provide, administer, maintain and/or analyze the Services;</li>
            <li>To improve our Services and conduct research;</li>
            <li>To communicate with you; including to send you information about our Services and events;</li>
            <li>To develop new programs and services;</li>
            <li>To prevent fraud, criminal activity, or misuses of our Services, and to protect the security of our IT systems, 
              architecture, and networks;</li>
            <li>To carry out business transfers; and</li>
            <li>To comply with legal obligations and legal processes and to protect our rights, privacy, safety, or property, 
              and/or that of our affiliates, you, or other third parties.</li>
          </ul>
        <h1 className="h1-bold text-left text-dark-100">Disclosure of Personal Information</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">In certain circumstances we may provide your Personal 
          Information to third parties without further notice to you, unless required by the law:
        </p>
        <ul className="font-medium text-dark-100 list-disc pl-6">
            <li><strong>Vendors and Service Providers:</strong>To assist us in meeting business operations needs and to perform certain 
            services and functions, we may provide Personal Information to vendors and service providers, including providers of hosting 
            services, customer service vendors, cloud services, email communication software, web analytics services, and other information 
            technology providers, among others. Pursuant to our instructions, these parties will access, process, or store Personal Information 
            only in the course of performing their duties to us.</li>
            <li><strong>Business Transfers:</strong>If we are involved in strategic transactions, reorganization, bankruptcy, receivership, or transition 
            of service to another provider (collectively, a “Transaction”), your Personal Information and other information may be disclosed in 
            the diligence process with counterparties and others assisting with the Transaction and transferred to a successor or affiliate as 
            part of that Transaction along with other assets.</li>
            <li><strong>Legal Requirements:</strong>We may share your Personal Information, including information about your interaction with 
            our Services, with government authorities, industry peers, or other third parties (i) if required to do so by law or in the good 
            faith belief that such action is necessary to comply with a legal obligation, (ii) to protect and defend our rights or property, 
            (iii) if we determine, in our sole discretion, that there is a violation of our terms, policies, or the law; (iv) to detect or 
            prevent fraud or other illegal activity; (v) to protect the safety, security, and integrity of our products, employees, or users, 
            or the public, or (vi) to protect against legal liability.</li>
            <li><strong>Affiliates:</strong>We may disclose Personal Information to our affiliates, meaning an entity that controls, is 
            controlled by, or is under common control with Documentrio. Our affiliates may use the Personal Information we share in a 
            manner consistent with this Privacy Policy.</li>
            <li><strong>Business Account Administrators:</strong>When you join an enterprise or business account, the administrators of that 
            account may access and control your account. In addition, if you create an account using an email address belonging to your 
            employer or another organization, we may share the fact that you have an account and certain account information, such as your 
            email address, with your employer or organization to enable you to be added to their business account.</li>
            <li><strong>Other Users and Third Parties You Share Information With:</strong>Certain features allow you to display or share 
            information with other users or third parties. For example, you may share conversations with other users via shared links or send 
            information to third-party applications via custom actions. Be sure you trust any user or third party with whom you share information.</li>
          </ul>
        <h1 className="h1-bold text-left text-dark-100">Your Rights</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
            Depending on location, individuals may have certain statutory rights in relation to their Personal Information. For example, 
            you may have the right to:
        </p>
          <ul className="font-medium text-dark-100 list-disc pl-6">
            <li>Access your Personal Information and information relating to how it is processed.</li>
            <li>Delete your Personal Information from our records.</li>
            <li>Rectify or update your Personal Information.</li>
            <li>Transfer your Personal Information to a third party (right to data portability).</li>
            <li>Restrict how we process your Personal Information.</li>
            <li>Withdraw your consent—where we rely on consent as the legal basis for processing at any time.</li>
            <li>Object to how we process your Personal Information.</li>
            <li>Lodge a complaint with your local data protection authority.</li>
          </ul>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        You can exercise some of these rights through your account. If you are unable to exercise your rights through your account, 
        please submit your request through our designated contact channels.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Children</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        Our Service is not directed to children under the age of 13. Documentrio does not knowingly collect Personal Information 
        from children under the age of 13. If you have reason to believe that a child under the age of 13 has provided Personal 
        Information to Documentrio through the Service, please contact us. We will investigate any notification and if 
        appropriate, delete the Personal Information from our systems. If you are 13 or older, but under 18, you must have permission 
        from your parent or guardian to use our Services.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Links to Other Websites</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        The Service may contain links to other websites not operated or controlled by Documentrio, including social media 
        services (“Third Party Sites”). The information that you share with Third Party Sites will be governed by the specific privacy 
        policies and terms of service of the Third Party Sites and not by this Privacy Policy. By providing these links we do not imply 
        that we endorse or have reviewed these sites. Please contact the Third Party Sites directly for information on their privacy 
        practices and policies.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Security and Retention</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We implement commercially reasonable technical, administrative, and organizational measures to protect Personal Information both 
        online and offline from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or 
        email transmission is ever fully secure or error free. In particular, email sent to or from us may not be secure. Therefore, 
        you should take special care in deciding what information you send to us via the Service or email. In addition, we are not 
        responsible for circumvention of any privacy settings or security measures contained on the Service, or third-party websites.
        <br /><br />
        We’ll retain your Personal Information for only as long as we need in order to provide our Service to you, or for other 
        legitimate business purposes such as resolving disputes, safety and security reasons, or complying with our legal obligations. 
        How long we retain Personal Information will depend on a number of factors, such as the amount, nature, and sensitivity of the 
        information, the potential risk
        <br /><br />
        How long we retain Personal Information will depend on a number of factors, such as the amount, nature, and sensitivity of the 
        information, the potential risk of harm from unauthorized use or disclosure of your Personal Information, the purposes for which 
        we process your Personal Information, and whether we can achieve those purposes through other means, and the applicable legal 
        requirements.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Changes to the Privacy Policy</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        We may change this Privacy Policy from time to time. If we make material changes, we will notify you by revising the date at the 
        top of the policy, and in some cases, we may provide you with additional notice (such as adding a statement to our homepage or 
        sending you an email notification). We encourage you to review our Privacy Policy whenever you access the Services to stay 
        informed about our information practices and the ways you can help protect your privacy.
        </p>
        <h1 className="h1-bold text-left text-dark-100 pt-8">Contact Us</h1>
        <p className="paragraph-regular mx-auto max-w-[800px] text-dark-100">
        If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        <br></br><br />
        Email: contact@documentrio.ai
        <br></br><br/>
        Address: [Your Company Address]
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
