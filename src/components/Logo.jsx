import { BaggageClaim } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const Logo = ({ className }) => {
  return (
    <div className={`flex items-center gap-1 text-2xl ${className && className}`} >
      <BaggageClaim className='text-primary size-8' />
      <h1 className="font-semibold font-Inter">
        Edose <span className="text-primary">sale</span>
      </h1>
    </div>

  )
}

export default Logo