const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Halo, Saya Ilham</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Semarang, Jawa Tengah <span className='ml-1'>🇮🇩</span>
            </li>
            <li>Student Staff UNNES TV</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        Memiliki minat yang besar dalam dunia videografi, senang mengoperasikan
        kamera dan mengabadikan momen-momen berharga. Selain itu, juga mahir
        dalam mengedit video untuk menghasilkan konten yang menarik.
      </p>
    </section>
  );
};

export default Introduction;
