import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios.js";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log({ title, content });
    // Handle form submission here

    if (!title.trim() || !content.trim()) {
      toast.error("Fields are empty");
      setIsLoading(false);
      return;
    }
    
    if (title.length > 100) {
        toast.error("Title is too long. Maximum 100 characters allowed.");
        setIsLoading(false);
        return;
    }
    try {
      const res = await axiosInstance.post("/notes", {
        title,
        content,
      });
      if (res?.status === 201) {
        toast.success("Note Created Successfully");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error(error);
      if (error?.status === 429) {
        toast.error("You are creating notes too fast. Please wait a moment.");
      } else if (error?.status === 501) toast.error("Failed to create note");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <header className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-5xl p-4">
          <Link to={"/"} className="btn btn-primary">
            <ArrowLeft className="size-5" />
            Bak to Home
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto border-2 border-grey/200 rounded-2xl">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">
                Create a New Note
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                  <label className="label mb-2">
                    <span className="label-text text-xl font-bold">Title</span>
                  </label>
                  <input
                    name="Title"
                    type="text"
                    placeholder="Enter note title here"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="input w-full input-bordered outline-none"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label className="label mb-2">
                    <span className="label-text text-xl font-bold">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Enter your note here"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="textarea w-full outline-none"
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating...." : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
