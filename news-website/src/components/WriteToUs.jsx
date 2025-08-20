import { useState } from "react";

export default function WriteToUs() {
  const [msg, setMsg] = useState("");

  return (
    <div className="mt-8 bg-gray-100 rounded-lg p-5 shadow max-w-xl">
      <h3 className="font-bold text-lg mb-2">Write to Us</h3>
      <textarea
        value={msg}
        onChange={e => setMsg(e.target.value)}
        className="w-full border-gray-300 rounded p-2 resize-none focus:ring focus:ring-blue-400"
        rows={4}
        placeholder="Your feedback or message..."
      />
      <button
        onClick={() => {
          setMsg("");
          alert("Message Sent: " + msg);
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded mt-2 font-semibold transition"
      >
        Send
      </button>
    </div>
  );
}

