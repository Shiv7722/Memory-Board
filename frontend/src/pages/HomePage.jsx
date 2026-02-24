import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import RateLimitedUI from "../components/RatelimitedUI";
import NoteNotFoundUI from "../components/NoteNotFoundUI";

const HomePage = () => {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRateLimited, setIsRateLimited] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        // console.log(res.data);
        if (res?.status === 200) {
          setNotes(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error in fetching data", error);
        toast.error("Notes fetched successfully");
        if (error?.status === 429) {
          setIsRateLimited(true);
        }
      }
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto my-6">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {!isLoading && isRateLimited && <RateLimitedUI />}
        {!isLoading && !isRateLimited && notes?.length === 0 && (
          <NoteNotFoundUI />
        )}
        {!isLoading && !isRateLimited && notes?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {notes.map((note) => {
              return (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
