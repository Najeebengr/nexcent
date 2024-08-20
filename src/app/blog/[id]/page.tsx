import React from 'react';
import { blogs } from '@/constants';
import Image from 'next/image';
type blogDetailPageProps = {
    params: {
        id: string;
    };
};
function findBlogDetails(id: number){
const blog = blogs.find((item)=>{
    return item.id === id;
});
return blog
}

function BlogPost({params}: blogDetailPageProps) {
    const blog = findBlogDetails(Number(params.id));
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Blog Post Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog?.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <img src="/author-avatar.jpg" alt="Author" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-gray-800 font-semibold">{blog?.author}</p>
              <p className="text-sm">Published on {blog?.date}</p>
            </div>
          </div>
          <Image src={`${blog?.imgURL}`} className='w-full h-64 object-cover rounded-lg mb-6' alt="Blog Post" width={1025} height={0} priority />
        </div>

        {/* Blog Post Content */}
        <div className="text-gray-700 leading-relaxed space-y-6">
            <h2 className='sub-heading-style'>
                {blog?.content}
            </h2>
          <p>
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs
            without having to write custom CSS. It’s highly customizable and provides a modern way to style web
            applications.
          </p>

          <p>
            In this guide, we'll cover the basics of Tailwind CSS, including its core concepts, how to install and configure it,
            and some best practices for using it effectively in your projects.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Getting Started with Tailwind CSS</h2>
          <p>
            To get started with Tailwind CSS, you’ll need to install it using npm or yarn. Once installed, you can include
            Tailwind in your CSS by importing it at the top of your CSS file.
          </p>

          <pre className="bg-gray-100 p-4 rounded-lg">
            <code>
              {`// Install Tailwind CSS
npm install tailwindcss

// Include Tailwind in your CSS
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';`}
            </code>
          </pre>

          <p>
            After setting up Tailwind, you can start using its utility classes in your HTML to style your components. Tailwind
            comes with a wide variety of utility classes, including typography, layout, spacing, and color utilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Customizing Tailwind CSS</h2>
          <p>
            Tailwind CSS is highly customizable. You can create a custom configuration file to override the default theme,
            extend utilities, and define custom plugins.
          </p>

          <p>
            With Tailwind’s configuration file, you have full control over your design system, allowing you to build unique
            and consistent designs across your project.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
            "Tailwind CSS allows you to build modern web applications with speed and flexibility. It’s a game-changer for
            frontend development."
          </blockquote>

          <p>
            Whether you’re building a small project or a large-scale application, Tailwind CSS provides the tools you need to
            build responsive, scalable, and maintainable designs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

