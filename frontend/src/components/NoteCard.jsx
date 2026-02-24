import React from 'react'
import {Link} from 'react-router'
import { Edit, Trash2 } from 'lucide-react'
import { formatDate } from '../lib/utils';

const NoteCard = ({note}) => {


  return (
    <Link
      to={`/note/${note._id}`}
      className="block card bg-base-100 shadow-[0_2px_8px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)] transition-shadow duration-200 border-t-4 border-solid border-primary w-full h-full"
    >
      <div className="card-body p-4">
        <h3 className="card-title text-base-content font-bold font-base">
          {note.title}
        </h3>
        <p className="text-base-content/70 line-clamp-1">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4 py-2 px-1">
          <span className="text-sm text-base-content/70">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs">
              <Edit className="size-5 p-0.5 text-base-content/70"/>
            </button>
            <button className="btn btn-ghost btn-xs" onClick={(e)=>handleDelete(e,note._id)}>
              <Trash2 className="size-4 text-error"></Trash2>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard