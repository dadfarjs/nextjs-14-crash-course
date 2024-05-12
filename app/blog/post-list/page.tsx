interface PostList {
  id: string;
  title: string;
}

const PostList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostList[] = await response.json();
  return (
    <div className="p-2">
      <ul>
        {data?.splice(0, 10)?.map((item: PostList, index: number) => (
          <li
            key={item?.id}
            className={`my-2 p-2 text-slate-800 font-bold rounded-md opacity-95 ${
              index % 2 === 0 ? "bg-slate-300" : "bg-slate-500"
            }`}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
