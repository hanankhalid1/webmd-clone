import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className="p-10 mx-[5%]">
        <div className='className="flex justify-between border-b border-gray-400"'>
        <h3 className="text-primary text-[1.25rem] font-semibold">Latest ADHD Blog Posts</h3>
        </div>
      <div className="flex justify-between items-center mb-4 mt-6">
        <div className="flex">
          <Image
            src="/images/medicial-conditions-pageimages/janet_geddis_blog.jpg" 
            alt="Janet Geddis"
            width={250}
            height={250}
            className=""
          />
          <div className=" bg-white p-10">
            <h3 className="text-lg font-bold">Janet Geddis</h3>
            <p className="text-sm text-gray-600">Diagnosed since 1991</p>
            <hr className="w-full border-t-2 border-gray-300 mt-2 mb-2"/>
            <p className="text-lg font-semibold mt-2">ADHD: My Favorite Hacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;




