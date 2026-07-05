import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P, UL } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Battery Health Monitor Alarm" },
      {
        name: "description",
        content:
          "The Terms of Service governing your use of the Battery Health Monitor Alarm Android app, including licensing, disclaimers, and limitation of liability.",
      },
      { property: "og:title", content: "Terms of Service — Battery Health Monitor Alarm" },
      {
        property: "og:description",
        content:
          "The Terms of Service governing your use of the Battery Health Monitor Alarm Android app.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="July 1, 2026">
      <P>
        Please read these Terms of Service ("Terms") carefully before using Battery Health Monitor
        Alarm ("the App," "Service"). By downloading, installing, or using the App, you agree to be
        legally bound by these Terms. If you do not agree, do not use the App.
      </P>

      <H2>1. Eligibility</H2>
      <P>
        You must be at least 13 years old (or the minimum age of digital consent in your
        jurisdiction) to use the App. By using the App, you represent that you meet this
        requirement, or that you are using the App with the consent of a parent or legal guardian.
      </P>

      <H2>2. License Grant</H2>
      <P>
        Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
        non-transferable, revocable, personal license to install and use the App on devices you own
        or control, solely for personal, non-commercial use. You may not:
      </P>
      <UL>
        <li>Reverse-engineer, decompile, or disassemble the App</li>
        <li>Modify, adapt, or create derivative works based on the App</li>
        <li>Redistribute, sublicense, rent, lease, or sell access to the App</li>
        <li>Remove or obscure any proprietary notices</li>
        <li>
          Use the App for any unlawful purpose or in a manner that could disable, overburden, or
          impair its functioning
        </li>
      </UL>

      <H2>3. Nature of the Service — Informational Only</H2>
      <P>
        The App reads battery-related data reported by your device's Android operating system
        (charge level, voltage, current, temperature, and derived health estimates) and presents
        this information, along with configurable alarms/notifications. All metrics, health
        percentages, and time estimates are software-derived approximations based on
        operating-system-level data and are provided for general informational purposes only. They
        are not laboratory-grade measurements, are not certified by any device manufacturer, and
        should not be treated as a substitute for professional hardware diagnostics.
      </P>

      <H2>4. No Hardware Warranty or Guarantee</H2>
      <P>
        We do not manufacture, sell, service, or warrant any physical battery, charger, or device
        hardware. The App does not, and cannot, alter, repair, extend, or guarantee the physical
        lifespan or performance of your battery or device. Any charging alarms, thermal warnings, or
        health estimates are advisory only. You remain solely responsible for how you charge, use,
        and maintain your device.
      </P>

      <H2>5. Disclaimer of Warranties</H2>
      <P>
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER
        EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT
        WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, ACCURATE, OR THAT ANY ALARM OR
        NOTIFICATION WILL FIRE RELIABLY ON EVERY DEVICE OR ANDROID SKIN (INCLUDING OEM SKINS SUCH AS
        MIUI, ONEUI, COLOROS, OR FUNTOUCH OS THAT MAY RESTRICT BACKGROUND SERVICES).
      </P>

      <H2>6. Limitation of Liability</H2>
      <P>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE, OUR DIRECTORS,
        EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
        EXEMPLARY, OR PUNITIVE DAMAGES — INCLUDING BUT NOT LIMITED TO BATTERY DEGRADATION, DEVICE
        OVERHEATING, MISSED ALARMS, LOSS OF DATA, LOSS OF PROFITS (INCLUDING LOSS OF INCOME FOR
        GIG-ECONOMY OR COMMERCIAL USERS), OR DEVICE MALFUNCTION — ARISING FROM OR RELATED TO YOUR
        USE OF, OR INABILITY TO USE, THE APP, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE
        APP SHALL NOT EXCEED TEN U.S. DOLLARS (USD 10) OR THE AMOUNT YOU PAID US IN THE PAST TWELVE
        MONTHS (WHICHEVER IS GREATER), SINCE THE APP IS PROVIDED FREE OF CHARGE.
      </P>
      <P>
        Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of
        the above limitations may not apply to you to the extent prohibited by applicable law.
      </P>

      <H2>7. Indemnification</H2>
      <P>
        You agree to indemnify, defend, and hold harmless the developer and any affiliates from and
        against any claims, liabilities, damages, losses, and expenses (including reasonable legal
        fees) arising out of or in any way connected with your misuse of the App, violation of these
        Terms, or violation of any applicable law or third-party right.
      </P>

      <H2>8. Advertising and Monetization</H2>
      <P>
        The App is monetized through third-party advertising networks (Google AdMob and AppLovin)
        and displays banner and/or interstitial advertisements. We do not control the specific
        content of third-party advertisements. We do not currently offer in-app purchases; if this
        changes, all transactions will be processed exclusively through Google Play's billing
        system, and pricing/availability will be disclosed in-app and is subject to change without
        prior notice.
      </P>

      <H2>9. Third-Party Services</H2>
      <P>
        The App integrates third-party SDKs (Google AdMob, AppLovin, Google Analytics/Firebase) that
        operate under their own terms and privacy policies, linked in our Privacy Policy. We are not
        responsible for the availability, content, accuracy, or practices of these third-party
        services, and your interactions with them are governed by their own terms.
      </P>

      <H2>10. Intellectual Property</H2>
      <P>
        The App, including its name, logo, design, source code, and all associated content, is the
        intellectual property of the developer and is protected by applicable copyright, trademark,
        and other intellectual property laws. Nothing in these Terms transfers any ownership rights
        to you.
      </P>

      <H2>11. Termination</H2>
      <P>
        We may suspend or terminate your access to the App at any time, without notice, if you
        violate these Terms. You may stop using the App and uninstall it at any time. Sections 4, 5,
        6, 7, 12, and 13 shall survive any termination.
      </P>

      <H2>12. Dispute Resolution, Arbitration, and Class Action Waiver</H2>
      <P>
        To the extent permitted by applicable law, any dispute arising out of or relating to these
        Terms or the App shall first be attempted to be resolved through good-faith informal
        negotiation by contacting us at the email below. If unresolved within 30 days, any dispute
        shall be resolved by binding individual arbitration rather than in court, except where
        prohibited by law (e.g., certain EU consumer protection statutes, which remain unaffected by
        this clause for EU/UK residents). You and we each waive any right to a jury trial or to
        participate in a class action, collective action, or representative proceeding, to the
        fullest extent permitted by applicable law. For residents of jurisdictions where arbitration
        clauses or class-action waivers are unenforceable under local consumer protection law, this
        Section 12 shall not restrict rights guaranteed by that local law, and disputes shall
        instead be resolved in the courts of your local jurisdiction as required by such law.
      </P>

      <H2>13. Governing Law</H2>
      <P>
        These Terms shall be governed by and construed in accordance with the laws of Uttar Pradesh,
        India, without regard to its conflict of law principles, except where mandatory local
        consumer protection laws (such as those of the EU, UK, or Australia) grant you additional
        non-waivable rights, in which case those local rights shall prevail for users in those
        jurisdictions.
      </P>

      <H2>14. Severability</H2>
      <P>
        If any provision of these Terms is found to be unenforceable or invalid under applicable
        law, that provision shall be limited or eliminated to the minimum extent necessary, and the
        remaining provisions shall remain in full force and effect.
      </P>

      <H2>15. Changes to These Terms</H2>
      <P>
        We may revise these Terms at any time. Material changes will be announced via an in-app
        notice. Your continued use of the App after changes take effect constitutes acceptance of
        the revised Terms. If you do not agree to revised Terms, your sole remedy is to stop using
        the App.
      </P>

      <H2>16. Entire Agreement</H2>
      <P>
        These Terms, together with our Privacy Policy, constitute the entire agreement between you
        and us regarding the App, superseding any prior agreements.
      </P>

      <H2>17. Contact Information</H2>
      <P>
        Email: <span className="text-foreground">batteryhealthsupport@nettoklar.de</span>
      </P>
    </LegalPage>
  );
}
