export default function DrinkLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='max-w-xl'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>npm i daisyui</code>
        </pre>
      </div>
      {children}
    </div>
  );
}
