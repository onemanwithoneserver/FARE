import { useState } from "react";
import { X, UploadCloud, ChevronDown } from "lucide-react";
import { type Course } from "./data";

export interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCourseCreated: (newCourse: Course) => void;
}

export default function CreateCourseModal({
  isOpen,
  onClose,
  onCourseCreated,
}: CreateCourseModalProps) {
  const [title, setTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [durationMins, setDurationMins] = useState("");
  const [status, setStatus] = useState<"Draft" | "Published" | "In Progress">("Draft");
  const [bannerUrl, setBannerUrl] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  // Generate a random 24-char hex code similar to MongoDB ObjectId
  const generateHexCode = () => {
    return Array.from({ length: 24 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("");
  };

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnailPreview(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a course title.");
      return;
    }

    const finalCode = autoGenerate ? (courseCode || generateHexCode()) : (courseCode.trim() || generateHexCode());
    const durationNum = parseInt(durationMins, 10) || 30;
    const durationStr = durationNum >= 60
      ? `${Math.floor(durationNum / 60)}h ${durationNum % 60 ? `${durationNum % 60}m` : ""}`
      : `${durationNum} min`;

    const newCourse: Course = {
      id: finalCode,
      title: title.trim(),
      coverTitle: title.trim(),
      coverSubtitle: `${category || "Core Real Estate"} · ${skillLevel || "All Levels"}`,
      category: category || "Real Estate Knowledge",
      program: "PLACEMENT PROGRAM",
      overviewDescription: `Comprehensive course on ${title.trim()} covering industry fundamentals and practical execution.`,
      instructorName: "Faculty · FARE Academy",
      instructorTitle: "Senior Faculty · FARE Academy",
      instructorAvatar: title.trim().charAt(0).toUpperCase() || "C",
      modulesCount: 1,
      lessonsCount: 1,
      lessonsCompleted: 0,
      duration: durationStr,
      updatedAt: "Today",
      progressPercent: 0,
      status: "In Progress",
      visualType: bannerUrl ? "photo" : "cityscape",
      photoUrl: bannerUrl.trim() || undefined,
      modules: [
        {
          id: `mod-${Date.now()}`,
          moduleNumber: 1,
          title: "Introduction & Key Concepts",
          lessons: [
            {
              id: `les-${Date.now()}`,
              title: `Getting Started with ${title.trim()}`,
              type: "VIDEO",
              durationMinutes: durationNum,
              isCompleted: false,
            },
          ],
        },
      ],
    };

    onCourseCreated(newCourse);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-['Outfit'] select-text">
      <div className="bg-white rounded-[8px] shadow-[0_20px_50px_rgba(11,29,58,0.3)] border border-[#E2E8F0] w-full max-w-2xl p-6 sm:p-8 flex flex-col gap-6 my-8 animate-in fade-in zoom-in-95 duration-150 relative">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-[#0B1D3A] tracking-tight">
              Create Course
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Fill in the details below to add a new course to the catalogue.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-[#0B1D3A] p-1 rounded-[6px] transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* SECTION 1: BASIC INFO */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#C99A2E]">
              Basic Info
            </h3>

            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Residential Sales Fundamentals"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs transition-all"
              />
            </div>

            {/* Course Code */}
            <div>
              <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                Course Code *
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  readOnly={autoGenerate}
                  disabled={autoGenerate}
                  value={autoGenerate ? "" : courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder=""
                  className={`flex-1 rounded-[8px] px-3.5 py-2.5 text-xs font-mono border shadow-2xs transition-all ${
                    autoGenerate
                      ? "bg-slate-50 border-[#E2E8F0] text-slate-400 cursor-not-allowed"
                      : "bg-[#F8FAFD] hover:bg-white focus:bg-white border-[#E2E8F0] text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50"
                  }`}
                />
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold text-[#0B1D3A] shrink-0">
                  <input
                    type="checkbox"
                    checked={autoGenerate}
                    onChange={(e) => setAutoGenerate(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0B1D3A] accent-[#0B1D3A] cursor-pointer"
                  />
                  <span>Auto-generate</span>
                </label>
              </div>
            </div>
          </div>

          {/* SECTION 2: CLASSIFICATION */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#C99A2E]">
              Classification
            </h3>

            {/* Row 1: Category & Language */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Category */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs appearance-none cursor-pointer pr-9"
                  >
                    <option value="">Select category</option>
                    <option value="Real Estate Knowledge">Real Estate Knowledge</option>
                    <option value="Leadership & Team Management">Leadership & Team Management</option>
                    <option value="Sales Skills">Sales Skills</option>
                    <option value="Legal & Compliance">Legal & Compliance</option>
                    <option value="Commercial Real Estate">Commercial Real Estate</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Language */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Language
                </label>
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs appearance-none cursor-pointer pr-9"
                  >
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Tamil">Tamil</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Skill Level, Duration & Status */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Skill Level */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Skill Level
                </label>
                <div className="relative">
                  <select
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                    className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs appearance-none cursor-pointer pr-9"
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Duration (mins)
                </label>
                <input
                  type="number"
                  min="1"
                  value={durationMins}
                  onChange={(e) => setDurationMins(e.target.value)}
                  className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs transition-all"
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Status
                </label>
                <div className="relative">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as "Draft" | "Published" | "In Progress")}
                    className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs font-semibold text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs appearance-none cursor-pointer pr-9"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: MEDIA */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#C99A2E]">
              Media
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Thumbnail Image Dropzone */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Thumbnail Image
                </label>
                <label className="border-2 border-dashed border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] p-5 flex flex-col items-center justify-center gap-1.5 bg-[#F8FAFD] hover:bg-[#F0F4FF]/50 cursor-pointer transition-colors relative min-h-[96px]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  {thumbnailPreview ? (
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      className="w-full h-16 object-cover rounded-[6px]"
                    />
                  ) : (
                    <>
                      <UploadCloud className="w-5 h-5 text-[#C99A2E]" />
                      <span className="text-xs font-semibold text-slate-600">
                        Click to upload
                      </span>
                    </>
                  )}
                </label>
              </div>

              {/* Banner URL */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1.5">
                  Banner URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/banner.png"
                  value={bannerUrl}
                  onChange={(e) => setBannerUrl(e.target.value)}
                  className="w-full bg-[#F8FAFD] hover:bg-white focus:bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 shadow-2xs transition-all"
                />
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-[8px] border border-[#E2E8F0] text-xs font-semibold text-slate-700 hover:bg-[#F0F4FF] cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="relative overflow-hidden group/btn px-5 py-2 rounded-[8px] bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-xs font-semibold text-white shadow-[0_4px_12px_rgba(11,29,58,0.25)] hover:shadow-[0_8px_20px_rgba(11,29,58,0.35)] cursor-pointer transition-all hover:-translate-y-0.5"
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <span>Create Course</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
