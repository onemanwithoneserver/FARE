import { useState } from "react";
import { X, Layers } from "lucide-react";
import { type Course } from "./data";

export interface AddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  onAddModule: (courseId: string, title: string, description: string) => void;
}

export default function AddModuleModal({
  isOpen,
  onClose,
  courses,
  onAddModule,
}: AddModuleModalProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    courses[0]?.id || ""
  );
  const [moduleTitle, setModuleTitle] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!moduleTitle.trim()) {
      alert("Please enter a module title.");
      return;
    }
    const targetCourseId = selectedCourseId || courses[0]?.id;
    if (!targetCourseId) {
      alert("Please select a course.");
      return;
    }

    onAddModule(targetCourseId, moduleTitle.trim(), moduleDescription.trim());
    setModuleTitle("");
    setModuleDescription("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-['Outfit'] select-text animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-[0_20px_60px_rgba(11,29,58,0.25)] border border-slate-200 overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-900">
              <Layers className="w-4 h-4 text-blue-900" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Add Course Module</h2>
              <p className="text-xs text-slate-500">Create a new module under an existing course</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Course *
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all cursor-pointer"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Module Title *
            </label>
            <input
              type="text"
              placeholder="e.g. Performance Recovery & Problem-Solving"
              value={moduleTitle}
              onChange={(e) => setModuleTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Module Description
            </label>
            <textarea
              rows={3}
              placeholder="Summary of what this module covers..."
              value={moduleDescription}
              onChange={(e) => setModuleDescription(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#0A1325] hover:bg-[#142340] rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Add Module
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
