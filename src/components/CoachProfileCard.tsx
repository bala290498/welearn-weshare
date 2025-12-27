import { Check, Trophy, Users, Award } from 'lucide-react';

interface CoachProfileCardProps {
  courseId?: string;
}

/**
 * CoachProfileCard (Vertical Layout)
 *
 * NOTE:
 * We intentionally avoid next/image here because sandboxed or preview
 * environments often do not have access to local public assets like
 * "/coach.jpg", which can trigger runtime errors.
 *
 * A standard <img> tag with a remote-safe placeholder ensures stability
 * while remaining compatible with real Next.js apps.
 */
export default function CoachProfileCard({ courseId }: CoachProfileCardProps) {
  // Map course ID to trainer image
  const getTrainerImage = () => {
    if (courseId && (courseId.includes('devops') || courseId === 'devops')) {
      return '/trainers/balasubramani_arumugam.webp';
    }
    // Default placeholder
    return 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop';
  };

  return (
    <div className="w-full max-w-sm md:max-w-4xl rounded-3xl bg-white p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-start md:gap-8">
        {/* Left Side: Avatar, Name, Title, Company */}
        <div className="flex flex-col items-center md:flex-shrink-0">
          {/* Avatar */}
          <div className="relative h-32 w-32">
            <img
              src={getTrainerImage()}
              alt="Balasubramani Arumugam"
              className="h-full w-full rounded-full object-cover ring-4 ring-blue-500"
            />
            <span
              aria-label="online-status"
              className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"
            />
          </div>

          {/* Name & Title */}
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            Balasubramani Arumugam
          </h2>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
            Senior DevOps and Cloud Engineer
          </p>

          {/* Company */}
          <div className="mt-3 flex justify-center">
            <span className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              <Check size={16} />
              CMA CGM
            </span>
          </div>
        </div>

        {/* Right Side: Stats and Bio */}
        <div className="mt-6 md:mt-0 flex flex-col md:flex-1">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-gray-50 p-4 text-center">
            <div>
              <Users className="mx-auto text-blue-500" />
              <p className="mt-1 text-xl font-bold">200+</p>
              <p className="text-xs text-gray-500">Trained</p>
            </div>
            <div>
              <Award className="mx-auto text-purple-500" />
              <p className="mt-1 text-xl font-bold">6+</p>
              <p className="text-xs text-gray-500">Experience</p>
            </div>
            <div>
              <Trophy className="mx-auto text-yellow-500" />
              <p className="mt-1 text-xl font-bold">4.9</p>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-6 text-justify text-sm text-gray-600">
            DevOps and Cloud Engineering expert with 6+ years of experience helping organizations accelerate delivery through automated, scalable cloud and CI/CD (Continuous Integration / Continuous Deployment) solutions. Partners with businesses to reduce deployment risk, improve system reliability, and drive measurable operational results.
          </p>
        </div>
      </div>
    </div>
  );
}

