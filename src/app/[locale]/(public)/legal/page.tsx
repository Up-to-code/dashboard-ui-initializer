import { LegalArticle, LegalBlock } from "@/components/landing/public-page-shell";
import { templateConfig } from "@/template-config";

export default function LegalPage() {
  const workspaceName = templateConfig.productName;
  const legalEmail = "legal@example.com";
  return (
    <LegalArticle title="Legal Notice" updated="Last updated: May 4, 2026">
      <LegalBlock title="Company Information">
        <p>{workspaceName} is a reusable dashboard UI template. Replace this placeholder with your own company details.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Headquarters: Riyadh, Kingdom of Saudi Arabia</li>
          <li>
            Email:{" "}
            <a href={`mailto:${legalEmail}`} className="font-black text-blue-600 hover:underline dark:text-blue-300">
              {legalEmail}
            </a>
          </li>
          <li>VAT Registration: 3XXXXXXXXXX0003</li>
        </ul>
      </LegalBlock>

      <LegalBlock title="Regulatory Compliance">
        <p>{workspaceName} ships with local demo data only. Add your own compliance language when connecting a real backend.</p>
      </LegalBlock>

      <LegalBlock title="Intellectual Property">
        <p>All template content is provided for customization. Replace this section with your own intellectual property notice.</p>
      </LegalBlock>

      <LegalBlock title="Dispute Resolution">
        <p>Any disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the courts of Riyadh, Kingdom of Saudi Arabia, in accordance with Saudi law.</p>
      </LegalBlock>
    </LegalArticle>
  );
}
