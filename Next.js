import Image from 'next/image';
import profilePic from '../public/profile.jpg';

const Home = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
  </div>
);

export default Home;
