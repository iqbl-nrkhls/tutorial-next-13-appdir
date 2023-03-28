'use client';

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    itWillBeError
  }, [])

  return (
    <div>
      <h1>BREAKING</h1>
      <div>
        <p>Its wil not be shown</p>
      </div>
    </div>
  );
}