import React from 'react'

const page = () => {
  return (
  <div><figure  className="md:flex bg-gray-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/shoaib-pic.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello! my name is shoaib akhtar and i have IT student. I belong to city Rahim Yar Khan. I have continue graduate in computer science from Islamia University.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-blue-600 dark:text-sky-400">
        Shoaib Akhtar
      </div>
      <div className="text-pink-400 dark:text-slate-500">
        Artificial Intelligence, (student)
      </div>
    </figcaption>
  </div>
</figure></div>
  )
}
export default page