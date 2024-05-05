export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24 bg-no-repeat'
      style={{
        backgroundImage: "url('/newletterLogo.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <h1 className='text-4xl font-bold text-center text-blue-500 mb-8'>
        Welcome to <span className='text-red-500'>Subly</span> 🚀
      </h1>
      <p className='mx-32'>
        Subly takes the hassle out of email marketing. Craft compelling
        newsletters with intelligent content suggestions. Analyze data insights
        to optimize your reach. Automate your workflow, streamline your
        strategy.
      </p>
    </main>
  );
}
