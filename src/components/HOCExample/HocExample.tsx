import HelloComponent from './HelloComponent';
import withGreeting from './WithGreeting';

const EnhancedHello = withGreeting(HelloComponent);

const HocExample = () => {
  return (
    <div>
    <EnhancedHello />
  </div>
  )
}

export default HocExample