import { ContentLayout } from "@/components/dashboard-panel/content-layout";

export default function Monitoring() {
  return (
    <ContentLayout title="Monitoring">
      <iframe
        src="https://script.google.com/a/macros/kibarcm.id/s/AKfycbxXwTmNLPulwspoEaQR7Oo-KQvg7BUAWwGIwKk8ngX08Pm1RBp4IVG-p8Wrx9bXIisQ3g/exec"
        className="w-full h-[80vh] rounded-md"
      ></iframe>
    </ContentLayout>
  );
}
