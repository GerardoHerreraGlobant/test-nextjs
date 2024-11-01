import Link from "next/link";

const HomePage = () => {
  const arrayOfTen = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div>
      <h1>Showing the first 10 heroes</h1>
      <p>This page is part of a testing tutorial.</p>
      <a href="https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html" target="_blank">Link </a>
      <ul>
        {arrayOfTen.map((i) => (
          <li key={i}>
            <Link href={`/${i}`}>Hero # {i}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;