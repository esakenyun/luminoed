"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbyLZ4-f0gxmSom6deFXPvTnLYJDpGxYIM-_WRwLn1ZEE-3CRriWV6lvMjLTFAqxOEwTUg/exec")
      .then(res => res.json())
      .then(res => setData(res.value));
  }, []);

  return data
}