import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Chat() {
  const messages = useQuery(api.chat.getMessages) || [];
  const sendMessage = useMutation(api.chat.sendMessage);
  const [newMessageText, setNewMessageText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    await sendMessage({
      body: newMessageText,
    });

    setNewMessageText("");
  };

  return (
    <div className="flex flex-col h-screen p-4 font-liquid">
      <h1 className="text-2xl font-bold mb-4">Liquid Chat</h1>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
        {messages.map((msg) => (
          <div key={msg._id} className="bg-white p-3 rounded shadow-sm border border-gray-100">
            <span className="font-bold text-lime-600 block text-sm">{msg.user}</span>
            <p className="text-gray-800">{msg.body}</p>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No messages yet. Start chatting!</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
          placeholder="Type a message..."
        />
        <button 
          type="submit" 
          disabled={!newMessageText.trim()}
          className="px-6 py-2 bg-lime-500 text-white font-bold rounded hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Send
        </button>f;kjdwfdnn kdncdn  kdlkd na lklkd dnld ddlkdi e lmamknjdfa olffjhj 
      </form>
    </div>
  );
}