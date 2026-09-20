import { useParams } from "react-router-dom";
import Prof from "./components/Prof";

export default function BlogDetails({ data }) {
  const { slug } = useParams();

  const post = data.posts.find((item) => item.slug === slug);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  const recommendedPosts = data.posts
    .filter(
      (item) =>
        item.category === post.category &&
        item.id !== post.id
    )
    .slice(0, 3);

  return (
    <Prof
      post={post}
      recommendedPosts={recommendedPosts}
    />
  );
}