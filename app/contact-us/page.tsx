export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <form className="bg-white shadow-md rounded-lg p-6 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <textarea
          placeholder="Your Message"
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
