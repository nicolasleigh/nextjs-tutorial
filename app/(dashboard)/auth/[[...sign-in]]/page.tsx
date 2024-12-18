export default function SignInPage({ params }: { params: Promise<{ "sign-in": string }> }) {
  console.log(params);
  return <h1 className='text-7xl'>Sign</h1>;
}
