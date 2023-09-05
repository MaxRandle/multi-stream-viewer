"use client";

import { Section } from "@/components/Section";
import { StreamDisplayGrid } from "@/components/StreamDisplayGrid";
import { StreamsForm, StreamsFormFields } from "@/forms/StreamsForm";
import { decodeStreamArray, encodeStream } from "@/utils/url";
import { useSearchParams, useRouter } from "next/navigation";

export default function Home() {
  const { getAll } = useSearchParams();
  const router = useRouter();

  const streams = decodeStreamArray(getAll("stream") ?? []);

  const handleFormSubmit = (formData: StreamsFormFields) => {
    const queryString = encodeStream(formData.streams);
    router.push(`/?${queryString}`);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <div className="container">
          <StreamsForm
            initialValues={{ streams }}
            onSubmit={handleFormSubmit}
          />
        </div>
      </Section>
      <StreamDisplayGrid streams={streams} />
    </main>
  );
}
