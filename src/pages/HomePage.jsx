function HomePage() {
  return (
    <div className='bgImageHome bg-cover bg-fixed h-screen flex flex-col justify-center items-center'>
      <div className='w-96 text-lg'>
        <p className='text-gray-300 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio
          iure exercitationem quidem hic sunt fuga repudiandae dolores
          praesentium expedita voluptas non, minima accusamus obcaecati nisi
          eius sequi ipsa aut!
        </p>
      </div>
      <button
        className='w-1/5 rounded-3xl bg-blue-400 mt-4 mr-auto ml-auto p-2 text-white'
        type='button'
      >
        Explore more
      </button>
    </div>
  );
}

export default HomePage;
