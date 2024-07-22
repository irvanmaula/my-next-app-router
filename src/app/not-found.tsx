import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h1 className=' text-9xl'>404</h1>
      <p className=' text-3xl'>Not Found</p>
      <Link href="/" className='bg-blue-700 text-white p-3 rounded-lg m-3'>Return Home</Link>
    </div>
  );
}
