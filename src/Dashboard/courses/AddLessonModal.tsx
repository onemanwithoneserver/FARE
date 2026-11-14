import { useState } from "react";
import { X, Play } from "lucide-react";
import { type Course } from "./data";

export interface AddLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  onAddLesson: (
    courseId: string,
    moduleId: string,
    title: string,
    type: "VIDEO" | "ARTICLE" | "QUIZ" | "DOCUMENT"
  ) => void;
}

export default function AddLessonModal({
  isOpen,
  onClose,
  courses,
  onAddLesson,
}: AddLessonModalProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    courses[0]?.id || ""
  );

  const currentCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];
  const availableModules = currentCourse?.modules || [];

  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    availableModules[0]?.id || ""
  );
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonType, setLessonType] = useState<"VIDEO" | "ARTICLE" | "QUIZ" | "DOCUMENT">(
    "VIDEO"
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lessonTitle.trim()) {
      alert("Please enter a lesson title.");
      return;
    }
    const targetCourseId = selectedCourseId || courses[0]?.id;
    const targetModuleId =
      selectedModuleId || availableModules[0]?.id || `mod-${Date.now()}`;

    if (!targetCourseId) {
      alert("Please select a course.");
      return;
    }

    onAddLesson(targetCourseId, targetModuleId, lessonTitle.trim(), lessonType);
    setLessonTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-['Outfit'] select-text animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-[0_20px_60px_rgba(11,29,58,0.25)] border border-slate-200 overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-900">
              <Play className="w-4 h-4 text-blue-900 fill-blue-900" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Add Lesson</h2>
              <p className="text-xs text-slate-500">Create a new lesson under a module</p>
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
              onChange={(e) => {
                setSelectedCourseId(e.target.value);
                const match = courses.find((c) => c.id === e.target.value);
                if (match && match.modules.length > 0) {
                  setSelectedModuleId(match.modules[0].id);
                }
              }}
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
              Select Module *
            </label>
            <select
              value={selectedModuleId}
              onChange={(e) => setSelectedModuleId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all cursor-pointer"
            >
              {availableModules.length === 0 ? (
                <option value="">No modules available in this course</option>
              ) : (
                availableModules.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title}
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Lesson Title *
            </label>
            <input
              type="text"
              placeholder="e.g. Recovering Stalled or Inactive Agents"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Lesson Type *
            </label>
            <select
              value={lessonType}
              onChange={(e) =>
                setLessonType(
                  e.target.value as "VIDEO" | "ARTICLE" | "QUIZ" | "DOCUMENT"
                )
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all cursor-pointer"
            >
              <option value="VIDEO">VIDEO</option>
              <option value="ARTICLE">ARTICLE</option>
              <option value="DOCUMENT">DOCUMENT</option>
              <option value="QUIZ">QUIZ</option>
            </select>
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
              Add Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
