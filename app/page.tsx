import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
