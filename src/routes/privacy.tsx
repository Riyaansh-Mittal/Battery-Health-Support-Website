import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P, UL } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Battery Health Monitor Alarm" },
      {
        name: "description",
        content:
          "How Battery Health Monitor Alarm handles data. No backend server, no personal data collected by us. On-device processing with third-party ad and analytics disclosures.",
      },
      { property: "og:title", content: "Privacy Policy — Battery Health Monitor Alarm" },
      {
        property: "og:description",
        content:
          "No backend server, no personal data collected by us. On-device processing with third-party ad and analytics disclosures.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="July 1, 2026">
      <P>
        This Privacy Policy explains how Battery Health Monitor Alarm ("the App," "we," "us," "our")
        handles information when you use our mobile application. We built this app around a simple
        principle: we do not operate any backend server, and we do not collect, store, or transmit
        any personal data to ourselves. All battery readings, health calculations, and settings are
        processed and stored entirely on your device.
      </P>
      <P>
        However, we use third-party services (Google AdMob, AppLovin, and Google Analytics for
        Firebase) to display ads and understand aggregate app usage. Those third parties
        independently collect certain data as described below.
      </P>

      <H2>1. Information We Do NOT Collect</H2>
      <UL>
        <li>
          We do not collect your name, email, phone number, or any account identifiers — the App has
          no login or account system.
        </li>
        <li>We do not collect precise or approximate real-time location data.</li>
        <li>We do not access your contacts, photos, files, camera, or microphone.</li>
        <li>
          We do not transmit battery statistics, device diagnostics, or usage history to any server
          we control.
        </li>
        <li>We have no ability to identify you individually from anything the App itself generates.</li>
      </UL>

      <H2>2. Information Collected On-Device (Never Transmitted by Us)</H2>
      <P>
        The App reads the following from your Android operating system, purely to display information
        back to you inside the App:
      </P>
      <UL>
        <li>Battery percentage, charge status, voltage, current (mA), and temperature</li>
        <li>Charging speed and charger type classification</li>
        <li>Device model and Android OS version (used only to adjust for OEM-specific behavior)</li>
      </UL>
      <P>
        This data is stored locally in the App's private storage and is never uploaded to any server
        operated by us. Uninstalling the App permanently deletes it.
      </P>

      <H2>3. Information Collected by Third-Party Advertising and Analytics Partners</H2>
      <P>
        We use the following third-party SDKs, which operate independently under their own privacy
        policies and may collect data such as your Advertising ID, IP address, device type, and
        general usage patterns for the purposes described below:
      </P>
      <UL>
        <li>
          <strong className="text-foreground">Google AdMob</strong> — Serving ads (may include
          personalized ads). May collect Advertising ID, IP address, device info, ad interaction
          data.{" "}
          <a className="text-primary hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Privacy policy
          </a>
        </li>
        <li>
          <strong className="text-foreground">AppLovin</strong> — Serving ads (may include
          personalized ads). May collect Advertising ID, IP address, device info, ad interaction
          data.{" "}
          <a className="text-primary hover:underline" href="https://www.applovin.com/privacy/" target="_blank" rel="noreferrer">
            Privacy policy
          </a>
        </li>
        <li>
          <strong className="text-foreground">Google Analytics for Firebase</strong> — Aggregate,
          anonymized usage statistics (e.g., screen views, crash reports). May collect device type,
          OS version, anonymized usage events.{" "}
          <a className="text-primary hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Privacy policy
          </a>
        </li>
      </UL>
      <P>
        These partners may combine data collected from our App with data collected from other apps
        and services they work with, to serve interest-based advertising. We do not control, and are
        not responsible for, how these third parties process your data — you should review their
        respective privacy policies directly.
      </P>

      <H2>4. Your Advertising Choices</H2>
      <P>
        <strong className="text-foreground">Android users:</strong> You can reset or opt out of
        personalized advertising by going to Settings → Google → Ads → "Opt out of Ads
        Personalization," or by resetting your Advertising ID.
      </P>
      <P>
        <strong className="text-foreground">AdMob/AppLovin consent (EEA/UK/Switzerland users):</strong>{" "}
        On first launch, users in these regions are shown a consent prompt (via Google's User
        Messaging Platform, UMP) to accept or reject personalized advertising, in compliance with
        GDPR and the EU-U.S. Data Privacy Framework.
      </P>
      <P>
        Rejecting personalized ads does not stop ads entirely — you will instead see
        non-personalized, contextual ads.
      </P>

      <H2>5. Children's Privacy</H2>
      <P>
        The App is intended for a general audience and is not directed at children under the age of 13
        (or the applicable age of digital consent in your country, e.g., 16 in parts of the EU). We do
        not knowingly collect personal information from children. Because Google AdMob and AppLovin
        may serve non-personalized ads to all users, we do not enable personalized advertising to any
        user flagged as under the applicable age of consent, and our app is not registered for Google
        Play's "Designed for Families" program. If you believe a child has used the App and that a
        third-party service has collected data in violation of COPPA or similar laws, contact us using
        the details below and we will assist in addressing the issue with the relevant provider.
      </P>

      <H2>6. Your Rights (GDPR — EEA/UK/Switzerland Users)</H2>
      <P>
        If you are located in the European Economic Area, United Kingdom, or Switzerland, you have the
        right to:
      </P>
      <UL>
        <li>
          Access, correct, or request deletion of any data held about you by our third-party partners
          (contact them directly, or contact us and we will forward your request)
        </li>
        <li>Object to or restrict processing based on legitimate interest (e.g., ad personalization)</li>
        <li>Data portability, where technically feasible</li>
        <li>Lodge a complaint with your local Data Protection Authority</li>
      </UL>
      <P>
        Because we do not operate servers or hold your personal data ourselves, most such requests
        must be directed to Google (AdMob/Analytics) or AppLovin directly via the links in Section 3.
        We will assist in good faith with any request sent to us.
      </P>

      <H2>7. Your Rights (CCPA/CPRA — California Users)</H2>
      <P>
        California residents have the right to know what personal information is collected, to request
        deletion, and to opt out of the "sale" or "sharing" of personal information for cross-context
        behavioral advertising. Because our ad partners may share device/advertising identifiers for
        personalized ads, this may constitute a "sale" or "sharing" under CCPA/CPRA. You can exercise
        your opt-out right at any time via:
      </P>
      <UL>
        <li>The in-app consent/ad settings screen, or</li>
        <li>Android system-level "Opt out of Ads Personalization" setting, or</li>
        <li>Emailing us at the contact address below with the subject "CCPA Opt-Out Request"</li>
      </UL>
      <P>
        We do not sell personal information for monetary consideration and do not knowingly sell or
        share data belonging to consumers under 16 years of age.
      </P>

      <H2>8. International Data Transfers</H2>
      <P>
        Because the App is available globally, data collected by our third-party partners (Google,
        AppLovin) may be processed in the United States or other countries outside your country of
        residence. Google and AppLovin both maintain appropriate safeguards (including Standard
        Contractual Clauses where required) for such transfers, as detailed in their respective
        privacy policies.
      </P>

      <H2>9. Data Retention</H2>
      <P>
        We retain no personal data ourselves. On-device data is retained only as long as the App
        remains installed and is permanently erased upon uninstallation. Retention of data by
        third-party partners is governed by their own policies (see Section 3).
      </P>

      <H2>10. Security</H2>
      <P>
        We rely on Android's standard app sandboxing and permission model to protect on-device data.
        No data transmission to our own servers occurs, which eliminates a major class of data breach
        risk. However, no method of electronic storage or transmission by third parties is 100%
        secure, and we cannot guarantee absolute security of information handled by our advertising or
        analytics partners.
      </P>

      <H2>11. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy periodically to reflect changes in law, our third-party
        partners, or app functionality. The "Last Updated" date at the top will reflect the most
        recent revision. Material changes will be announced via an in-app notice. Continued use of the
        App after changes take effect constitutes your acceptance of the revised policy.
      </P>

      <H2>12. Contact Us</H2>
      <P>
        If you have questions about this Privacy Policy or wish to exercise any of the rights
        described above, contact us at:
      </P>
      <P>
        Email: <span className="text-foreground">batteryhealthsupport@nettoklar.de</span>
      </P>
    </LegalPage>
  );
}
