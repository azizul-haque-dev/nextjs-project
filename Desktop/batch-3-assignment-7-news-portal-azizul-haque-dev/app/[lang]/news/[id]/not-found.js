// app/not-found.js

export default function NotFound({ params }) {
  const { id } = params;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-2">
        404 - News with ID {id} Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Go Home
      </a>
    </div>
  );
}
