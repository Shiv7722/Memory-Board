import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";
import RateLimitedUI from "../components/RatelimitedUI";

const NoteInfo = () => {
  const { id } = useParams();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);

        if (res?.status === 200) {
          setTitle(res?.data.title);
          setContent(res?.data.content);
        }
      } catch (error) {
        if (error.status == 429) {
          setIsRateLimited(true);
        }
        console.error(error?.respone?.messege);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      const res = await axiosInstance.delete(`/notes/${id}`);
      console.log("res of del req", res);
      if (res.status === 200) {
        navigate("/");
        toast.success("Note Deleted Successfully", 1000);
      }
    } catch (error) {
      if (error.status === 404) {
        toast.error("Requested Note not found");
      } else if (error.status === 429) {
        toast.error("You are deleting note too fast, Please wait a moment.");
      }
    }
  };

  const handleSaveChange = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content can't be empty");
      setIsSaving(false);
      return;
    }

    if (title.length > 26) {
      toast.error("Title is too long. Maximum 25 characters allowed.");
      setIsSaving(false);
      return;
    }

    try {
      const res = await axiosInstance.put(`/notes/${id}`, {
        title,
        content,
      });
      // console.log("res of update req", res);
      if (res.status === 200) {
        toast.success("Note Updated Successfully");
      }
    } catch (error) {
      console.error("Error in updating note", error);
      if (error.status === 404) {
        toast.error("Requested Note not found");
      } else if (error.status === 429) {
        toast.error("You are updating note too fast, Please wait a moment.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <header className="bg-base-300 border-b border-base-content/10">
          <div className="mx-auto flex justify-between max-w-5xl p-4">
            <Link to={"/"} className="btn btn-primary">
              <ArrowLeft className="size-5" />
              Back to Home
            </Link>
            <button
              onClick={handleDelete}
              disabled={isSaving || isRateLimited || isLoading}
              className="btn btn-error"
            >
              Delete Note
            </button>
          </div>
        </header>
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {!isLoading && isRateLimited && <RateLimitedUI />}
        {!isLoading && !isRateLimited && (
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-3xl mx-auto border-2 border-grey/200 rounded-2xl">
              <div className="card bg-base-200">
                <div className="card-body">
                  <form onSubmit={handleSaveChange}>
                    <div className="flex flex-col mb-4">
                      <label className="label mb-2">
                        <span className="label-text text-xl font-bold">
                          Title
                        </span>
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

                    <button
                      type="submit"
                      className="btn btn-primary justify-end"
                      disabled={isSaving || isRateLimited || isLoading}
                    >
                      {isSaving ? "Saving...." : "Save Changes"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NoteInfo;
