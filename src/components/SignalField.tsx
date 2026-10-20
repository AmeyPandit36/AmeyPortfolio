"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const FieldCanvas = dynamic(() => import("@/components/SignalFieldCanvas"), {
  ssr: false,
  loading: () => <div className="field-fallback" aria-hidden="true" />,
});

export default function SignalField() {
  const reduceMotion = useReducedMotion();
  return <div className="field-shell" aria-hidden="true">{reduceMotion ? <div className="field-fallback" /> : <FieldCanvas />}</div>;
}
